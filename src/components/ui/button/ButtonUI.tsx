"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import {ButtonUIProps} from "@/types/button-ui";
import {buttonColors} from "@/resources/styles-config";

const resolveColor = (color?: string) => {
    if (!color) return "";
    return buttonColors[color as keyof typeof buttonColors] || color;
};

const hexToRgba = (hex: string, alpha = 1) => {
    if (!hex) return `rgba(0,0,0,${alpha})`;
    if (hex.startsWith("rgba") || hex.startsWith("rgb") || hex.startsWith("var"))
        return hex;
    let c = hex.replace("#", "");
    if (c.length === 3) c = c.split("").map((ch) => ch + ch).join("");
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const ButtonUI: React.FC<ButtonUIProps & { hoverEffect?: "none" | "shadow" | "glow" | "scale"; }> = ({
          variant = "solid",
          shape = "default",
          size = "md",
          fullWidth = false,
          color = "primary",
          hoverColor = "hover",
          textColor,
          hoverTextColor,
          hoverEffect = "shadow",
          disabled,
          children,
          sx,
          loading,
          text,
          type,
          startIcon,
          endIcon,
          onClick,
      }) => {
    const resolvedBase = resolveColor(color);
    const resolvedHover = resolveColor(hoverColor) || resolvedBase;
    const resolvedText = textColor ? resolveColor(textColor) : undefined;
    const resolvedHoverText = hoverTextColor
        ? resolveColor(hoverTextColor)
        : resolvedText;

    const circleSizes: Record<"sm" | "md" | "lg", number> = {
        sm: 34,
        md: 42,
        lg: 54,
    };
    const isCircle = shape === "circle";
    const side = circleSizes[size];

    const hoverEffects: Record<NonNullable<typeof hoverEffect>, any> = {
        none: {},
        shadow: {
            boxShadow: "0 10px 20px rgba(70, 49, 32, 0.10)",
            transform: "translateY(-1px)",
        },
        glow: {
            boxShadow: `0 8px 18px ${hexToRgba(resolvedHover, 0.14)}`,
            transform: "translateY(-1px)",
        },
        scale: {
            transform: "translateY(-1px) scale(1.01)",
        },
    };

    const byVariant =
        variant === "outlined"
            ? {
                color: resolvedText || resolvedBase,
                borderColor: resolvedBase,
                bgcolor: "rgba(255,252,248,0.82)",
                transition: "all 0.18s ease-in-out",
                "&:hover": {
                    color: resolvedHoverText || resolvedHover,
                    borderColor: resolvedHover,
                    bgcolor: hexToRgba(resolvedHover, 0.06),
                    ...hoverEffects[hoverEffect],
                },
                "&:active": {
                    transform: "translateY(0)",
                    boxShadow: "none",
                },
            }
            : variant === "soft"
                ? {
                    color: resolvedText || resolvedBase,
                    bgcolor: hexToRgba(resolvedBase, 0.1),
                    transition: "all 0.18s ease-in-out",
                    "&:hover": {
                        color: resolvedHoverText || resolvedHover,
                        bgcolor: hexToRgba(resolvedHover, 0.14),
                        ...hoverEffects[hoverEffect],
                    },
                    "&:active": {
                        transform: "translateY(0)",
                        boxShadow: "none",
                    },
                }
                : variant === "plain"
                    ? {
                        color: resolvedText || resolvedBase,
                        bgcolor: "transparent",
                        transition: "all 0.18s ease-in-out",
                        "&:hover": {
                            color: resolvedHoverText || resolvedHover,
                            bgcolor: hexToRgba(resolvedHover, 0.07),
                            ...hoverEffects[hoverEffect],
                        },
                        "&:active": {
                            transform: "translateY(0)",
                            boxShadow: "none",
                        },
                    }
                    : {
                        // solid
                        color: resolvedText || resolveColor("inverse"),
                        bgcolor: resolvedBase,
                        transition: "all 0.18s ease-in-out",
                        "&:hover": {
                            color: resolvedHoverText || resolveColor("inverse"),
                            bgcolor: resolvedHover,
                            ...hoverEffects[hoverEffect],
                        },
                        "&:active": {
                            transform: "translateY(0)",
                            boxShadow: "0 6px 14px rgba(70, 49, 32, 0.10)",
                        },
                    };

    const sizeStyles: Record<"sm" | "md" | "lg", { px: number; py: number; fs: string }> = {
        sm: { px: 14, py: 8, fs: "0.84rem" },
        md: { px: 18, py: 10, fs: "0.92rem" },
        lg: { px: 22, py: 12, fs: "0.98rem" },
    };
    const currentSize = sizeStyles[size];

    return (
        <Button
            variant={variant}
            size={size}
            type={type}
            disabled={disabled}
            loading={loading}
            fullWidth={isCircle ? false : fullWidth}
            startDecorator={startIcon}
            endDecorator={endIcon}
            onClick={onClick}
            sx={{
                borderRadius: isCircle ? "50%" : shape === "rounded" ? "999px" : "14px",
                ...(isCircle && {
                    width: side,
                    height: side,
                    minWidth: side,
                    padding: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: 1,
                    flex: "0 0 auto",
                    alignSelf: "center",
                    "--Button-gap": "0px",
                    fontSize: size === "sm" ? "14px" : size === "lg" ? "17px" : "15px",
                }),
                fontFamily: "var(--font-family, 'Roboto', sans-serif)",
                fontWeight: 600,
                letterSpacing: "0.015em",
                textTransform: "none",
                minHeight: isCircle ? side : "auto",
                paddingInline: isCircle ? 0 : `${currentSize.px}px`,
                paddingBlock: isCircle ? 0 : `${currentSize.py}px`,
                fontSize: isCircle ? undefined : currentSize.fs,
                lineHeight: isCircle ? undefined : 1.1,
                justifyContent: "center",
                boxShadow: variant === "solid" ? "0 8px 18px rgba(70, 49, 32, 0.10)" : "none",
                "&.Mui-disabled": {
                    opacity: 0.55,
                    boxShadow: "none",
                },
                ...byVariant,
                ...sx,
            }}
        >
            {isCircle ? null : (children ?? text)}
        </Button>
    );
};

export default ButtonUI;

// DrawerMenu.tsx
import React, { FC } from "react";
import { Drawer } from "@mui/material";
import styles from "./Drawer.module.scss";
import Image from "next/image";
import AuthButtons from "@/components/widgets/auth-buttons/AuthButtons";
import { getHeaderContent } from "@/resources/content";
import { drawerConfig } from "@/resources/styles-config";
import { DrawerMenuProps } from "@/types/drawer-menu";
import { IoCloseSharp } from "react-icons/io5";
import CurrencySwitch from "@/components/widgets/currency-switch/CurrencySwitch";

const DrawerMenu: FC<DrawerMenuProps> = ({ open, onClose }) => {
    const headerContent = getHeaderContent();
    const cfg = drawerConfig;

    return (
        <Drawer
            anchor={cfg.anchor}
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: cfg.width,              // ✅ RESPONSIVE
                    maxWidth: "100vw",
                    fontFamily: "var(--app-font, 'Roboto', sans-serif)",
                    p: cfg.padding,
                    overflow: "hidden",
                },
            }}
        >
            {/* CLOSE ICON */}
            <IoCloseSharp className={styles.closeIcon} onClick={onClose} />

            <div
                className={styles.content}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: cfg.contentGap,
                    justifyContent: cfg.contentAlign,
                    height: "100%",
                    alignItems: "center",
                }}
            >
                {/* TOP */}
                <div className={styles.topRow}>
                    <a
                        href={headerContent.logo.href}
                        className={styles.logo}
                        onClick={onClose}
                    >
                        <Image
                            width={cfg.logoWidth}
                            height={cfg.logoHeight}
                            src={headerContent.logo.src}
                            alt={headerContent.logo.alt}
                        />
                    </a>

                    <div className={styles.topRowInner}>
                        <AuthButtons />
                        <CurrencySwitch />
                    </div>
                </div>

                {/* NAV */}
                <nav
                    className={styles.nav}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: cfg.navGap,
                    }}
                >
                    {headerContent.links.map((link) => (
                        <a
                            href={link.href}
                            key={link.label}
                            className={styles.link}
                            onClick={onClose}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </Drawer>
    );
};

export default DrawerMenu;

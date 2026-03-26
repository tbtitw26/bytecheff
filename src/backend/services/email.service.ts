import { sendEmail } from "@/backend/utils/sendEmail";
import { ENV } from "@/backend/config/env";
import {
    COMPANY_NAME,
    COMPANY_ADDRESS,
    COMPANY_PHONE,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

export const emailService = {
    async sendWelcomeEmail(data: {
        email: string;
        firstName: string;
    }) {
        const companyName = COMPANY_NAME || "Cheff Mate";
        const appUrl = ENV.APP_URL || "http://localhost:3000";

        const subject = `Thank you for registering with ${companyName}`;

        const text = `
Hi ${data.firstName},

Thank you for registering with ${companyName}.
We are glad to have you with us.

Your account has been created successfully, and you can now sign in and start using the platform.

${COMPANY_EMAIL ? `Support email: ${COMPANY_EMAIL}` : ""}
${COMPANY_PHONE ? `Phone: ${COMPANY_PHONE}` : ""}
${COMPANY_ADDRESS ? `Address: ${COMPANY_ADDRESS}` : ""}

Best regards,
${companyName} Team
        `.trim();

        const html = `
        <div style="font-family: Arial, sans-serif; background:#f4faff; padding:20px; color:#333;">
          <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; padding:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
            <h2 style="color:#007BFF; text-align:center; margin-bottom:24px;">
              Thank you for registering with ${escapeHtml(companyName)}
            </h2>

            <p style="font-size:16px; line-height:1.6;">
              Hi <strong>${escapeHtml(data.firstName)}</strong>,
            </p>

            <p style="font-size:16px; line-height:1.6;">
              Thank you for registering with <strong>${escapeHtml(companyName)}</strong>.
              We are glad to have you with us.
            </p>

            <p style="font-size:16px; line-height:1.6;">
              Your account has been created successfully, and you can now sign in and start using the platform.
            </p>

            <div style="text-align:center; margin:30px 0;">
              <a
                href="${escapeHtml(appUrl)}"
                style="background:#007BFF; color:#fff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:bold; display:inline-block;"
              >
                Open ${escapeHtml(companyName)}
              </a>
            </div>

            ${
            COMPANY_EMAIL || COMPANY_PHONE || COMPANY_ADDRESS
                ? `
            <div style="margin-top:24px; padding:16px; background:#f8fbff; border-radius:8px;">
              <p style="margin:0 0 10px; font-size:14px; font-weight:bold;">
                Contact details
              </p>
              ${
                    COMPANY_EMAIL
                        ? `<p style="margin:4px 0; font-size:14px;">Email: ${escapeHtml(COMPANY_EMAIL)}</p>`
                        : ""
                }
              ${
                    COMPANY_PHONE
                        ? `<p style="margin:4px 0; font-size:14px;">Phone: ${escapeHtml(COMPANY_PHONE)}</p>`
                        : ""
                }
              ${
                    COMPANY_ADDRESS
                        ? `<p style="margin:4px 0; font-size:14px;">Address: ${escapeHtml(COMPANY_ADDRESS)}</p>`
                        : ""
                }
            </div>
            `
                : ""
        }

            <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />

            <p style="font-size:14px; color:#777; text-align:center; margin:0 0 8px;">
              © ${new Date().getFullYear()} ${escapeHtml(companyName)} – All rights reserved.
            </p>

            ${
            COMPANY_LEGAL_NAME || COMPANY_NUMBER
                ? `
            <p style="font-size:13px; color:#999; text-align:center; margin:0;">
              ${COMPANY_LEGAL_NAME ? escapeHtml(COMPANY_LEGAL_NAME) : ""}
              ${COMPANY_LEGAL_NAME && COMPANY_NUMBER ? " · " : ""}
              ${COMPANY_NUMBER ? `Company No. ${escapeHtml(COMPANY_NUMBER)}` : ""}
            </p>
            `
                : ""
        }
          </div>
        </div>
        `;

        return await sendEmail(data.email, subject, text, html);
    },

    async sendOrderConfirmationEmail(data: {
        email: string;
        firstName?: string;
        subject: string;
        summary: string;
        amountLabel: string;
        transactionDate: Date;
        details: Array<{ label: string; value: string }>;
    }) {
        const companyName = COMPANY_NAME || "Cheff Mate";
        const greetingName = data.firstName?.trim() || "there";
        const formattedDate = data.transactionDate.toLocaleString("en-GB", {
            dateStyle: "medium",
            timeStyle: "short",
        });
        const detailsText = data.details
            .map((detail) => `${detail.label}: ${detail.value}`)
            .join("\n");
        const detailsHtml = data.details
            .map(
                (detail) => `
                    <tr>
                      <td style="padding:8px 0; color:#555;">${escapeHtml(detail.label)}</td>
                      <td style="padding:8px 0; text-align:right; color:#111; font-weight:600;">
                        ${escapeHtml(detail.value)}
                      </td>
                    </tr>
                `
            )
            .join("");

        const text = `
Hi ${greetingName},

${data.summary}

Transaction date: ${formattedDate}
Amount: ${data.amountLabel}

${detailsText}

${COMPANY_EMAIL ? `Support email: ${COMPANY_EMAIL}` : ""}

Best regards,
${companyName} Team
        `.trim();

        const html = `
        <div style="font-family: Arial, sans-serif; background:#f4faff; padding:20px; color:#333;">
          <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; padding:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
            <h2 style="color:#007BFF; text-align:center; margin-bottom:24px;">
              ${escapeHtml(data.subject)}
            </h2>

            <p style="font-size:16px; line-height:1.6;">
              Hi <strong>${escapeHtml(greetingName)}</strong>,
            </p>

            <p style="font-size:16px; line-height:1.6;">
              ${escapeHtml(data.summary)}
            </p>

            <div style="margin:24px 0; padding:16px; background:#f8fbff; border-radius:8px;">
              <p style="margin:0 0 10px; font-size:14px; font-weight:bold;">Transaction summary</p>
              <p style="margin:4px 0; font-size:14px;"><strong>Date:</strong> ${escapeHtml(formattedDate)}</p>
              <p style="margin:4px 0; font-size:14px;"><strong>Amount:</strong> ${escapeHtml(data.amountLabel)}</p>
            </div>

            <table style="width:100%; border-collapse:collapse; margin:20px 0;">
              <tbody>
                ${detailsHtml}
              </tbody>
            </table>

            ${
                COMPANY_EMAIL
                    ? `<p style="font-size:14px; color:#666;">Need help? Contact us at ${escapeHtml(COMPANY_EMAIL)}.</p>`
                    : ""
            }

            <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />

            <p style="font-size:14px; color:#777; text-align:center; margin:0;">
              © ${new Date().getFullYear()} ${escapeHtml(companyName)}
            </p>
          </div>
        </div>
        `;

        return await sendEmail(data.email, data.subject, text, html);
    },

    async sendOrderReadyEmail(data: {
        email: string;
        firstName?: string;
        category: string;
        orderId: string;
    }) {
        const companyName = COMPANY_NAME || "Cheff Mate";
        const greetingName = data.firstName?.trim() || "there";
        const dashboardUrl = `${ENV.APP_URL.replace(/\/$/, "")}/profile`;
        const shortOrderId = data.orderId.slice(-6);

        const subject = "Your recipe is ready";
        const summary = `Your ${data.category} order #${shortOrderId} is now available in your account dashboard.`;

        const text = `
Hi ${greetingName},

${summary}

Open your dashboard here: ${dashboardUrl}

${COMPANY_EMAIL ? `Support email: ${COMPANY_EMAIL}` : ""}

Best regards,
${companyName} Team
        `.trim();

        const html = `
        <div style="font-family: Arial, sans-serif; background:#f4faff; padding:20px; color:#333;">
          <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; padding:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
            <h2 style="color:#007BFF; text-align:center; margin-bottom:24px;">
              ${escapeHtml(subject)}
            </h2>

            <p style="font-size:16px; line-height:1.6;">
              Hi <strong>${escapeHtml(greetingName)}</strong>,
            </p>

            <p style="font-size:16px; line-height:1.6;">
              ${escapeHtml(summary)}
            </p>

            <div style="text-align:center; margin:30px 0;">
              <a
                href="${escapeHtml(dashboardUrl)}"
                style="background:#007BFF; color:#fff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:bold; display:inline-block;"
              >
                Open Dashboard
              </a>
            </div>

            ${
                COMPANY_EMAIL
                    ? `<p style="font-size:14px; color:#666;">Need help? Contact us at ${escapeHtml(COMPANY_EMAIL)}.</p>`
                    : ""
            }

            <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />

            <p style="font-size:14px; color:#777; text-align:center; margin:0;">
              © ${new Date().getFullYear()} ${escapeHtml(companyName)}
            </p>
          </div>
        </div>
        `;

        return await sendEmail(data.email, subject, text, html);
    },
};

function escapeHtml(value: string) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

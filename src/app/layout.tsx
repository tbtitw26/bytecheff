import "./globals.css";
import { cookies } from "next/headers";
import {AlertProvider} from "@/context/AlertContext";
import PageWrapper from "@/components/layout/page-wrapper/PageWrapper";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import ProtectedRoute from "@/components/utils/protected-route/ProtectedRoute";
import {currentFont} from "@/resources/styles-config";
import {AllOrdersProvider} from "@/context/AllOrdersContext";
import {CurrencyProvider} from "@/context/CurrencyContext";
import { UserProvider } from "@/context/UserContext";
import { baseURL } from "@/resources/content";
import { IUser, Nullable } from "@/types/user.types";

async function getCurrentUser(): Promise<Nullable<IUser>> {
    let user: Nullable<IUser> = null;
    const cookieStore = await cookies();

    try {
        const res = await fetch(`${baseURL}/api/auth/me`, {
            method: "GET",
            headers: { Cookie: cookieStore.toString() },
            cache: "no-store",
        });

        if (res.ok) {
            const json = await res.json();
            user = json.user;
        } else if (cookieStore.get("refresh_token")) {
            const refreshRes = await fetch(`${baseURL}/api/auth/refresh`, {
                method: "POST",
                headers: { Cookie: cookieStore.toString() },
                cache: "no-store",
            });

            if (refreshRes.ok) {
                const json = await refreshRes.json();
                user = json.user;
            }
        }
    } catch (error) {
        console.error("layout user fetch error:", error);
    }

    return user;
}

async function Layout({children}: { children: React.ReactNode }) {
    const user = await getCurrentUser();

    return (
        <html lang="no">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link href={currentFont.url} rel="stylesheet"/>
            <style>{`:root { --font-family: ${currentFont.css}; }`}</style>
        </head>
        <body>
            <UserProvider user={user}>
                <AlertProvider>
                    <AllOrdersProvider>
                        <ProtectedRoute>
                            <CurrencyProvider>
                                <Header/>
                                <PageWrapper>
                                    {children}
                                </PageWrapper>
                                <Footer/>
                            </CurrencyProvider>
                        </ProtectedRoute>
                    </AllOrdersProvider>
                </AlertProvider>
            </UserProvider>
        </body>
        </html>
    );
}

export default Layout;

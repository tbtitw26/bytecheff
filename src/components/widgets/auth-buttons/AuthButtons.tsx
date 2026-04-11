import React from "react";
import {useUser} from "@/context/UserContext";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import styles from "./AuthButtons.module.scss";
import {FaUser} from "react-icons/fa";
import {GrMoney} from "react-icons/gr";
import { siteContent } from "@/resources/siteContent";

const AuthButtons: React.FC = () => {
    const user = useUser();
    const t = siteContent;

    if (user) {
        return (
            <div className={styles.userCompact}>
                <Link href="/profile" className={styles.userButton}>
                    <div className={styles.balance}>
                        <GrMoney className={styles.iconMoney} />
                        <span>{user?.tokens ?? 0}</span>
                    </div>
                    <FaUser className={styles.iconUser} />
                </Link>
            </div>

        )
        ;
    }

    return (
        <div className={styles.nonAuthedButtons}>
            <Link href="/sign-in">
                <ButtonUI
                    variant="plain"
                    text={t.auth.signIn}
                    shape="default"
                    hoverColor="none"
                    hoverEffect="none"
                    fullWidth
                    textColor="secondary"
                />
            </Link>
            <Link href="/sign-up">
                <ButtonUI
                    text={t.auth.signUp}
                    shape="default"
                    color="primary"
                    hoverEffect="none"
                    fullWidth
                    textColor="quaternary"
                    hoverColor="primary"

                />
            </Link>
        </div>
    );
};

export default AuthButtons;

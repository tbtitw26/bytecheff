"use client";
import React from "react";
import {useAlert} from "@/context/AlertContext";
import {useAuthActions} from "@/utils/logoutClient";
import ButtonUI from "@/components/ui/button/ButtonUI";
import {FaSignOutAlt} from "react-icons/fa";

export function LogoutButton({all = false}: { all?: boolean }) {
    const {logout, logoutAll} = useAuthActions();
    const {showAlert} = useAlert();

    const handleClick = async () => {
        const ok = all ? await logoutAll() : await logout();
        showAlert(ok ? "Logget ut" : "Utklogging mislyktes", "", ok ? "success" : "error");
    };

    return (
        <ButtonUI
            variant="solid"
            color="danger"
            textColor="quaternary"
            size="lg"
            hoverEffect="shadow"
            hoverColor="danger"
            endIcon={<FaSignOutAlt/>}
            onClick={handleClick}
        >
            {all ? "Logg ut fra alle enheter" : "Logg ut"}
        </ButtonUI>

    );
}

import React from "react";
import "./button.scss";

type Props = {
    disabled?: boolean;
    onClick?: () => void
    children?: React.ReactNode;

}

export const Button = ({children, onClick, disabled = false}: Props) =>
    <button
        disabled={disabled}>{children}</button>

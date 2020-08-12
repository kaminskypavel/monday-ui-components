import React from "react";
import 'fontsource-roboto';
import "./button.scss";

type Props = {
    disabled?: boolean;
    onClick?: () => void
    type?: "primary" | "success" | "error" | "info"
    label: string
    children?: React.ReactNode;

}

export const Button = (props: Props) => {
    const {
        label,
        onClick,
        disabled,
        type = "primary"
    } = props;
    return <button
        className={type}
        disabled={disabled}
        onClick={onClick}>
        {label}
    </button>
}


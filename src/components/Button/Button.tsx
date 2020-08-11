import React from "react";

type Props = {
    onClick?: () => void
    children?: React.ReactNode;

}

const Button = ({children, onClick}: Props) => <button onClick={onClick}>{children}</button>

export default Button;

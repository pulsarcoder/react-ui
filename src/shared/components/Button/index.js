import React from "react";

export const Button = ({ label, ...props }) => (
    <button type="button" {...props}>{label}</button>
)
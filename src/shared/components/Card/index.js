import React from "react";
import './card.css';

export const Card = ({ className, id, ...props }) => {

    return (
        <div id={id || ""} className={`custom-card ${className}`} {...props}>
            {props.children}
        </div>
    )
}

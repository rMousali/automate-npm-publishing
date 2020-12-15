import React from "react";
import "./index.css";
 
interface IButtonProps {
 children: any;
 primary: boolean;
 disabled: boolean;
 onClick: any;
}
 
export default function Button({
 children,
 primary,
 disabled,
 onClick,
 ...props
}: IButtonProps) {
 return (
   <button
     className={primary ? "btn btn--primary" : "btn"}
     disabled={disabled}
     onClick={() => onClick}
     {...props}
   >
     {children}
   </button>
 );
}

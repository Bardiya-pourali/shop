import { ComponentProps } from "react";

type TVariant = "primary" | "danger" | "warning"|"success"|"purple";


type TButton = ComponentProps<"button"> &{
    variant?:TVariant;
}

const Button = ({ children,variant,style,...rest }: TButton) => {
  return <button {...rest} style={{borderRadius: "8px",padding: "4px 8px"
    ,...style,...variantCheck(variant)}} >
    {children}
    </button>;
};

export default Button;

function variantCheck(variant?: TVariant) {
    if (variant === "primary") {
      return { backgroundColor: "#6B21A8", color: "white" };
    }
     else if (variant === "danger") {
      return { backgroundColor: "red", color: "white" };
    }  
    else if (variant === "success") {
      return { backgroundColor: "green", color: "white" };
    } else if (variant === "warning") {
      return { backgroundColor: "yellow", color: "black" };
    } else {
      return { backgroundColor: "#00a4ff", color: "white" };
    }
  
  }

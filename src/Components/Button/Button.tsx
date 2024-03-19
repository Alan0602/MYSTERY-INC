import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "Dark" | "Light" | "Outline";
}

export default function Button({ children, variant, ...props }: buttonProps) {
  return (
    <button
      className={styles.button + " " + styles[variant ? variant : "Dark"]}
      {...props}
    >
      {children}
    </button>
  );
}

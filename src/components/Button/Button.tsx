import { clsx } from "clsx";
import styles from "./Button.module.less";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: "blue" | "green";
  padding?: "medium";
};

export const Button = ({
  className,
  color = "green",
  padding,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    className={clsx(
      styles.button,
      color === "blue" && styles["button--blue"],
      color === "green" && styles["button--green"],
      padding === "medium" && styles["button--padding-medium"],
      className,
    )}
  />
);

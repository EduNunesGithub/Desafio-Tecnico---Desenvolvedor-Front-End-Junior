import React from "react";
import { InputMask, InputMaskProps } from "@react-input/mask";
import { clsx } from "clsx";
import styles from "./TextField.module.less";

export type TextFieldProps = InputMaskProps & {
  containerProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  disableMask?: boolean;
  error?: React.ReactNode;
  errorProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
  label: React.ReactNode;
  labelProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      containerProps,
      disableMask = false,
      error,
      errorProps,
      label,
      labelProps,
      ...props
    },
    ref,
  ) => (
    <label
      {...containerProps}
      className={clsx(styles.container, containerProps?.className)}
    >
      <span
        {...labelProps}
        className={clsx(styles.container__span, labelProps?.className)}
      >
        {label}
      </span>

      {disableMask === true ?
        <input
          {...props}
          className={clsx(
            styles.container__input,
            error !== undefined && styles["container__input--error"],
            className,
          )}
          ref={ref}
        />
      : <InputMask
          {...props}
          className={clsx(
            styles.container__input,
            error !== undefined && styles["container__input--error"],
            className,
          )}
          ref={ref}
        />
      }

      {error !== undefined && (
        <span
          {...errorProps}
          className={clsx(styles.container__error, errorProps?.className)}
        >
          {error}
        </span>
      )}
    </label>
  ),
);

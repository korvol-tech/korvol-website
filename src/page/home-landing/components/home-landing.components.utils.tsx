import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

type ColoredTextProps = PropsWithChildren<
  JSX.IntrinsicElements["span"] & {
    color: "primary" | "secondary" | "custom";
    customColor?: string;
  }
>;

export const ColoredText: FC<ColoredTextProps> = ({
  color,
  customColor,
  children,
  ...rest
}) => {
  const textClass =
    color === "custom"
      ? customColor
      : color === "primary"
      ? "!text-primary"
      : "!text-secondary";
  return (
    <span {...rest} className={clsx(textClass, rest.className)}>
      {children}
    </span>
  );
};

type CTAButtonProps = PropsWithChildren<JSX.IntrinsicElements["button"]> & {
  color?: "primary" | "secondary";
};

export const CTAButton: FC<CTAButtonProps> = ({
  color = "primary",
  children,
  ...rest
}) => {
  const bgClass =
    color === "primary"
      ? "btn-primary !bg-primary"
      : "btn-secondary !bg-secondary";
  return (
    <button
      {...rest}
      className={clsx(
        "px-6 py-3 rounded text-white text-xl font-semibold",
        bgClass,
        rest.className
      )}
    >
      {children}
    </button>
  );
};

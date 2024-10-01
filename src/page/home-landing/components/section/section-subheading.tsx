import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export type SectionSubheadingProps = PropsWithChildren<
  JSX.IntrinsicElements["h4"]
>;

const SectionSubheading: FC<SectionSubheadingProps> = ({
  children,
  ...rest
}) => {
  return (
    <h4
      {...rest}
      className={clsx(
        "text-lg md:text-2xl lg:text-3xl text-center md:text-left",
        rest.className
      )}
    >
      {children}
    </h4>
  );
};

export default SectionSubheading;

import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

type SectionHeadingProps = PropsWithChildren<JSX.IntrinsicElements["h3"]>;

const SectionHeading: FC<SectionHeadingProps> = ({ children, ...rest }) => {
  return (
    <h3
      {...rest}
      className={clsx(
        "text-3xl md:text-4xl lg:text-6xl font-bold text-center md:text-left",
        rest.className
      )}
    >
      {children}
    </h3>
  );
};

export default SectionHeading;

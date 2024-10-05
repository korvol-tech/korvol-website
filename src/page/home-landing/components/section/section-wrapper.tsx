import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export type SectionWrapperProps = PropsWithChildren<
  JSX.IntrinsicElements["section"]
>;

const SectionWrapper: FC<SectionWrapperProps> = ({ children, ...rest }) => {
  return (
    <section
      {...rest}
      className={clsx("container py-12 md:py-32", rest.className)}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;

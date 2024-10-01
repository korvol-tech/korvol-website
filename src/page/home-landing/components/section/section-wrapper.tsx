import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export type SectionWrapperProps = PropsWithChildren<
  JSX.IntrinsicElements["section"]
>;

const SectionWrapper: FC<SectionWrapperProps> = ({ children, ...rest }) => {
  return (
    <section
      {...rest}
      className={clsx("container m-h-screen py-12", rest.className)}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;

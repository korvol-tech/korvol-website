import clsx from "clsx";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type Order =
  | "img-top--text-bottom"
  | "text-top--img-bottom"
  | "img-left--text-right"
  | "text-left--img-right";

type BaseImageBoxProps = {
  src: string;
  alt: string;
  text?: string;
  containerProps?: JSX.IntrinsicElements["div"];
  imgProps?: JSX.IntrinsicElements["img"];
  textProps?: JSX.IntrinsicElements["p"];
  textNode?: ReactNode;
  order?: Order;
};

type TextOnlyProps = {
  text: string;
  textNode?: never;
};

type TextNodeOnlyProps = {
  textNode: ReactNode;
  text?: never;
};

type EnforceTextProps = {
  order: Order;
  text: string;
  textNode?: never;
};

type EnforceTextNodeProps = {
  order: Order;
  textNode: ReactNode;
  text?: never;
};

type ImageBoxProps = BaseImageBoxProps &
  (TextOnlyProps | TextNodeOnlyProps | EnforceTextProps | EnforceTextNodeProps);

const ImageBox: FC<ImageBoxProps> = ({
  src,
  alt,
  text,
  containerProps,
  imgProps,
  textProps,
  textNode,
  order,
}) => {
  const orderClasses = (() => {
    const classes = {
      container: "",
      img: "",
      text: "",
    };

    switch (order) {
      case "img-top--text-bottom":
        classes.container = "grid grid-rows-2 justify-center";
        classes.img = "order-1 justify-center";
        classes.text = "order-2";
        break;
      case "text-top--img-bottom":
        classes.container = "grid grid-rows-2 justify-center";
        classes.img = "order-2 justify-center";
        classes.text = "order-1";
        break;
      case "img-left--text-right":
        classes.container = "grid grid-cols-2 items-center";
        classes.img = "order-1 justify-center";
        classes.text = "order-2";
        break;
      case "text-left--img-right":
        classes.container = "grid grid-cols-2 items-center";
        classes.img = "order-2 justify-center";
        classes.text = "order-1";
        break;
      default:
        break;
    }

    return classes;
  })();

  return (
    <div
      {...containerProps}
      className={clsx(
        "grid items-center",
        orderClasses.container,
        containerProps?.className
      )}
    >
      <div className={clsx("flex", orderClasses.img)}>
        <motion.img
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(imgProps as any)}
          src={src}
          alt={alt}
          className={clsx("w-32 md:w-40 lg:w-48", imgProps?.className)}
        />
      </div>
      {textNode ? (
        <motion.div className={clsx(orderClasses.text)}>{textNode}</motion.div>
      ) : (
        <motion.p
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...(textProps as any)
          }
          className={clsx("text-center", textProps?.className)}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default ImageBox;

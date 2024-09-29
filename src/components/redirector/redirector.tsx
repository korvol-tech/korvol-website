"use client";

import { redirect, RedirectType, usePathname } from "next/navigation";
import { FC, PropsWithChildren, useEffect, useState } from "react";

export type RedirectorProps = PropsWithChildren<{
  sources: string[];
  destination: string;
}>;

const Redirector: FC<RedirectorProps> = ({
  children,
  sources,
  destination,
}) => {
  const pathname = usePathname();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (
      pathname !== destination &&
      (sources.includes(pathname) || sources.includes("*"))
    ) {
      redirect(destination, RedirectType.replace);
    }

    setLoaded(true);
  }, []);

  return loaded ? <>{children}</> : null;
};

export default Redirector;

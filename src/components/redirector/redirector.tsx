"use client";

import { redirect, RedirectType, usePathname } from "next/navigation";
import { FC, PropsWithChildren, useEffect, useState } from "react";

export type RedirectorProps = PropsWithChildren<{
  sources: string[];
  destination: string;
}>;

/**
 * A components that compares the current pathname with a list of sources and
 * redirects to a destination if the current pathname matches any of the sources.
 * @param param0
 * @returns
 */

const Redirector: FC<RedirectorProps> = ({
  children,
  sources,
  destination,
}) => {
  const pathname = usePathname();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (
      // Ignore if the current pathname is the same as the destination
      pathname !== destination &&
      // Redirect if the current pathname matches any of the sources or if the
      // sources array contains a wildcard "*"
      (sources.includes(pathname) || sources.includes("*"))
    ) {
      redirect(destination, RedirectType.replace);
    }

    setLoaded(true);
  }, []);

  return loaded ? <>{children}</> : null;
};

export default Redirector;

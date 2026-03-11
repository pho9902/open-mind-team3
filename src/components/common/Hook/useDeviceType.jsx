import { useEffect, useState } from "react";

import { breakpoints } from "@/styles/media";

const QUERIES = {
  pc: `(min-width: ${breakpoints.pc})`,
  lgTablet: `(min-width: ${breakpoints.lgTablet})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
};

const getInitialDevice = () => {
  if (typeof window === "undefined") return "mobile";

  if (window.matchMedia(QUERIES.pc).matches) return "pc";
  if (window.matchMedia(QUERIES.lgTablet).matches) return "lgTablet";
  if (window.matchMedia(QUERIES.tablet).matches) return "tablet";
  return "mobile";
};

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(getInitialDevice);

  useEffect(() => {
    const pcQuery = window.matchMedia(QUERIES.pc);
    const lgTabletQuery = window.matchMedia(QUERIES.lgTablet);
    const tabletQuery = window.matchMedia(QUERIES.tablet);

    const mediaQueries = [pcQuery, lgTabletQuery, tabletQuery];

    const updateDevice = () => {
      if (pcQuery.matches) setDeviceType("pc");
      else if (lgTabletQuery.matches) setDeviceType("lgTablet");
      else if (tabletQuery.matches) setDeviceType("tablet");
      else setDeviceType("mobile");
    };

    updateDevice();

    mediaQueries.forEach((query) =>
      query.addEventListener("change", updateDevice),
    );

    return () => {
      mediaQueries.forEach((query) =>
        query.removeEventListener("change", updateDevice),
      );
    };
  }, []);

  return {
    isMobile: deviceType === "mobile",
    isTablet: deviceType === "tablet",
    isLargeTablet: deviceType === "lgTablet",
    isPC: deviceType === "pc",
    deviceType,
  };
};

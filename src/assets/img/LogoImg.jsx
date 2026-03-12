import { memo } from "react";

import Logo from "./Logo.svg";

function LogoImg({ width = "100%", ...props }) {
  return <img src={Logo} width={width} {...props} />;
}

export default memo(LogoImg);

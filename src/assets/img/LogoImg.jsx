import Logo from "./Logo.svg";

export default function LogoImg({ width = "100%", ...props }) {
  return <img src={Logo} alt="OpenMind Logo" width={width} {...props} />;
}

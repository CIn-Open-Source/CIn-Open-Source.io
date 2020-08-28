import React, { useContext } from "react";
import { ThemeContext } from "../themes/theme-context.js";

function Banner() {
  const { theme } = useContext(ThemeContext);
  const gradient = theme.banner_gradient;

  return (
    <div className={"shape shape-style-1 shape-".concat(gradient)}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default Banner;

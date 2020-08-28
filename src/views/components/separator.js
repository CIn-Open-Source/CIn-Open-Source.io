import React, { useContext } from "react";
import { ThemeContext } from "../themes/theme-context.js";

function Separator() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="separator separator-bottom separator-skew">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className={"fill-" + theme.background_color}
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>
  );
}

export default Separator;

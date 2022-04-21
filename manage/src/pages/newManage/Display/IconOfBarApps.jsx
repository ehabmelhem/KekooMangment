import React, { useMemo, useEffect, useState, Fragment } from "react";
import "./BarApps.scss";
import "./IconOfBarApps.scss";
import Tooltip from "@mui/material/Tooltip";
import "../Globals/DisplayGlobalVariables";

const IconOfBarApps = ({
  imgSrc,
  TitleToolTip,
  altApp,
  setCountPages,
  numberOfIcon,
}) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const GoToPage = (event) => {
    if (event.target.alt === "Home") global.currentpage = 0;
    if (event.target.alt === "Orders") global.currentpage = 1;
    if (event.target.alt === "AddVideo") global.currentpage = 2;
    if (event.target.alt === "Statistics") global.currentpage = 3;
    if (event.target.alt === "Profile") global.currentpage = 4;
    setCountPages(global.currentpage);
  };
  return (
    <>
      <div className="IconBarWithLine">
        <Tooltip title={TitleToolTip} placement="top">
          <img
            src={imgSrc}
            alt={altApp}
            className={
              numberOfIcon === global.currentpage
                ? "IconActive" 
                : "IconUnActive"
            }
            onClick={GoToPage}
          />
        </Tooltip>
      </div>
    </>
  );
};

export default IconOfBarApps;

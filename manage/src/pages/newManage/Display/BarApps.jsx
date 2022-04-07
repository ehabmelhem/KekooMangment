import PropTypes from "prop-types";
import React, { useMemo, useEffect, useState, Fragment } from "react";
import "./BarApps.scss";
import IconHome from "../../../Images/home_icon.PNG";
import IconProfile from "../../../Images/profile_icon.PNG";
import IconOrders from "../../../Images/orders_icon.PNG";
import IconStats from "../../../Images/stats_icon.PNG";
import IconAddVideo from "../../../Images/add_icon.PNG";
import IconOfBarApps from "./IconOfBarApps";
import "../Globals/DisplayGlobalVariables";
const BarApps = ({ setCountPages }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div className="BarApps">
      <div className="AppsIcons">
        <center>
          <IconOfBarApps
            imgSrc={IconHome}
            TitleToolTip="Home"
            altApp="Home"
            setCountPages={setCountPages}
            numberOfIcon={0}
          />
          <IconOfBarApps
            imgSrc={IconOrders}
            TitleToolTip="Orders"
            altApp="Orders"
            setCountPages={setCountPages}
            numberOfIcon={1}
          />
          <IconOfBarApps
            imgSrc={IconAddVideo}
            TitleToolTip="Add Video"
            altApp="AddVideo"
            setCountPages={setCountPages}
            numberOfIcon={2}
          />

          <IconOfBarApps
            imgSrc={IconStats}
            TitleToolTip="Statistics"
            altApp="Statistics"
            setCountPages={setCountPages}
            numberOfIcon={3}
          />

          <IconOfBarApps
            imgSrc={IconProfile}
            TitleToolTip="Profile"
            altApp="Profile"
            setCountPages={setCountPages}
            numberOfIcon={4}
          />
        </center>
      </div>
    </div>
  );
};

export default BarApps;

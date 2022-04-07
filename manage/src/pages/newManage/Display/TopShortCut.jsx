import React, { useMemo, useEffect, useState, Fragment } from "react";
import "./TopShortCut.scss";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import IconVolume from "../../../Images/volume.PNG";
import IconMuteVolume from "../../../Images/mutevolume.PNG";
import IconSunMode from "../../../Images/sun_mode.PNG";
import IconDarkMode from "../../../Images/dark_mode.PNG";

import IconCalculator from "../../../Images/calculator.PNG";
import IconAddVideo from "../../../Images/add_video.PNG";
import IconSearch from "../../../Images/search_icon.PNG";

import { RiSearchEyeLine } from "react-icons/ri";

import useSound from "use-sound";
import Clock from "../ClockDisplay/ClockDisplay";

const TopShortCut = () => {
  const theme = useTheme();
  const [isMute, setisMute] = React.useState(false);
  const [IsDark, setIsDark] = React.useState(false);

  const VolumeClick = (event) => {
    setisMute(!isMute);
  };
  const ModeClick = (event) => {
    setIsDark(!IsDark);
  };

  const [playActive] = useSound("../../../sounds/able-sound.mp3", {
    volume: 0.25,
  });
  const [playOn] = useSound("../../../sounds/able-sound.mp3", { volume: 0.25 });
  const [playOff] = useSound("../../../sounds/disable-sound.mp3", {
    volume: 0.25,
  });
  const handleChoose = (event) => {
    let navigation = document.getElementById("navigation");
    navigation.classList.toggle("active");
  };

  return (
    <div>
      <Box className="BarDisplayRight">
        <div className="BarDisplayIconsRight">
          <img
            alt=""
            src={isMute ? IconMuteVolume : IconVolume}
            onClick={VolumeClick}
            onMouseDown={playActive}
            onMouseUp={() => {
              isMute ? playOff() : playOn();
            }}
            className="IconTop IconVolume"
          />
          <img
            alt=""
            src={IsDark ? IconDarkMode : IconSunMode}
            onClick={ModeClick}
            className="IconTop IconMode"
          />
          <img alt="" src={IconCalculator} className="IconTop" />
        </div>
      </Box>
      <div className="BarDisplayIconsLeft">
        <div className="Clock">
          <Clock></Clock>
        </div>
      </div>
    </div>
  );
};

export default TopShortCut;

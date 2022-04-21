import React, {
  useMemo,
  useEffect,
  useCallback,
  useState,
  Fragment,
  useRef,
} from "react";
import "./Display.scss";
import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Home from "../../../pages/home/Home";
import HomeBussines from "../../ShopBussines/pages/Home";
import BarApps from "./BarApps";
import TopOfwindow from "./TopShortCut";
import AddNewProduct from "../../new/New";
import "../Globals/DisplayGlobalVariables";
import OrderDisplay from "../OrdersInDisplay/OrderDisplay";
import ProfilePage from "../ProfilePage/ProfilePage";

import StatisticsPage from "../StatsDispaly/StatisticsPage";

import OpenResize_icon from "../../../Images/OpenResize_icon.PNG";
import CloseResize_icon from "../../../Images/CloseResize_icon.PNG";
import Draw from "../DrawDisplay/Draw";
const Display = () => {
  const [CountPages, setCountPages] = React.useState(0);
  const [Expand_Open, setExpand_Open] = React.useState(false);

  const NumberOfPages = 5;
  const ResizeFunction = () => {
    setExpand_Open(!Expand_Open);
    console.log("expand " + Expand_Open);
  };

  const NextPageClick = () => {
    global.currentpage = (global.currentpage + 1) % NumberOfPages; // count pages = 2+1=3
    setCountPages(global.currentpage);
  };

  const BackPageClick = () => {
    if (global.currentpage == 0) {
      global.currentpage = 4;
    } else {
      if (global.currentpage >= 1) global.currentpage = global.currentpage - 1;
    }
    setCountPages(global.currentpage);
  };

  return (
    <div className="main">
      {/* Window display */}
      <div
        className={
          Expand_Open === true ? "displaySmall displayExpand" : "displaySmall"
        }
      >
        {Expand_Open === false && <TopOfwindow />}
        <div className="displayContent">
          {global.currentpage === 0 && <OrderDisplay></OrderDisplay>}
          {global.currentpage === 1 && <HomeBussines></HomeBussines>}
          {global.currentpage === 2 && (
            <div className="display AddNewProd ">
              <AddNewProduct />
            </div>
          )}
          {global.currentpage === 3 && <StatisticsPage></StatisticsPage>}
          {global.currentpage === 4 && <ProfilePage></ProfilePage>}
        </div>
      </div>

      {/* Buttons next and prev pages */}
      {/* <div className="LeftSide">
        <IconButton aria-label="Delete">
          <ArrowBackIosIcon
            className="BackIconLeftSide"
            onClick={BackPageClick}
          />
        </IconButton>
      </div>

      <div className="RightSide">
        <IconButton aria-label="Delete">
          <ArrowForwardIosIcon
            className="NextIconRightSide"
            onClick={NextPageClick}
          />
        </IconButton>
      </div> */}
      {/* <Draw></Draw> */}
      <Box
        className={
          Expand_Open === true
            ? "RightButtom_ExpandClose RightButtom_ExpandOpen"
            : " RightButtom_ExpandClose"
        }
      >
        <div className="DisplayIconsRightButtom">
          <img
            alt=""
            src={Expand_Open === true ? CloseResize_icon : OpenResize_icon}
            onClick={ResizeFunction}
            className={
              Expand_Open === true
                ? "IconTop IconExpandOpen"
                : "IconTop IconExpandClose"
            }
          />
        </div>
      </Box>

      {/* Bar apps */}
      <BarApps setCountPages={setCountPages}></BarApps>

      {/* copy right */}
      {/* <footer class="footer container">
        <span class="footer__copy">&#169; Kekoo. All rigths reserved</span>
      </footer> */}
    </div>
  );
};

export default Display;

import React, {
  useMemo,
  useEffect,
  useCallback,
  useState,
  Fragment,
  useRef,
} from "react";
import "./Display.scss";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Home from "../../../pages/home/Home";
import HomeBussines from "../../ShopBussines/pages/Home";
import BarApps from "./BarApps";
import TopOfwindow from "./TopShortCut";
import AddNewProduct from "../../new/New";
import IconButton from "@material-ui/core/IconButton";
import "../Globals/DisplayGlobalVariables";
import OrderDisplay from "../OrdersInDisplay/OrderDisplay";
import ProfilePage from "../ProfilePage/ProfilePage";

import StatisticsPage from "../StatsDispaly/StatisticsPage";

const Display = () => {
  const [CountPages, setCountPages] = React.useState(0);
  const NumberOfPages = 5;

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
      <div className="display">
        <TopOfwindow />
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
      <div className="LeftSide">
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
      </div>

      <p> .</p>
      <BarApps setCountPages={setCountPages}></BarApps>
      <footer class="footer container">
        <span class="footer__copy">&#169; Kekoo. All rigths reserved</span>
      </footer>
      {/* Bar apps */}
    </div>
  );
};

export default Display;

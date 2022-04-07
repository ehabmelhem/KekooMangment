import React, { useMemo, useEffect, useState, Fragment } from "react";
import "./StatisticsPage.scss";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import Widget from "../../../components/widget/Widget";
import Featured from "../../../components/featured/Featured";
import Table from "../../../components/datatable/Datatable";

const StatisticsPage = () => {
  const theme = useTheme();
  return (
    <div className="Stats">
      <div className="homeContainer">
        {/* <Navbar viewProfile={viewProfile} /> */}
        <div className="widgets">
          {/* <Widget type="user" /> */}
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default StatisticsPage;

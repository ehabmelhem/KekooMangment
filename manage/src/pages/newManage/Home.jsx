import React, { useMemo, useEffect, useState, Fragment } from "react";
import "./home.scss";
import Header from "./HeaderHome/Header";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Display from "./Display/Display";

const HomeManage = ({ displayPage }) => {
  const theme = useTheme();
  return (
    <>
      <div>
        <Display />
      </div>
    </>
  );
};

export default HomeManage;

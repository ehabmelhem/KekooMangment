import Sidebar from "../../components/sidebar/Sidebar";
import React, { useMemo, useEffect, useState, Fragment } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import ModelKekoo from "../../components/Model_kekoo/Model_kek"
import SlideImages from "../../components/chart/SlideImages";

import BussinesShop from "../ShopBussines/pages/Home";

import ProfileBox from "../../components/User/ProfileBox";
const HomeBussines = () => {
  const [viewProfile, setViewProfile] = useState(true);
  return (
    <div>
    <div className="home">
      <Sidebar />
      <div>
        <Navbar viewProfile={viewProfile} />
          <BussinesShop></BussinesShop>
              </div>
        </div>
      </div>
  );
};

export default HomeBussines;

import React, { useMemo, useEffect, useState, Fragment } from "react";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

const Home = () => {
  const [viewProfile, setViewProfile] = useState(true);
  
  return (
    <div className="home">
  {/* <Sidebar></Sidebar> */}
       
      {/* <Sidebar /> */}
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
        <div className="listContainer"> 
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;

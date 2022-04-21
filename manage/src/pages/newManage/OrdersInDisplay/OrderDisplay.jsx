import { useTheme } from "@mui/material/styles";
import React, { useMemo, useEffect, useState, Fragment } from "react";
import Table from "../../../components/table/Table";
import "./OrderDisplay.scss";
import Delivery from "../../../Images/scooter-running.gif";

const OrderDisplay = () => {
  return (
    <div class="wrapper">
      <div className="orders">
        <div className="order">
          {/* Status of delivery */}
          <div className="icon txtcenter">
            <img src={Delivery} />
          </div>
          <div className="content">
            <h1 className="nameOfClient">احمد سامي </h1>
            <h1 className="price">200₪</h1>

            <button className="StartBring">تحضير الطلبية</button>
          </div>
        </div>

        <div className="order">
          {/* Status of delivery */}
          <div className="icon txtcenter">
            <img src={Delivery} />
          </div>
          <div className="content">
            <h1 className="nameOfClient">رويد سامي </h1>
            <h1 className="price">300₪</h1>
            <button className="StartBring">تحضير الطلبية</button>
          </div>
        </div>

        <div className="order">
          {/* Status of delivery */}
          <div className="icon txtcenter">
            <img src={Delivery} />
          </div>
          <div className="content">
            <h1 className="nameOfClient">رويد سامي </h1>
            <h1 className="price">300₪</h1>
            <button className="StartBring">تحضير الطلبية</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDisplay;

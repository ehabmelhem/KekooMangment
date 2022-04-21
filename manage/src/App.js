import React, { useMemo, useEffect, useCallback, useState, Fragment , useRef} from "react";
import Home from "./pages/home/Home";
import HomeKekoo from "./pages/home/HomeKekoo";

import List from "./pages/list/List";
import ListOrders from "./pages/list/ListOrders";
import ListDelivery from "./pages/list/ListDelivery";

import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);



  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomeKekoo />} />
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
            </Route>

            <Route path="orders">
              <Route index element={<ListOrders />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Orders" />}
              />
            </Route>

            <Route path="delivery">
              <Route index element={<ListDelivery />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Delivery" />}
              />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;

import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useState } from "react";
import AppNavbar from '../../components/Layout/Navbar';

import UploadImage from '../../components/UploadImage/UploadImage';

import * as React from 'react';
import styled from 'styled-components';
import UploadVideo from "../../components/UploadImage/UploadVideo";
import StepsKekoo from "../../components/chart/StepsKekoo";



const New = ({ inputs, title , closeModalUpload }) => {
  const [images, setImages] = React.useState([]);
 
  return (
    <div>
        <div className="bottom">
          <div className="left">
            {/* <img
                 src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            /> */}
          </div>
          <div className="right">
            <form>
              <div className="formInput">
              </div>
              </form>
          </div>
        </div> 

        <div className="App">
         {/* currentstep = {0,1,2} numbersteps={Number} */}
         <div className="step0">
        <StepsKekoo currentstep={0} description={"Upload video and images"} numbersteps={3}></StepsKekoo>
        </div>
                 {/* Image Upload */}
                <UploadImage images={images} setImages={setImages}></UploadImage>
      
                 {/* Video Upload */}
                <UploadVideo closeModalUpload={closeModalUpload} images={images}></UploadVideo>
                
              </div>
            </div>
  );
};

export default New;

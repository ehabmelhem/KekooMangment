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



const New = ({ inputs, title }) => {
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
               <h3 className="headPost">Create new post</h3>
              </div>
            </form>
          </div>
        </div> 
        <div className="App">

                 {/* Image Upload */}
                <UploadImage images={images} setImages={setImages}></UploadImage>
      
                 {/* Video Upload */}
                <UploadVideo width={400} height={300} images={images}></UploadVideo>
                
              </div>
            </div>
  );
};

export default New;

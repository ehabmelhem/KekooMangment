import React, { useMemo, useEffect, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { useDropzone } from "react-dropzone";

import "./UploadVideo.scss";
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Modal from 'react-modal';
import SlideImages from "../chart/SlideImages";
import MoreInfoModal from "./MoreInfoModal";


const UploadVideo = ({ images, width, height }) => {

    const [slidImages, setSlideImages] = React.useState(images);

    const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',
            height: 'auto',
        },
    };

    const StyleForMoreInfo = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          display: "inline-block",
          zIndex: "1",
          backgroundClip: "border-box",
        },
      };
    //   Modal.setAppElement('#root');

    const inputRef = React.useRef();
    const [isopen, setIsopen] = React.useState(true);

    const [IsOpenMoreInfo , setIsOpenMoreInfo] = React.useState(true);

    const [source, setSource] = React.useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
    };

    const handleChoose = (event) => {
        inputRef.current.click();
    };
    const openModalView = (event) => {
        setIsopen(!isopen);
    };
    const openModalMoreInfo = (event) => {
        setIsOpenMoreInfo(!IsOpenMoreInfo);
    };
 
    return (
        <div>
            <div className="VideoInput">
                <input
                    ref={inputRef}
                    className="VideoInput_input"
                    type="file"
                    onChange={handleFileChange}
                    accept=".mov,.mp4"
                />
                <div className="line"></div>


                <button className="buttonselect Video_uploadButton" onClick={handleChoose}>Select Video</button>

                {source &&
                    <button className="buttonselectGreen Video_uploadButton" onClick={handleChoose}>Select Video</button>
                }
                {/* {source && images.length > 0 &&
                    <h3 className="videoh3">Click on here to view :</h3>
                } */}

                {source && 
                    <OndemandVideoSharpIcon className="viewpost" onClick={openModalView} />
                }
                {/* View the post Modal  */}
                <Modal
                    isOpen={!isopen}
                    style={customStyles}
                >
                    <SlideImages images={images} source={source} className="slideimages" />
                    {/* { <video
                        className="VideoInput_video"
                        controls
                        src={source}
                    /> } */}
                    {<CloseModalButton
                        onClick={openModalView}
                    />}
                </Modal>


          {/* Next partt */}
              {/* Next for more infomation to product */}

                {source &&
                    <button className="buttonselectGreen Next" onClick={openModalMoreInfo}>Next</button>
                }
                <Modal
                    isOpen={!IsOpenMoreInfo}
                    style={StyleForMoreInfo}
                >
                  <MoreInfoModal></MoreInfoModal>

                    {<CloseModalButton
                        onClick={openModalMoreInfo}
                    />}
                </Modal>
                  
            </div>
        </div>
    );
};

export default UploadVideo;

import React, { useMemo, useEffect, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { useDropzone } from "react-dropzone";
import "./UploadImage.scss";
import AnimationVideo from '../../Images/upload.gif'
import UploadVideo from "./UploadVideo";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  // borderStyle: "dashed",
  // backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out"
};

const activeStyle = {
  borderColor: "#2196f3"
};

const acceptStyle = {
  borderColor: "#00e676"
};

const rejectStyle = {
  borderColor: "#ff1744"
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 200,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "10px",
  height: "10px",
  webkitUserDrag: "none"
};
const AnimationVideoCss = {
  display: "block",
  margin: 'auto',
  width: 150,
  height: 120,
};

function StyledDropzone({setImages,images}) {
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open
  } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: acceptedFiles => {
      let temp=[...acceptedFiles]
      temp.forEach(file => URL.revokeObjectURL(file.preview));
      setFiles(
        temp.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );

      setImages(images=>
        temp.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    
    }
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject]
  );

  // const thumbs = files.map(file => (
  //   <div style={thumb} key={file.name}>
  //     <div style={thumbInner}>
  //       <img src={file.preview}  />
  //     </div>
  //   </div>
  // ));

 
  
  const filepath = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Fragment>
          <img src={AnimationVideo} className="AnimationVideoCss" />
        </Fragment>
        <h3>Drag and drop photos</h3>
        <button className="buttonselect" type="button" onClick={open}>
          Select From computer
        </button>
        {console.log(files.length)}
        {files.length > 0 && 
        <button className="buttonselectGreen uploadImageDone" type="button" onClick={open}>
          Select From computer
        </button>
        }
      </div>
      <aside>
      </aside>
      {/* <aside  className="containerShowImages">{thumbs}</aside> */}
    </div>
  );
}

// ReactDOM.render(<StyledDropzone />, document.getElementById("root"));
export default StyledDropzone;

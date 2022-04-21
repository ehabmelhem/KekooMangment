import React, { useState, useEffect } from 'react';
import './SlideImages.scss';
import styled from 'styled-components';
import videoPlay from '../../Images/video-play.gif'
const Thumbnail = ({ arr, image, index , videoShow }) => {
 
  return (<div className="tumbnail">
    <img src={videoPlay}   onClick={videoShow} className='video_inslider active'></img>
    {arr.map((imgsrc, i) => (
      <img
        key={i}
        height="50px"
        width="50px"
        src={imgsrc == "/static/media/video-play.ccd41f1ecf2be3ae6da8.gif" ? imgsrc : imgsrc.preview}
        onClick={() => image(i)}
        className={index === i ? 'active' : 'inactive'}
      />
    ))
    }
  </div>
  )
}

const Slideshow = ({ images, source }) => {
  const [index, setIndex] = useState(0)


  const VideoShow = (event) => {
  setIndex(-1)
  };
 

  return (
    <div className="slideshow">
      {index!= -1  ?
      <img className="mainImg" src={images[index].preview} />
      :
      <video
       className="mainImg"
       controls
       src={source}
     /> 
    }
      <Thumbnail arr={images} videoShow={VideoShow} image={setIndex}  index={index} />
      
    </div>
  )
}

function SlideImages(props) {
  const [emptyArr, setEmpty] = useState(false)
  if (props.images.length == 0)
  {
     props.images.push(videoPlay)
   }
  return (
    <div className="App">
       
      <Slideshow images={props.images} source={props.source} />
    </div>
  );
}

export default SlideImages;
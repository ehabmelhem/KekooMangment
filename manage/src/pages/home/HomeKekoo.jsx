import HorizontalScroll from "react-scroll-horizontal";
import Home from "./Home";
import Moreinfo from "../../components/UploadImage/MoreInfoModal";
import "./home.scss";

export default function HomeKekoo() {
  // const child = { width: `30em`, height: `100%` };
  return (
    <div className="scroll">
       <div  className="main">
         {/* <Moreinfo></Moreinfo> */}
         <Home></Home>    
        </div>
      {/* <HorizontalScroll> */}
        {/* <div  className="main">
         <Home></Home>    
        </div> */}

        {/* <div  className="main">
          <h1>Hello 2</h1>
        </div> */}
{/* 
        <div className="main">
          <h1>Hello 3</h1>
        </div>
        <div className="main">
          <h1>Hello 4</h1>
        </div> */}
      {/* </HorizontalScroll> */}
    </div>
  );
}

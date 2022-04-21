import HorizontalScroll from "react-scroll-horizontal";
import Home from "./Home";
import Moreinfo from "../../components/UploadImage/MoreInfoModal";
import "./home.scss";
import "./HomeKekoo.scss";
import HomeBussines from "./HomeBussines";

import { Carousel, CarouselRef } from "antd";

import HomeModern from "../newManage/Home";
import Slider from "react-slick";

export default function HomeKekoo() {
  // const child = { width: `30em`, height: `100%` };

  return (
    <div>
      <div className="main">
        <HomeModern> </HomeModern>
      </div>
    </div>
  );
}

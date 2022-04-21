import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import GeoLocation from "../User/GeoLocation";


import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';
import { ArrowRightOutlined } from '@ant-design/icons';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="header">
      <div className="header__left">
        {/* <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logoss" /> */}
        <div className="header__search">
            <SearchIcon />
            <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Clients" />
        {/* <HeaderOption Icon={BusinessCenterIcon} title="Jobs" /> */}
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption
          avatar={true}
          title="Kekoo"
        />
        {/* <HeaderOption className="next_header" Icon={ArrowRightOutlined} title="Next" /> */}

      </div>
    </div>
    // <div className="navbar">
    //   <div className="wrapper">
    //     <div className="search">
    //       <input type="text" placeholder="Search..." />
    //       <SearchOutlinedIcon />
    //     </div>
    //     <div>
    //       <GeoLocation></GeoLocation>
    //     </div>
    //     <div className="items">
    //       <div className="item">
    //         <LanguageOutlinedIcon className="icon" />
    //         English
    //       </div>
    //       <div className="item">
    //         <DarkModeOutlinedIcon
    //           className="icon"
    //           onClick={() => dispatch({ type: "TOGGLE" })}
    //         />
    //       </div>
    //       <div className="item">
    //         <FullscreenExitOutlinedIcon className="icon" />
    //       </div>
    //       <div className="item">
    //         <NotificationsNoneOutlinedIcon className="icon" />
    //         <div className="counter">1</div>
    //       </div>
    //       <div className="item">
    //         <ChatBubbleOutlineOutlinedIcon className="icon" />
    //         <div className="counter">2</div>
    //       </div>
    //       <div className="item">
    //         <ListOutlinedIcon className="icon" />
    //       </div>
    //       <div className="item">
    //         <img
    //           src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    //           alt=""
    //           className="avatar"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;

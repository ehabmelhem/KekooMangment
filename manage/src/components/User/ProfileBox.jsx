import "./ProfileBox.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Avatar } from '@material-ui/core'

import Logoclient from '../../Images/logo.jfif'

import bg from '../../Images/original.jpg'

const ProfileBox = () => {

    const recentItems = (topic) => (
        <div className="recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (   
        <div className="featured">
            <div className="sidebar_top">
                <img className="logoclient"
                 src={bg}
                 alt="cover pics"
                />
                <img src={Logoclient} className="sidebar_avatar">
                </img>
                <h2 className="nameUser">Rwed Kabha</h2>
                {/* <h4 className="emailUser"> Rwed.kabaha@gmail.com</h4> */}
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="stat_number">2,432</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="stat_number">1,232</p>
                </div>
            </div>
                 
            {/* <div className="sidebar_bottom">
        {/* <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems('JavaScript')}
        {recentItems('Ruby')}
        {recentItems('Ruby on Rails')} */}
            {/* </div>  */}
        </div>
    );
};

export default ProfileBox;

import { Avatar } from '@material-ui/core';
import React from 'react';
// import { useSelector } from 'react-redux';
import './HeaderOption.css';
// import { Avatar } from '@material-ui/core';

function HeaderOption({ avatar, Icon, title, onClick }) {
  
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}

export default HeaderOption

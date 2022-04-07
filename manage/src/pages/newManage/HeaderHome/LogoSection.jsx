import { Link } from 'react-router-dom';
import "./Header.scss";

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
// import config from 'config';
import Logo from '../../../Images/logo.jfif';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase  >
       <img className='Logo' src={Logo}></img>
    </ButtonBase>
);

export default LogoSection;

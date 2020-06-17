import {useEffect} from 'react'
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Box} from "@material-ui/core"
import {deepOrange,deepPurple} from "@material-ui/core/colors"
import Link from "next/link"

import AOS from 'aos'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    "& div":{
      padding:theme.spacing(0,0.5)
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'flex',
    alignItems:"center",
    "& svg":{
      fontSize:"2.2em",
      color:deepOrange[900]
    },
    "& a":{
      textDecoration:"none",
      color:"black",
      fontSize:".9em",
      fontWeight:"400",
      letterSpacing:".15em",
      alignSelf:"center"
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:"1.5em"
    },
    [theme.breakpoints.down("xs")]:{
      "& a":{
        display:"none"
      },
      "& svg":{
        fontSize:"2.5em"
      }
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  hrefContainer:{
    width:"50%",
    display:"flex",
    justifyContent:"space-evenly",
    "& a":{
      fontSize:"1.3em",
      textDecoration:"none",
      color:"rgba(0,0,0,.8)",
      textTransform:"capitalize",
      letterSpacing:".1em",
      fontWeight:"500",
      padding:theme.spacing(1, .1),
      transition:"color .3s linear",
      "&::after":{
        content:"' '",
        display:"block",
        height:"2.5px !important",
        width:"0%",
        // top: "100%",
        // left:"49%",
        backgroundImage:`linear-gradient(to right,${deepPurple[500]},${deepPurple[300]},${deepPurple[900]})`,
        transition:"0.35s ease-out all",
      },
      "&:hover":{
        color:"rgba(0,0,0,1)",
        "&::after":{
          height:"2.5px !important",
          width: "100%",
          // top: "67.5%",
          // left:"-60%",
          // transition:"0.35s ease all"
        },
      }
    },
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    }
  }
}));

const Navbar = function(props) {

  const [isReady,setIsReady] = React.useState(false)

  useEffect(() => (
    AOS.init({
      easing: "ease-in",
      duration: 1800
    }),
    setIsReady(true)
    )
    ,[])


  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
>
 {["Blog","Rates","Contact","Referral","Newsletter"].map((m,idx) => (
   <MenuItem key={idx}>
      <Link href="/">
        <a style={{textDecoration:"none",color:"inherit"}}>
          {m}
        </a>
      </Link>
   </MenuItem>
  ))}
</Menu>)

  return (
    <div data-aos="zoom-in-out" data-aos-delay="200" className={classes.grow}>
      <AppBar elevation={0} style={{backgroundColor:"white",color:"black"}} position="fixed">
        <Toolbar disableGutters >
          <Box className={classes.title}>
            <Link href="/">
              <a data-aos="flip-down">
            PHONYSTORE
              </a>
            </Link>
          </Box>
          <div className={classes.grow} />
          <div className={`${classes.hrefContainer} ${classes.sectionDesktop}`}>
            <Link href="/user">
            <a data-aos="zoom-in-out" data-aos-delay="300">
              Blog
            </a>
            </Link>
            <Link href="/">
            <a data-aos="zoom-in-out" data-aos-delay="500">
              Referral
            </a>
            </Link>
            <Link href="/rates">
            <a data-aos="zoom-in-out" data-aos-delay="700">
              Rates
            </a>
            </Link>
            <Link href="/">
            <a data-aos="zoom-in-out" data-aos-delay="800">
              Contact
            </a>
            </Link>
            <Link href="/">
            <a data-aos="zoom-in-out" data-aos-delay="1000">
              NewLetter
            </a>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}


export default Navbar
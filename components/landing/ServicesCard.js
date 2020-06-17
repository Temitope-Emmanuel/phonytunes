import {Box} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  root:{
    height:"100%",
    width:"90%",
    padding:theme.spacing(.5,.9),
    backgroundColor:"white",
    boxShadow:"0 7px 30px 3px black",
    borderRadius:".3em",
    transition:"all .5s linear",
    cursor:"pointer",
    [theme.breakpoints.up("sm")]:{
      "&:hover":{
        transform:"translateY(-15%)",
        height:"115%",
      }
    }
  },
  moreContainer:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row !important",
    height:"100%",
    width:"100%",
    "& div":{
      display:"flex",
      margin:"0 auto",
      justifyContent:"center",
      flexDirection:"column",
      padding:"auto 0",
      alignItems:"center",
      "& h4":{
        fontSize:"2em",
        margin:".2em 0",
      },
      "& p":{
        margin:"0 0"
      } 
    },
    "& svg":{
      transition:"all .3s linear"
    },
    [theme.breakpoints.up("sm")]:{
      "&:hover":{
        "& svg":{
          color:"blue",
          transform:"scale(1.5) rotate(180deg)"
        }
      }
    }
  }
}))



const ServicesCard = function({delay,anim,...props}){

  const classes = useStyles()
  return(
    <Box data-aos={anim} data-aos-delay={delay} className={classes.root}>
      <Box className={classes.moreContainer}>
        <Box>
            <h4>
                {props.heading}
            </h4>
            <p>{props.isTrue ? "Contact Us" : "Buy or Sell"}</p>
        </Box>
        <ArrowBackIcon/>
      </Box>
    </Box>
  )
}

export default ServicesCard

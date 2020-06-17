import {useEffect,useState} from 'react'
import {Box} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {deepPurple,deepOrange} from '@material-ui/core/colors'
import {
  AtlasBg,
  Person1,
  Person2,
  Person3,
  Person4,
  Person5
} from "../../public/images/world";
import AOS from "aos";



const useStyles = makeStyles(theme =>({
  root:{
    position:"relative",
    backgroundImage:`url(${AtlasBg})`,
    height:"50vh",
    width:"100vw",
    backgroundPosition:"center",
    backgroundSize:"contain",
    backgroundRepeat:"no-repeat",
    "& img":{
      position:"absolute",
      filter:"grayscale(60%)",
      transition:"all .25s linear",
      "&:hover":{
        filter:"grayscale(0)",
        transform:"scale(1.15) !important"
      }
    }
  },
  container:{
    textAlign:"center",
    "& h2":{
      fontSize:"1.9em",
      fontWeight:"400",
      letterSpacing:".15em",
      WebkitBackgroundClip:"text",
      WebkitTextFillColor:"transparent",      
      backgroundImage:`linear-gradient(to right,${deepOrange[500]},${deepOrange[900]})`,
    },
    "& p":{
      fontSize:"1.3em",
      opacity:".83",
      WebkitBackgroundClip:"text",
      WebkitTextFillColor:"transparent",      
      backgroundImage:`linear-gradient(to bottom,${deepPurple[500]},${deepPurple[900]})`,
    }
  }
}))

const Atlas = function(){ 
  const classes = useStyles()
  const [isReady,setIsReady] = useState(false)
  useEffect(() => (
    AOS.init({
      easing: "ease-in",
      duration: 1800
    }),
    setIsReady(true)
    )
    ,[])

  return(
    <>
    <Box className={classes.container}>
        <h2>24/7 DAYS WE GOT YOU</h2>
        <p>Always there to do business with you</p>
    </Box>
      <Box
      data-aos="fade"
      // data-aos-delay="200"
       className={classes.root}>
        <img data-aos="zoom-in-out" data-aos-delay="200" 
         style={{left:"30%",top:"15%",height:"5em"}} src={Person1}/>
        <img data-aos="zoom-in-out" data-aos-delay="400" 
          style={{left:"43%",top:"45%",height:"6em"}} src={Person2}/>
        <img data-aos="zoom-in-out" data-aos-delay="650" 
          style={{left:"60%",top:"65%",height:"6.5em"}} src={Person3}/>
        <img data-aos="zoom-in-out" data-aos-delay="800" 
          style={{left:"60%",top:"45%",height:"3em"}} src={Person4}/>
        <img data-aos="zoom-in-out" data-aos-delay="1000" 
          style={{left:"55%",top:"10%",height:"7em"}} src={Person5}/>
      </Box>
    </>
  )
}

export default Atlas;

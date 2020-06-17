import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import Typed from "react-typed"
import {Button,ButtonGroup} from "@material-ui/core"
import backgroundImg1 from "../../public/images/main/scattered2@2x.png"
import backgroundImg2 from "../../public/images/main/scattered2x.png"
import backgroundImg3 from "../../public/images/main/skyline@2x.png"
import {deepOrange,deepPurple,green,red} from "@material-ui/core/colors"
import Link from "next/link";

const useStyles = makeStyles(theme => ({

    root:{
        height:"90vh",
        width:"100%",
        backgroundImage:`url(${backgroundImg1}),url(${backgroundImg3}),url(${backgroundImg2})`,
        backgroundSize:"contain,contain,contain",
        backgroundRepeat:"repeat,no-repeat,repeat",
        backgroundPosition:"center,bottom,center",
        marginBottom:theme.spacing(1.5),
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        "& h1":{
            fontSize:"2.5em",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",      
            backgroundImage:`linear-gradient(to right,${deepPurple[500]},${deepPurple[900]})`,
            letterSpacing:".2em",
            fontWeight:"400",
            textTransform:"uppercase",
            [theme.breakpoints.down("sm")]:{
                fontSize:"1.2em"
            }
        },
        "& h2":{
            textTransform:"capitalize",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent",      
            backgroundImage:`linear-gradient(to right,${deepPurple[300]},${deepPurple["A400"]})`,      
            [theme.breakpoints.down("sm")]:{
                fontSize:".9em"
            }
        },
        "& button":{
            height:"auto",
            fontSize:"1.1em",
            "& a":{
                textDecoration:"none",
                color:"inherit",
                margin:" 0 .9em"
            },
            [theme.breakpoints.down("sm")]:{
                width:"auto",
                fontSize:".9em",
                "& a":{
                    margin:"0 0"
                }
            }    
        }
    },
    bodyContainer:{
        display:"flex",
        width:"100vh",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    imageContainer:{
        height:"100%",
        width:"50%",
        "& img":{
            minHeight:"100%",
            minWidth:"100%"
        }
    }
}))




const mainView = function(props){

    // useEffect(() => (
    //     AOS.init({
    //       easing: "ease-in",
    //       duration: 1800
    //     })    
    //   ),[])    
    
    const classes = useStyles()

    return(
        <Box className={classes.root}>
            <h2>Do you want to&nbsp;
                <Typed
                strings={[
                    "trade Gift Card ?","buy bitcoin ?","transact any form of cryptocurrency ?"
                ]}
                typeSpeed={40}
                backSpeed={70}
                loop
                />
            </h2>
                <h1>Welcome to PHONYSTORE</h1>
                <ButtonGroup data-aos="fade-in" data-delay="2000">
                <Button style={{backgroundColor:deepOrange[100],color:deepPurple[900]}}>    
                    <a href="/api/login">
                    SIGN UP
                    </a>
                </Button>
                <Button style={{backgroundColor:deepOrange[200],color:deepOrange[900]}}>
                    <a href="https://wa.me/2349050348357">
                    TRADE NOW
                    </a>
                </Button>
                </ButtonGroup>
            <Box className={classes.bodyContainer}>
            <Box className={classes.imageContainer}>
                {/* <img src="https://image.freepik.com/free-vector/paid-by-credit-card_41910-359.jpg" /> */}
            </Box>
            </Box>
        </Box>
    )
}


export default mainView
import {Box} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import AOS from 'aos'


const useStyles = makeStyles(({spacing,breakpoints}) => ({
    root: {
        boxShadow:"0px 10px 43px 9px rgba(0,0,0,.1)",
        borderRadius:".5em",
        display:"flex",
        flexDirection:"row-reverse",
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
        transition:"all .3s linear",
        [breakpoints.up("md")]:{
            "&:hover":{
                transform:"translateY(-10%) scale(1.05)",
                boxShadow:"0px 10px 43px 9px rgba(0,0,0,.7)",
                borderRadius:"1em"
            }     
        }
      },
      detailContainer:{
          padding:".5em",
          width:"auto",
          "& h3":{
              fontSize:"1.6em",
              opacity:".9",
              letterSpacing:".1em",
              fontWeight:"400"
          },
          "& p":{
              opacity:".8",
              fontWeight:"300",
              fontSize:"1em"
          },
          [breakpoints.down("md")]:{
              margin:".2em .9em",
              width:"70%",
              padding:"0 0",
              "& h3":{
                  fontSize:"1em"
              },
              "& p":{
                  fontSize:".8em"
              }
          }
      },
      imageContainer:{
          minWidth:"60%",
          height:"100%",
          transform:"translateX(-10%)",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          backgroundSize:"contain",
          "& img":{
              maxHeight:"100%",
              maxWidth:"100%",
              objectFit:"cover"
          },
          [breakpoints.down("sm")]:{
              minWidth:"55%"
          }
      }
}))


const getStartedCard = function({delay,...props}){
    
      
    const classes = useStyles();
    console.log(props)
    return(
        <Box data-aos="flip-right" data-aos-delay={delay}  className={classes.root}>
            <Box className={classes.detailContainer}>
                <h3>
                    {props.heading}
                </h3>
                <p>
                    {props.content}
                </p>
            </Box>
            <Box data-aos="zoom" data-aos-delay="1500" style={{
                backgroundImage:`url(${props.img})`
            }} className={classes.imageContainer}>
            </Box>
        </Box>
    )
}

export default getStartedCard
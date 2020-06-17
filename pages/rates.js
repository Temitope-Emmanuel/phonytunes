import {makeStyles} from "@material-ui/core/styles"
import {Box} from "@material-ui/core"
import RatingCalculator from "../components/other/RatingCalculator"
import Layout from "../components/layout"
const useStyles = makeStyles(theme =>({
    root:{
        height:"90vh",
        width:"100vw"
    },
    bodyContainer:{
        height:"100%",
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        "& > h3":{
            fontSize:"2.3em",
            fontWeight:"400",
            transition:"all .3s linear",
            "&:hover":{
                color:"rgba(0,0,0,.5)"
            }
        }
    }
}))

const Rates = function(props){

    const classes = useStyles()

    return(
        <Layout title={"Rating calculator"}>
          <Box className={classes.root}>
            <Box className={classes.bodyContainer}>
                <h3>Use the Rating Calculator</h3>
                <RatingCalculator/>
            </Box>
           </Box>
        </Layout>
    )
}

export default Rates
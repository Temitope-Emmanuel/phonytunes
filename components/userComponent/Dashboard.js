import {Box,Divider,Button,IconButton} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {blue} from "@material-ui/core/colors"
import SimpleTable from "./userTable"
import RatingCalculator from "../other/RatingCalculator"


const useStyles = makeStyles(theme =>({
    root:{
        height:"auto",
        margin:"2.5% 0",
        padding:theme.spacing(1,0),
        width:"98%",
        },
    walletContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        "& > div":{
            borderRadius:".5em",
        },
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column-reverse",
            justifyContent:"center",
            "& > div":{
                width:"100%"
            }
        }
    },
    acctContainer:{
        width:"30%",
        backgroundColor:"whitesmoke",
        margin:theme.spacing(2,0),
        padding:theme.spacing(4,2.5),
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        "& div":{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            width:"100%"
        },
        "& h3":{
            fontSize:"1.3em",
            fontWeight:"400",
            opacity:".8",
            color:"black"
        },
        "& svg":{
            fontSize:"4em"
        },
        "& span":{
            fontSize:"1.25em"
        }
    },
    amountContainer:{
        display:"flex",
        flexDirection:"column",
        width:"100%",
        justifyContent:"space-evenly",
        alignItems:"center",
        "& > div":{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center"
        }
    },
    btcContainer:{
        width:"68%",
        backgroundColor:"whitesmoke",
        padding:theme.spacing(2,1.5),
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        "& h6":{
            fontSize:"1.3em",
            margin:"0.2em 0"
        },
        "& > div":{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            margin:theme.spacing(0,2),
            width:"50%",
            height:"100%",
            "& h4":{
                fontSize:"2em",
                fontWeight:"400",
                letterSpacing:".1em",
                color:"rgba(0,0,0,1)",
                textTransform:"capitalize"
            },
            "& button":{
                padding:".8em 1em",
                margin:"1em .5em",
                "& svg":{
                    fontSize:"2.4em"
                }
            }
        }
    },
    transactionContainer:{
        width:"95vw",
        display:"flex",
        justifyContent:"space-between",
        padding:theme.spacing(1.5,1),
        flexDirection:"row",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"space-between",
            "& > div":{
                // width:"80% !important",
                // margin:" 1.5em 0"
            }
        }
    }
}))


const Dashboard = function(props){
    const classes = useStyles()

    return(
        <Box className={classes.root}>
            <Box className={classes.walletContainer}>
                <Box className={classes.acctContainer}>
                        <Box style={{
                            padding:".3em",
                            alignItems:"center",
                            justifyContent:"space-between",
                        }}>
                            <MonetizationOnIcon/>
                            <Box style={{
                                alignItems:"center",
                                flexDirection:"column"
                            }}>
                                <h3>WALLET BALANCE</h3>
                                <span>0.00NGN</span>
                            </Box>
                        </Box>
                        <Box style={{
                            flexDirection:"column"
                        }}>
                            <h3>EARNING HISTORY</h3>
                            <Box className={classes.amountContainer}>    
                                    {["Gift Cards","BTC","REFERRALS"].map((m,idx) =>(
                                    <Box key={idx}>
                                        <span>0.00</span>
                                        <span>{m}</span>
                                    </Box>
                                    ))}
                            </Box>
                        </Box>
                    
                </Box>
                <Box className={classes.btcContainer}>
                    <Box>
                        <h4>
                            BTC RATES TODAY
                        </h4>
                        <Box>
                            <h6>BUY AT: 440/$</h6>
                            <h6>SELL AT:405/$</h6>
                        </Box>
                    </Box>
                    <Divider orientation="vertical" flexItem/>
                    <Box>
                        <h6>Welcome to Phonystore. Click below to begin</h6>
                        <Box>
                            <Button style={{backgroundColor:blue[700],color:blue[200]}}>
                                <PlayArrowIcon/>
                                Start Trade
                            </Button>
                            <Button style={{color:blue[800],backgroundColor:blue[200]}}>
                                <PlayArrowIcon/>
                                Buy Airtime
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.transactionContainer}>
                <Box style={{width:"55"}}>
                    <SimpleTable/>
                </Box>
                <Box style={{width:"40%"}}>
                <RatingCalculator/>
                </Box>
            </Box>
            <Box className={classes.extraContainer}>
                <Box className={classes.customerContainer}>
                </Box>
                <Box className={classes.advertContainer}>
                </Box>
            </Box>
        </Box>
    )
}



export default Dashboard
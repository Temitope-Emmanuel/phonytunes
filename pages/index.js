import React,{useEffect} from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import {makeStyles} from "@material-ui/core/styles"
import {Box} from "@material-ui/core"
import MainView from "../components/landing/MainView"
import GetStarted from "../components/landing/GetStarted"
import Services from '../components/landing/Services'
import Atlas from "../components/landing/Atlas"
import {Img2,Img3} from "../public/images/clusterImg"
import Loading from '../components/other/loading'
import AOS from "aos";
const useStyles = makeStyles(theme => ({
  ImageContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    "& img":{
      maxWidth:"50%",
      maxHeight:"60vh"
    },
    [theme.breakpoints.down("sm")]:{
      flexDirection:"column",
      "& img":{
        maxHeight:"100%",
        maxWidth:"100%"
      }
    }
  }
}))


const Index = () => {
  const [isReady,setIsReady] = React.useState(false)

  useEffect(() => (
    AOS.init({
      easing: "ease-in",
      duration: 1800
    }),
    setIsReady(true)    
  ),[])


const {user,loading} = useFetchUser()
const classes = useStyles()

if(isReady){
  return(
    <Layout title="Landing Page" user={user} loading={loading}>
      <MainView/>
      <Atlas/>
      <GetStarted/>
      <Box className={classes.ImageContainer}>
      <img data-aos="fade-right" src={Img2} />
      <img data-aos="fade-left" src={Img3}/>
      </Box>
      <Services/>
    </Layout>
  )}else{
    return(
      <Loading/>
    )
  }
}

export default Index


// function Home() {
//   const { user, loading } = useFetchUser()

//   return (
//     <Layout user={user} loading={loading}>
//       <h1>Next.js and Auth0 Example</h1>

//       {loading && <p>Loading login info...</p>}

//       {!loading && !user && (
//         <>
//           <p>
//             To test the login click in <i>Login</i>
//           </p>
//           <p>
//             Once you have logged in you should be able to click in{' '}
//             <i>Profile</i> and <i>Logout</i>
//           </p>
//         </>
//       )}

//       {user && (
//         <>
//           <h4>Rendered user info on the client</h4>
//           <img src={user.picture} alt="user picture" />
//           <p>nickname: {user.nickname}</p>
//           <p>name: {user.name}</p>
//         </>
//       )}
//     </Layout>
//   )
// }

// export default Home

import Head from 'next/head'
import Navbar from "./other/Navbar"
import Footer from "./other/Footer"
import {Box} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>({
  root:{
    height:"100vh"
  }
}))

function Layout({title, user, loading = false, children }) {
  
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* <Box className={classes.root}> */}
        <Navbar user={user} loading={loading}/>
        {children}
      {/* </Box> */}
      <Footer/>
    </>
  )
}

export default Layout

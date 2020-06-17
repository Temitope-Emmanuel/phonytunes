import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import "aos/dist/aos.css";
import "../public/styles/loading.css"


// import reduxStore from '../redux'

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../lib/theme';


// class MyApp extends App{
//   constructor(props){
//     super(props)
//     this.persistor = persistStore(props.reduxStore)
//   }
//   componentDidMount(){
//        // Remove the server-side injected CSS.
//        const jssStyles = document.querySelector('#jss-server-side');
//        if (jssStyles) {
//          jssStyles.parentElement.removeChild(jssStyles);
//        }
//   }

//   render(){
//     const {Component,pageProps,reduxStore} = this.props

//     return(
//         <ThemeProvider theme={theme}>
//       <Provider store={reduxStore}>
//         <PersistGate
//         loading={<Component {...pageProps} />}
//         persistor={this.persistor}>
//             <CssBaseline/>
//             <Navbar/>
//           <Component {...pageProps} />
//           <Footer/>
//         </PersistGate>
//       </Provider>
//           </ThemeProvider>
//     )
//   }
// }

const MyApp = function(props) {
  
  const { Component, pageProps} = props;

  React.useEffect(() => {

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }  
  }, []);

  return (
    <React.Fragment>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <Component {...pageProps} />
          </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp
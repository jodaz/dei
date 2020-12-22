import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Dirección de Estadísticas e Informática</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp

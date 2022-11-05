import React, { useEffect } from "react";
import Head from "next/head";
import styled, { css } from "styled-components";
// styles
import "../styles/globals.css";
// theme
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

function App({ Component, pageProps }) {
  return (
    <ISPC>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ISPC>
  );
}

const ISPC = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
<<<<<<< HEAD
  min-height: 100vh;
=======
  min-hieght: 100vh;
>>>>>>> 03757feb6b2f7f1d47376202cf4dd91367190dd7
`;

export default App;

import React, { useEffect } from "react";
import Head from "next/head";
import styled, { css } from "styled-components";
// styles
import "../styles/globals.css";
// theme
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
<<<<<<< HEAD
import axios from 'axios';
import getApi from '../src/api/get'
=======
import axios from "axios";
import getApi from "../src/api/get";
>>>>>>> 435eabf807e6ee048f11c1028f88da155760b496

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true

getApi.getProfile()

function App({ Component, pageProps }) {
  useEffect(async () => {
    const res = await getApi.getProfile();
  }, []);

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
  min-height: 100vh;
  position: relative;
  background-color: #eaeaea;
`;

export default App;

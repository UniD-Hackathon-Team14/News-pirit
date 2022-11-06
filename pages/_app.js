import React, { useEffect } from "react";
import Head from "next/head";
import styled, { css } from "styled-components";
// styles
import "../styles/globals.css";
// theme
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import axios from "axios";
import getApi from "../src/api/get";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

// getApi.getProfile()

function App({ Component, pageProps }) {
  //   useEffect(async () => {
  //     const res = await getApi.getProfile();
  //   }, []);

  return (
    <ISPC>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ISPC>
  );
}

const ISPC = styled.div`
  position: relative;
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
  min-height: calc(100vh - 9rem);
  background-color: #eaeaea;
`;

export default App;

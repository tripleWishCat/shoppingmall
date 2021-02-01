import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap');
    /* ${reset} */
    :root {
  --header-height: 3rem;

  /*========== Colors ==========*/
  --first-color: #DA2535;
  --first-color-alt: #C42130;
  --first-color-send: #DE3B49;
  --title-color: #161212;
  --text-color: #5B5757;
  --text-color-light: #8F8A8A;
  --body-color: #FEFBFB;
  --container-color: #FFF;

  /*========== Font and typography ==========*/
  --body-font: 'Noto Sans KR', sans-serif;
  /* --body-font: 'Poppins', sans-serif; */
  --biggest-font-size: 2rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1.125rem;
  --normal-font-size: .938rem;
  --small-font-size: .813rem;

  /*========== Font weight ==========*/
  --font-normal: 400;
  --font-semi-bold: 500;
  --font-bold: 700;
  --font-bolder: 900;

  /*========== Margenes ==========*/
  --mb-1: .5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;
  /*========== z index ==========*/

  --z-tooltip: 10;
  --z-fixed: 100;
}

    *{
        box-sizing:border-box;
    }
    body{
        background-color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;        
    }
    a {
        color:inherit;
        text-decoration: none;
        cursor: pointer;
    }
    input,button{
        background-color: transparent;
        border: none;
        outline:none;
    }
    h1,h2,h3,h4,h5,h6{
        font-family:'Maven Pro',sans-serif;
    }
    ol,ul,li{
        list-style: none;
    }
    img{
        display: block;
        width: 100%;
        height:100%;
    }
`;

export default GlobalStyle;

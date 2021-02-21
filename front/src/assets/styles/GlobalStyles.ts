import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap');
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

@media screen and (min-width: 968px){
  :root{
    --biggest-font-size: 3rem;
    --h2-font-size: 1.75rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
  }
}

/*========== BASE ==========*/
*,::before,::after{
  box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
}

body{
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
  line-height: 1.6;
}

h1,h2,h3,ul,p{
  margin: 0;
}

h1,h2,h3{
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
}

ul{
  padding: 0;
  list-style: none;
}

a{
  text-decoration: none;
}

img{
  max-width: 100%;
  height: auto;
}
.nav-top{
    .button{
        font-size:12px;
        display: inline-block;
        padding: 0 22px 0 0;
        line-height:1.8;
        color:#888888;
        opacity:0.6;
    }
}
.InfoBar{
  a{
        display: inline-block;
        position: relative;
        width: 10%;
        text-align: center;
        background-size: 1px 13px;
        background: url('/images/l_bar.gif') no-repeat 0% 50%;
        font-weight: 300;
    }
    a:visited{
      color:black

    }
}
.category{
    .button{
        display: inline-block;
        position: relative;
        width: 16.3%;
        text-align: center;
        background-size: 1px 13px;
        background: url('/images/l_bar.gif') no-repeat 0% 50%;
    }
}
.search{
    .button{
        position: relative;
    float: right;
    margin: 0 18px 0 0;
    }
}
.cart{
    .button{
        position: relative;
        float: right;
        margin: 0 0 0 0;
        font-size: 13px;
    }
}
.button{
 
border:none;
display:block;
background-color: transparent;
padding: 15px 0 15px 0;
border-radius: .5rem;
font-size:16px;
font-weight: 500;
}
.button:hover{
font-weight: 700;
} 
.button:visited{
    color:black
}

.detail-text-wrapper{
  flex-direction: row;
  display: flex;
  margin:0.5em 0;
  .title{
    width:20%
  }
  .value{
    width:80%
  }
}
`;
export default GlobalStyle;

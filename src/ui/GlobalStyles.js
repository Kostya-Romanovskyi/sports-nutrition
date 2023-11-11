import { createGlobalStyle } from "styled-components";
import { media } from "../ui/media";
import {
  GrtskPetaBoldWoff2,
  GrtskPetaBoldWoff,
  GrtskPetaBoldEot,
  GrtskPetaBoldTtf,
  GrtskPetaMediumWoff2,
  GrtskPetaMediumWoff,
  GrtskPetaMediumEot,
  GrtskPetaMediumTtf,
  GrtskPetaRegularWoff2,
  GrtskPetaRegularWoff,
  GrtskPetaRegularEot,
  GrtskPetaRegularTtf,
} from "../fonts/fonts";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'GrtskPeta-Bold';
    src: url(${GrtskPetaBoldWoff2}) format('woff2'),
        url(${GrtskPetaBoldWoff}) format('woff'),
        url(${GrtskPetaBoldEot}) format('eot'), 
        url(${GrtskPetaBoldTtf}) format('ttf');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
}

@font-face {
    font-family: 'GrtskPeta-Medium';
    src: url(${GrtskPetaMediumWoff2}) format('woff2'),
        url(${GrtskPetaMediumWoff}) format('woff'),
        url(${GrtskPetaMediumEot})format('eot'),
        url(${GrtskPetaMediumTtf}) format('ttf');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
}

@font-face {
    font-family: 'GrtskPeta-Regular';
    src: url(${GrtskPetaRegularWoff2}) format('woff2'),
        url(${GrtskPetaRegularWoff}) format('woff'),
        url(${GrtskPetaRegularEot}) format('eot'),
        url(${GrtskPetaRegularTtf}) format('ttf');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    // overflow-x: hidden;
    scroll-behavior: smooth;
}


body::-webkit-scrollbar {
    background: #f1f1f1;
    width: 0.4em;
}

body::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 10px;
    height: 6em;
}

body::-webkit-scrollbar-thumb:hover {
    background: #01bcf3;
}

body::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}

ul{
    list-style: none;
}


.container{
    padding: 0 15px;
    margin: 0 auto;

    ${media.mobile} {
        max-width: 480px;
      }

    ${media.tablet} {
        max-width: 768px;
      }

    ${media.desktop} {
        max-width: 1391px;
      }
}

.css-187mznn-MuiSlider-root{

}
`;

export default GlobalStyles;

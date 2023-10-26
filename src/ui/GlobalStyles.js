import { createGlobalStyle } from "styled-components";
import { media } from "../ui/media";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Grtsk Peta';
    src: url('./fonts/GrtskPeta-Regular.eot'),
        url('./fonts/GrtskPeta-Regular.eot?#iefix') format('embedded-opentype'),
        url('./fonts/GrtskPeta-Regular.woff2') format('woff2'),
        url('./fonts/GrtskPeta-Regular.woff') format('woff'),
        url('./fonts/GrtskPeta-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Grtsk Peta';
    src: url('../fonts/GrtskPeta-Bold.eot'),
        url('../fonts/GrtskPeta-Bold.eot?#iefix') format('embedded-opentype'),
        url('../fonts/GrtskPeta-Bold.woff2') format('woff2'),
        url('../fonts/GrtskPeta-Bold.woff') format('woff'),
        url('../fonts/GrtskPeta-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Grtsk Peta';
    src: url('../fonts/GrtskPeta-Medium.eot');
    src: local('Grtsk Peta Medium'), local('GrtskPeta-Medium'),
        url('../fonts/GrtskPeta-Medium.eot?#iefix') format('embedded-opentype'),
        url('../fonts/GrtskPeta-Medium.woff2') format('woff2'),
        url('../fonts/GrtskPeta-Medium.woff') format('woff'),
        url('../fonts/GrtskPeta-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

h1,h2,h3,h4,h5,h6,p{
    margin: 0;
    padding: 0;
}

img{
    display: block;
}

ul{
    list-style: none;
    margin: 0;
    padding: 0
}

body{
    font-family: 'Grtsk Peta', sans-serif;
}


.container{
    padding: 0 15px;
    margin: 0 auto;

    ${media.mobile} {
        max-width: 480px;
      }

    ${media.tablet} {
        max-width: 768px;
        padding: 0 17px;
      }

    ${media.desktop} {
        max-width: 1464px;
        padding: 0 25px;
      }
}
`;

export default GlobalStyles;

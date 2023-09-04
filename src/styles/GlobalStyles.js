import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
    }

    body {
        /* background-color: ${props => props.theme.brightThree}; */
        background-image: ${props => props.theme.shadeOne};
        /* background-image: url(${require('../img/effetti-atmosferici-con-dessert-e-alberi.jpg')}); */
        /* background-size: cover; */
        font-family: ${props => props.theme.fontPrimary};
        // font-family:'Bebas Neue', sans-serif;
      
        
    }

    button {
        border: none;
        background-color: ${props => props.theme.softFour};
        color: ${props => props.theme.brightTwo};
        font-family: ${props => props.theme.fontPrimary};
        font-weight: bolder;
        padding: 0.6rem;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    
    input {
        background-color: ${props => props.theme.brightThree};
        border-radius: 20px;
        padding: 0.2rem;
        
    }

    h1, h2, h3, h4, h5 {
        margin: 0;
        padding: 0;
    }
`



export default GlobalStyles
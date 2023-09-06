import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
    }

    body {
        background-color: ${props => props.theme.brightOne};
        /* background-image: ${props => props.theme.shadeOne}; */
        background-size: cover;
        font-family: ${props => props.theme.fontPrimary};
        // font-family:'Bebas Neue', sans-serif;
      
        
    }

    button {
        border: none;
        background-color: ${props => props.theme.softFour};
        
        font-family: ${props => props.theme.fontPrimary};
        font-weight: bolder;
        padding: 0.6rem;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    button:hover {
        cursor: pointer;
        background-color: ${props => props.theme.brightOneHover};
        color: ${props => props.theme.brightFive}
    }
    
    input {
        /* background-color: ${props => props.theme.brightThree}; */
        border-radius: 20px;
        padding: 0.2rem;
        text-align: center;
        
    }

    h1, h2, h3, h4, h5 {
        margin: 0;
        padding: 0;
    }

    .weather {
        background-image: ${props => props.theme.shadeOne};
        background-size: cover;
    }

    .sun {
        background-image: ${props => props.theme.shadeTwo};
        background-size: cover;
    }

    .cloud {
        background-image: ${props => props.theme.shadeThree};
        background-size: cover;
    }

    .rain {
        background-image: ${props => props.theme.shadeFour};
        background-size: cover;
    }

    .mixed {
        background-image: ${props => props.theme.shadeFive};
        background-size: cover;
    }
`



export default GlobalStyles
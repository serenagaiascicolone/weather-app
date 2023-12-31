import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
    }

    body {
        /* background-color: ${props => props.theme.brightOne}; */
        background-image: ${props => props.theme.shadeOne};
        
        background-size: cover;
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
        color: ${props => props.theme.brightOneHover};
        /* color: ${props => props.theme.brightFive} */
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


    /* .weather {
        background-image: ${props => props.theme.shadeOne};
        background-size: cover;
    } */

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

    .thunderstorm {
        background-image: ${props => props.theme.shadeSix};
        background-size: cover;
    }

    .snow {
        background-image: ${props => props.theme.shadeSeven};
        background-size: cover;
    }



    .mixed {
        background-image: ${props => props.theme.shadeFive};
        background-size: cover;
    }

    .night {
        background-image: ${props => props.theme.shadeNight};
        color: white;
        border-color: white;
    }
`



export default GlobalStyles
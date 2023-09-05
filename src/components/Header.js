
import { styled } from 'styled-components'
import {FiArrowRight} from 'react-icons/fi'

const HeaderWeatherApp = styled.header `
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Header_text = styled.h2 `
    margin: 0;
    padding: 1rem;
    color: ${props => props.theme.softTwo};
    font-style: italic; 

`
const Header_logo = styled.img `
    max-width: 50px;
    padding: 2rem;
`


const Arrow = styled(FiArrowRight) `
    font-size: 1.5rem;
    /* position: absolute;
    top: 0;
    right: 0; */
    padding: 2rem;
&:hover {
    cursor: pointer;
}
`

export default function Header() {
    return (
        <HeaderWeatherApp>
            {/* <Header_text>Weather App</Header_text> */}
            <Header_logo src={require("../img/logo.png")} alt="" />
            <Arrow/>
        </HeaderWeatherApp>
    )
}
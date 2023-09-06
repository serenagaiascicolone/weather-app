
import { styled } from 'styled-components'
import {FiArrowRight} from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

const HeaderWeatherApp = styled.header `
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: ${props => props.theme.lightOne}; */
`
const Header_text = styled.h2 `
    margin: 0;
    padding: 1rem;
    /* color: ${props => props.theme.softTwo}; */
    font-style: italic; 
&&:hover {
    cursor: pointer;
    opacity: 0.7;
    
}

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
    transition: 0.5s;
&:hover {
    cursor: pointer;
    padding: 1rem;
}
`

export default function Header() {
    
    const location = useLocation().pathname
    const navigate = useNavigate()

function handleBodyColor () {
    document.body.classList = '';
    navigate('/');
}

    return (
        <HeaderWeatherApp>
            {location === '/city' ? (
            <Header_text onClick={handleBodyColor}>WEATHER APP</Header_text>
            ) : 
            
            <Header_logo src={require("../img/logo.png")} alt="" />
            }
            <Arrow/>
        </HeaderWeatherApp>
    )
}
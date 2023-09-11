import { styled } from "styled-components"
import {TiWeatherStormy} from "react-icons/ti"
import { useNavigate } from "react-router-dom"
import setBodyColor from "../utilities/bodyColor"
import { useState } from "react"
const NotFoundContainer = styled.div `
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 2rem;
`
const NotFoundImg = styled(TiWeatherStormy) `
    font-size: 250px;
`
const NotFoundText = styled.p `
    text-align: center;
    /* color: ${props => props.theme.lightOne}; */
    line-height: 1.5;
`
export default function NotFound () {
    let time = new Date().getHours()
    console.log(time)
    // "1995-12-25T21:15:30"
    const [isNight, setIsNight] = useState(time >= 20 || time < 6)
   
    if(isNight){
        setBodyColor('night')
    }
const navigate = useNavigate()
    return (
        <NotFoundContainer>
        <NotFoundImg />
        <h1>ERROR 404</h1>
        <h1>Page Not Found</h1>
        <NotFoundText> You can search for the page you want here or return to the homepage </NotFoundText>
        <button onClick={() => navigate('/')}> GO HOME </button>
        </NotFoundContainer>
    )
}
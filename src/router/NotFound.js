import { styled } from "styled-components"
import {TiWeatherStormy} from "react-icons/ti"
import { useNavigate } from "react-router-dom"
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
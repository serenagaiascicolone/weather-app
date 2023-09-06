import { styled } from "styled-components"
import {TiWeatherShower} from "react-icons/ti"
import { useNavigate } from "react-router-dom"
import { useRouteError } from "react-router-dom"

const ErrorContainer = styled.div `
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 2rem;
`
const ErrorImg = styled(TiWeatherShower) `
    font-size: 250px;
`
const ErrorText = styled.p `
    text-align: center;
    color: ${props => props.theme.lightOne};
    line-height: 1.5;
`

export default function Error () {
const error = useRouteError()
const navigate = useNavigate()
    return (
        <ErrorContainer>
        <ErrorImg />
        <h1>ERROR! </h1>
      
        <ErrorText> {error.message} </ErrorText>
        <button onClick={() => navigate('/')}> GO HOME </button>
        </ErrorContainer>
    )
}
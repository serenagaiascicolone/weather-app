
import { styled } from 'styled-components';

const WeekContainer = styled.div `
    display: flex;
    gap: 1.2rem;
    padding: 0 1.5rem 1rem 1.5rem;
    justify-content: space-around;
`
const WeekDay_text = styled.h3 `
    font-family: ${props => props.theme.fontSecondary};
    margin: 1rem 0;
`
const WeekDay = styled.article `
    opacity: 0.6;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const WeekDay_img = styled.img `
    max-width: 45px;
`

export default function MockWeek (){
    console.log(document.body.style)
    return (
        <WeekContainer>
        <WeekDay>
            <WeekDay_text>
                MAR
            </WeekDay_text>
            <WeekDay_img src={require('../img/ico/weather_ico.png')}/> 
        </WeekDay>
        <WeekDay>
            <WeekDay_text>
                MER
            </WeekDay_text>
            <WeekDay_img src={require('../img/ico/weather_ico.png')}/> 
        </WeekDay>
        <WeekDay>
            <WeekDay_text>
                GIO
            </WeekDay_text>
            <WeekDay_img src={require('../img/ico/weather_ico.png')}/> 
        </WeekDay>
        <WeekDay>
            <WeekDay_text>
                VEN
            </WeekDay_text>
            <WeekDay_img src={require('../img/ico/weather_ico.png')}/> 
        </WeekDay>
        <WeekDay>
            <WeekDay_text>
                SAB
            </WeekDay_text>
            <WeekDay_img src={require('../img/ico/weather_ico.png')}/> 
        </WeekDay>
        <WeekDay>
            <WeekDay_text>
                DOM
            </WeekDay_text>
            <WeekDay_img src={require('../img/ico/weather_ico.png')}/> 
        </WeekDay>
        
        </WeekContainer>
    )
}
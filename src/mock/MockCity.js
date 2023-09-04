import { styled } from 'styled-components'
import MockWeek from './MockWeek'

const WeatherDay = styled.article `
/* background-image: none ; */
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 4rem auto; 
    gap: 1rem;
`
const WeatherDay_Header = styled.div `
    display: flex;
    /* flex-direction: column;  */
    justify-content: space-around;
    align-items: center; 
`

const CityContainer = styled.span `
    display: flex;
    flex-direction: column;
    opacity: 0.7; 
    align-items: center;
`

const ImageCity = styled.img `
    max-width: 50px;
    border: solid 1px black; 
    border-radius: 50%;
    margin: 0 auto;
`

const CityName = styled.h2 `
    font-size: 1rem; 
    margin: 1rem; 
`

const Day = styled.h3 `
    font-family: ${props => props.theme.fontSecondary};
    font-size: 1.5rem;
    
`

const ImageWeatherContainer = styled.div `
    width: 100%;
`
const ImageWeather = styled.img `
    display: flex;
    max-width: 200px;
    margin: 0 auto;
    
    /*TODO: da valutare*/ 
    /* border-radius: 50%;
    box-shadow: 5px 5px 12px 20px white;
    background-color: white; */
`

const Temperature = styled.h1 `
    margin: 3rem auto;
    font-size: 4rem;
    font-family: ${props => props.theme.fontPrimary};
`
export default function MockCity () {
    return (
        <>
        {/* <h1>weather app music</h1> */}
        <WeatherDay>
            <WeatherDay_Header>
                <CityContainer>
                <ImageCity src={require('../img/city.png')} alt="" />
                <CityName>Gela</CityName>                
                </CityContainer>
                    <Day> Lunedì 04 </Day>
            </WeatherDay_Header>
            <ImageWeatherContainer>
                <ImageWeather src={require('../img/sun.png')} alt="" />
            </ImageWeatherContainer>
            <Temperature>38°</Temperature>
        </WeatherDay>
        <MockWeek />
        </>
    )
}
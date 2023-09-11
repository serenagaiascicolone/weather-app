import { styled } from 'styled-components'
import { cityUI } from '../../../utilities/cityUI';
import { cities } from '../../../mock/cities';
import setBodyColor from '../../../utilities/bodyColor';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { useState } from 'react';
const WeatherDayContainer = styled.article `
/* background-image: none ; */
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 4rem auto; 
    gap: 1rem;
    /* height: 492px; */
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
    text-transform: capitalize;
    
`

const ImageWeatherContainer = styled.div `
    width: 100%;
`
const ImageWeather = styled.img `
    display: flex;
    max-width: 200px;
    margin: 0 auto;
`

const Temperature = styled.h1 `
    margin: 3rem auto 0 auto;;
    font-size: 4rem;
    font-family: ${props => props.theme.fontPrimary};
`

const TemperatureParams = styled.p `
    margin: 0 auto 0 auto;;
`

export default function WeatherDay ({coords, city, currentWeather, isNight}) {
  
    console.log(city.dt)
    // let day = format(
	// 	(new Date().getTime() + (city.timezone * 1000)),
	// 	'EEEE d',  {locale: it});
    let day = format(
		(new Date().getTime() + (city.timezone)),
		'EEEE d',  {locale: it});
    document.body.classList = '';
    let nameUI = cityUI(currentWeather.weather[0].icon)
    
    if(isNight){
        setBodyColor('night')
    }else{
        setBodyColor(nameUI) 
    }

    
    return (
        <WeatherDayContainer>
        <WeatherDay_Header>
            <CityContainer>
                {isNight ? (
                    <ImageCity src={require('../../../img/img-night/city.png')} alt="" style={{'border-color' : 'white'}}/>
                  ) : 
                    <ImageCity src={require('../../../img/city.png')} alt="" />      
            }
            <CityName>{city.name}</CityName>                
            </CityContainer>
                <Day> {day}</Day>
        </WeatherDay_Header>
        <ImageWeatherContainer>
            <ImageWeather src={require(`../../../img/weather-img/${nameUI}.png`)} alt="" />
        </ImageWeatherContainer>
     
        <Temperature>{Math.ceil(currentWeather.main.temp)}°</Temperature>
        <TemperatureParams>MIN {Math.ceil(currentWeather.main.temp_min)}° | MAX {Math.ceil(currentWeather.main.temp_max)}°  </TemperatureParams>

    </WeatherDayContainer>
    )
}
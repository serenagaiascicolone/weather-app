import { useGetWeatherByCoordsQuery } from "../../features/weatherApi"
import HourForecast from "./WeatherDay/Hour/HourForecast"
import WeatherDay from "./WeatherDay/WeatherDay"
import WeatherTodayDetails from "./WeatherDay/WeatherTodayDetails"
import WeatherWeek from "./Week/WeatherWeek"
import { useGetForecastByCoordsQuery } from "../../features/weatherApi"
import LoaderSpinner from "../LoaderSpinner"
import { styled } from "styled-components"

const ErrorMessage = styled.h3 `
    display: flex;
    height: 100vh;
    width: 100%;
    padding-top: 2rem;
    justify-content: center;
`

export default function SelectedCity ({coords, isNight}) {

    let {data, isLoading, error} = useGetForecastByCoordsQuery(coords) 
    let content = ''
    console.log('selected city', data)
    if(error) {
        content = <ErrorMessage>Previsioni non trovate</ErrorMessage>
    }

    if(isLoading) {
        content = (
            <LoaderSpinner />
        )
    }

    if(data){
        content = (
        <>
      
        <WeatherDay 
        coords={coords} 
        city={data.city} // name
        currentWeather = {data.list[0]} //meteo giorno corrente 
        isNight={isNight}
        />
       
        <WeatherTodayDetails 
        currentWeather= {data.list[0]}
        isNight={isNight}
        />
       
        <HourForecast 
        forecast={data.list}
        timezone={data.city.timezone}
        isNight={isNight}
        />        
       
        <WeatherWeek 
         forecast={data.list}
         timezone={data.city.timezone}
         isNight={isNight}
        />
        </>

        )
    }
    
    return (
        <>
            {content}
        </>
    )
}
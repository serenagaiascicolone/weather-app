import { useGetWeatherByCoordsQuery } from "../../features/weatherApi"
import HourForecast from "./WeatherDay/Hour/HourForecast"
import WeatherDay from "./WeatherDay/WeatherDay"
import WeatherTodayDetails from "./WeatherDay/WeatherTodayDetails"
import WeatherWeek from "./Week/WeatherWeek"
import { useGetForecastByCoordsQuery } from "../../features/weatherApi"
import LoaderSpinner from "../LoaderSpinner"




export default function SelectedCity ({coords}) {

    let {data, isLoading, error} = useGetForecastByCoordsQuery(coords) 
    let content = ''
    console.log(data)
    if(error) {
        content = <h3>Previsioni non trovate</h3>
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
        />
       
        <WeatherTodayDetails 
        currentWeather= {data.list[0]}/>
       
        <HourForecast 
        forecast={data.list}
        timezone={data.city.timezone}
        />        
       
        <WeatherWeek 
         forecast={data.list}
         timezone={data.city.timezone}
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
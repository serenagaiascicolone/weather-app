import HourForecast from "./WeatherDay/Hour/HourForecast"
import WeatherDay from "./WeatherDay/WeatherDay"
import WeatherTodayDetails from "./WeatherDay/WeatherTodayDetails"




export default function SelectedCity ({coords}) {
    return (
        <>
   

        <WeatherDay coords={coords}/>
        <WeatherTodayDetails />
        <HourForecast />
       
        </>
    )
}
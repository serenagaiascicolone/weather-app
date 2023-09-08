import { styled } from "styled-components"
import { format, formatDistance, formatRelative, subDays } from "date-fns"
import forecast from './../../../mock/forecast';
import { it } from "date-fns/locale";
import { cityUI } from "../../../utilities/cityUI";

const WeekHeader = styled.div `
    display: flex;
    gap: 0.2rem;
    /* align-items: center; */
    width: 100%;
    margin: 1rem 1rem 0 1.5rem;
`

const WeekContainer = styled.div `
        display: flex;
        /* flex-direction: column; */
        gap: 1rem;
        margin: 1rem;
        justify-content: center;
  
`
const WeekArticle = styled.article `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    justify-content: space-between;
    max-width: 20px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    margin-bottom: 0.5rem;
`

const DayAndMounth = styled.p `
    margin: 0;
`

const Therm = styled.div `
    width: 70%;
    height: 60px;
    border-radius: 20px;
    background-color: ${props => props.theme.lightThree};
`

const WeekTemperature = styled.h4 `
    color: red;

&.min {
    color: green;
}
    `
const Image = styled.img `
        max-width: 30px;
`


export default function WeatherWeek () {
    let timezone = forecast.city.timezone
    let day = format(new Date(), 'EEE', {locale: it}) //ven => venerdì
    let test = format(new Date(), 'dd/MM', {locale: it}) //08/09 => 8 SETTEMBRE
    let count;
    console.log(forecast.list)
    
    
    let weekForecast = forecast.list
    .filter(el => {
        let forecastDay = format(new Date((el.dt + timezone) * 1000), 'EEE', {locale: it} );
        let newDay = (forecastDay !== day) ? forecastDay : ''; // day = venerdì, in questo modo ho cancellato tutti i venerdì contenuti in forecast. Quindi newDay = sab, dom, lun, mart, merc

        //dopo aver selezionato i giorni da mostrare, seleziono le ore (meteo di ogni 3 ore (per giorno) => io voglio prendere il meteo delle 14 dei prossimi 5 giorni)
        if(newDay) {
            count = 0; // 0 = 
            day = newDay; 
        } else {
            count++;
        }
    
        if(count === 4) { // quando arriva a 4 estraggo i valori delle 14 (weekforecast avrà tale valore)
            return true; 
        }
        return false; // scarto tutti gli altri valori
    })
    .map(element => { // mappo i valori rimasti e creo la UI 
        let tempMax = Math.ceil(element.main.temp_max);
        let tempMin = Math.ceil(element.main.temp_min);
        let day = format(new Date(element.dt * 1000), 'EEE', {locale: it});
        let dayAndMounth = format(new Date(element.dt * 1000), 'dd/MM', {locale: it});
        let nameUI = cityUI(element.weather[0].icon)
        return (
            <WeekArticle>
            <h4>{day}</h4>
            <DayAndMounth> {dayAndMounth} </DayAndMounth>
            <WeekTemperature>{tempMax}°</WeekTemperature>
            <Therm></Therm>
            <WeekTemperature className='min'>{tempMin}°</WeekTemperature>
            <Image src={require(`../../../img/ico/${nameUI}.png`)} alt="" srcset="" />
        </WeekArticle>
    
        )
    })
   

    return (
        <>
        <WeekHeader>
            <h3>Prossimi 4 giorni</h3>
        </WeekHeader>
        <WeekContainer>

            {weekForecast}
  
        </WeekContainer>
        </>
    )
}
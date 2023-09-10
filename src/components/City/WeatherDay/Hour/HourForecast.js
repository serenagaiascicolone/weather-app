import { styled } from "styled-components"
// import forecast  from "../../../../mock/forecast"
import { cityUI } from "../../../../utilities/cityUI"
import ScrollContainer from "react-indiana-drag-scroll"
import { format } from "date-fns"
import { it } from "date-fns/locale";

const HourHeader = styled.div `
    display: flex;
    gap: 0.2rem;
    /* align-items: center; */
    width: 100%;
    margin: 1rem 1rem 0 1.5rem;
`

const HourContainer = styled.div `
        display: flex;
        gap: 1rem;
        margin: 1rem;
  
`
const HourArticle = styled.article `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    justify-content: center;
    width: 100px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    margin-bottom: 0.5rem;
    cursor: pointer;
`
const Day = styled.h4 ``
const Time = styled.h4 ``
const Image = styled.img `
        max-width: 50px;
`
const Temperature = styled.h2 ``


export default function HourForecast ({forecast, timezone}) {
// let timezone = forecast.city.timezone;


let hourForecast = forecast.map(element => {
    let temp = element.main.temp;
    let dayAndMounth = format(new Date((element.dt + timezone)*1000), 'dd/MM', {locale: it});
    let time = format(new Date((element.dt + timezone)*1000), 'kk:mm');
    let nameUI = cityUI(element.weather[0].icon)
    return (
        <HourArticle>
        <Day> {dayAndMounth}</Day>
        <Time> {time}</Time>
        <Image src={require(`../../../../img/ico/${nameUI}.png`)} alt="" />
        <Temperature> {Math.ceil(temp)}° </Temperature>
    </HourArticle>

    )
})
    return (
        <>
        <HourHeader> 
            <h3>  Previsione Oraria </h3> 
        </HourHeader>
        <ScrollContainer>
        <HourContainer>          
           {hourForecast}        
        </HourContainer>
        </ScrollContainer>
        </>
    )

}
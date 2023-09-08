import { styled } from "styled-components"
import WeatherDay from './../WeatherDay/WeatherDay';


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
    return (
        <>
        <WeekHeader>
            <h3>Prossimi 7 giorni</h3>
        </WeekHeader>
        <WeekContainer>

            <WeekArticle>
                <h4>dom</h4>
                <p style={{'margin': '0'}}> 11/7 </p>
                <WeekTemperature>18°</WeekTemperature>
                <Therm></Therm>
                <WeekTemperature className='min'>28°</WeekTemperature>
                <Image src={require("../../../img/ico/sun.png")} alt="" srcset="" />
            </WeekArticle>
        
        
        </WeekContainer>
        </>
    )
}
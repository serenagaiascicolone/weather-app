import { styled } from 'styled-components';


//TODO: sistemare larghezza articoli con calc 
const DetailsContainer = styled.div `
    display: flex;
    gap: 1.5rem;
    padding: 0 1rem 1rem;
    justify-content: center;
    max-width: 100%;
    flex-wrap: wrap-reverse;
`
const Description = styled.p `
    width: 100%;
    text-align: center;
    text-transform: capitalize;
    font-style: italic;
    margin-bottom: 1rem;
`

const DetailsArticle = styled.article `
    padding: 1rem 1rem;
    border-radius: 20px;
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
`

const DetailsText = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
`

export default function WeatherTodayDetails ({currentWeather}) {
    
    let main = currentWeather.main
    // console.log(currentWeather.weather[0].description)
    return (
        <>
            <Description>{currentWeather.weather[0].description}</Description>
        <DetailsContainer>
            <DetailsArticle>
                <DetailsText>
                    <h4> Umidità </h4>
                    <h2> {main.humidity}%</h2>             
                </DetailsText>
            </DetailsArticle>

            <DetailsArticle>
            <DetailsText>
                    <h4> Visibilità </h4>
                    <h2> {currentWeather.visibility/1000}km</h2>             
                </DetailsText>
            </DetailsArticle>
            
            <DetailsArticle>
            <DetailsText>
                    <h4> Temperatura percepita </h4>
                    <h2> {Math.ceil(main.feels_like)}°</h2>             
                </DetailsText>
                
            </DetailsArticle>
            <DetailsArticle>
            <DetailsText>
                    <h4> Pressione atmosferica </h4>
                    <h2> {main.pressure} hPa</h2>             
                </DetailsText>
                
            </DetailsArticle>

        </DetailsContainer>
        
        </>

        
    )
}
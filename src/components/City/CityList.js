import { styled } from "styled-components"
import { useEffect, useState } from "react"
import {HiArrowDown} from 'react-icons/hi'
import {HiArrowNarrowUp} from 'react-icons/hi'

import { cities } from "../../mock/cities"
import { useNavigate } from "react-router-dom"
import {cityUI} from '../../utilities/cityUI'



const CityContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
`

const InfoCityContainer = styled.section `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    
    `
const InfoCity = styled.article `
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    margin: 0 1rem;
    /* background-image: ${props => props.theme.shadeFour};
    background-size: cover; */
    border-radius: 20px;
    align-items: center;
    position:relative;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);

&&:hover {
box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);

}    
`
const ImgSelectedCity = styled.img `
    max-width: 25px;
    margin: 0.5rem 0 0 0.5rem;
    
`

const ArrowDown = styled(HiArrowDown)`
    position: absolute;
    position: absolute;
    bottom: 0;
    left: 50%;
    padding: 1.5rem 0;
    &&:hover {
    cursor: pointer;
    padding: 1rem 0;
    transition: 0.5s;
}
&.not-visible {
display: none;
}
`
const ArrowUp = styled(HiArrowNarrowUp)`
    display: none;
    position: absolute;
    position: absolute;
    bottom: 0;
    left: 50%;
    padding: 1.5rem 0;
    transition: 0.5s;
    &&:hover {
    cursor: pointer;
    padding: 2rem 0;
}
&.visible {
display: block;
}
`

const ButtonContainer = styled.div `
    display: flex;
    justify-content: space-around;
`




export default function CityList () {
    const [isButtonContainerView, setButtonContainer] = useState(undefined)
    let navigate = useNavigate()
    
  

    return (
        
        
        <CityContainer>
            {cities.map((city, index) => {
                let nameUI = cityUI(city.ico);
                // console.log(cities[index++].coords)
                
                return (

                        <InfoCityContainer key={city.id} >   
                            <InfoCity>
                                <span>
                                <h3> {city.name}</h3>
                                <p>{city.date}</p>
                                </span>
                                <span>
                                <h2>{city.temperature}°</h2>
                                <ImgSelectedCity src={require(`../../img/ico/${nameUI}.png`)} alt="" />
                                </span>
                                <ArrowDown 
                                onClick={()=> setButtonContainer(index)}
                                className = {isButtonContainerView === index ? 'not-visible' : ''}/>
                                <ArrowUp 
                                onClick={()=> setButtonContainer(undefined)}
                                className = {isButtonContainerView === index ? 'visible' : ''}
                                />
                            </InfoCity>
                            {isButtonContainerView === index &&  (
                                <>
                                <ButtonContainer>
                                    <button> Cancella </button>
                                <button onClick={() => navigate(`/city?lat=${city.coords.lat}&lon=${city.coords.lon}`)}> Dettagli meteo </button>
                                </ButtonContainer>       
                                </>

                            )}
                        </InfoCityContainer>          

                )
            })}
</CityContainer>
    )

}
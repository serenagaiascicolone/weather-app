import { styled } from "styled-components"
import { useState } from "react"
import {HiArrowDown} from 'react-icons/hi'

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
    background-image: ${props => props.theme.shadeTwo};
    border-radius: 20px;
    align-items: center;
    position:relative;
`
const ImgSelectedCity = styled.img `
    max-width: 25px;
    padding: 0.5rem;
`

const Arrow = styled(HiArrowDown)`
    position: absolute;
    position: absolute;
    bottom: 0;
    left: 50%;
    padding: 1rem 0;
    &&:hover {
    cursor: pointer;
}
`

const ButtonContainer = styled.div `
    display: flex;
    justify-content: space-around;
`
export default function CityList () {

    const [isButtonContainerView, setButtonContainer] = useState(false)
   
   
    return (


<CityContainer>
      <InfoCityContainer >   
        <InfoCity onClick={()=> setButtonContainer(!isButtonContainerView)}>
            <span>
            <h3> Gela </h3>
            <p>08.35</p>
            </span>
            <span>
            <h2>23°</h2>
            <ImgSelectedCity src={require('../../img/ico/cloudy_ico.png')} alt="" />
            </span>
            <Arrow/>
        </InfoCity>
        {isButtonContainerView && (

            <ButtonContainer>
                <button> Cancella </button>
                <button> Dettagli meteo </button>
            </ButtonContainer>       

        )}
     </InfoCityContainer>          
</CityContainer>
    )

}
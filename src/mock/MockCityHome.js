import { styled } from "styled-components"


const CityContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
`
const InfoCity = styled.article `
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    margin: 0 1rem;
    background-image: ${props => props.theme.shadeTwo};
    border-radius: 20px;
    align-items: center;
 
`
const ImgCityHome = styled.img `
    max-width: 25px;
    padding: 0.5rem;
`
export default function MockCityHome () {
    return (
        <CityContainer>

        <InfoCity>
            <span>
            <h3> Gela </h3>
            <p>08.35</p>
            </span>
            <span>
            <h2>23°</h2>
            <ImgCityHome src={require('../img/ico/cloudy_ico.png')} alt="" />
            </span>
        </InfoCity>
        <InfoCity>
            <span>
            <h3> Gela </h3>
            <p>08.35</p>
            </span>
            <span>
            <h2>23°</h2>
            <ImgCityHome src={require('../img/ico/cloudy_ico.png')} alt="" />
            </span>
        </InfoCity>
        <InfoCity>
            <span>
            <h3> Gela </h3>
            <p>08.35</p>
            </span>
            <span>
            <h2>23°</h2>
            <ImgCityHome src={require('../img/ico/cloudy_ico.png')} alt="" />
            </span>
        </InfoCity>

        </CityContainer>
    )

}
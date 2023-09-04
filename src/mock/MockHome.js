
import { styled } from 'styled-components';
import MockCityHome from './MockCityHome';

const HomeContainer = styled.main `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;
    margin: 2rem auto;
    text-align: center; 
    /* height: 100vh; */
    /* padding: 2rem; */

 
`
const HomeContainer_form= styled.main `
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
`

const ButtonContainer = styled.div `
    display: flex;
    gap: 1rem;
    justify-content: center;
`
const AddInput = styled.input `
    width: 50%;
    align-self: center;
`
const FilterContainer= styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 50%;
    align-self: center;
    justify-content: center;
    align-items: center;
`
const FilterInput = styled.input `
    height: 25px;
`

export default function MockHome () {
    return (
        <>
        
        <HomeContainer>
            <h1>Weather App</h1>
            <HomeContainer_form>
                <ButtonContainer>
                <button> Cerca città</button>
                <button> Aggiungi posizione</button>
                </ButtonContainer>
                <AddInput type="text" />
                <FilterContainer>
                <FilterInput type="search" />
                <button>ico</button>
                </FilterContainer>
            </HomeContainer_form>
        </HomeContainer>

        <MockCityHome />
        </>
    )
}
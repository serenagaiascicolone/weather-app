import { styled } from 'styled-components';

import setBodyColor from '../utilities/bodyColor';


import {BsArrowRepeat} from 'react-icons/bs'
import CityList from '../components/City/CityList';


const HomeContainer = styled.main `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin: 2rem auto;
    text-align: center; 
    /* height: 100vh; */
    /* padding: 2rem; */

 
`
const HomeContainer_form= styled.main `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    justify-content: center;

`

const ButtonContainer = styled.div `
    display: flex;
    gap: 1rem;
    justify-content: center;
`
const AddInput = styled.input `
    width: 150px;
    align-self: center;
`
const FilterContainer= styled.div`
    display: flex;
    /* flex-direction: column; */
    gap: 0.5rem;
    width: 100%;
    align-self: center;
    justify-content: center;
    align-items: center;
`
const FilterInput = styled.input `
    width: 200px;
    height: 25px;
`

// const ButtonResetFilter = styled.button `
//    border-radius: 50%;

//    `

const IconResetFilter = styled(BsArrowRepeat) `
    font-size: 1.2rem;
    color: ${props => props.theme.softFour};
    &:hover {
    cursor: pointer; 
    }
`

export default function Home () {
    
   setBodyColor('home')


    
    return (
        <>
        
        <HomeContainer>
            <h1>WEATHER APP</h1>
            <HomeContainer_form>
                <ButtonContainer>
                <button> Cerca città</button>
                <button> Aggiungi posizione</button>
                </ButtonContainer>
                <AddInput type="text" />
                <FilterContainer>
                <FilterInput type="search" />
                 < IconResetFilter />
                </FilterContainer>
            </HomeContainer_form>
        </HomeContainer>

        <CityList />
        </>
    )
}
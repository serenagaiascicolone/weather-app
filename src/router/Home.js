import { styled } from 'styled-components';

import setBodyColor from '../utilities/bodyColor';


import {BsArrowRepeat} from 'react-icons/bs'
import {FiSearch} from 'react-icons/fi'
import CityList from '../components/City/CityList';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

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

const HomeTitle = styled.h1 `
    letter-spacing: 0.5rem;
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

const InputContainer= styled.div`

        display: flex;
        /* flex-direction: column; */
        gap: 0.5rem;
        width: 100%;
        align-self: center;
        justify-content: center;
        align-items: center;
    
    `

const Input = styled.input `
    /* width: 200px; */
    padding: 0.5rem;
`

const IconSearch = styled(FiSearch) `
     font-size: 1.2rem;
    color: ${props => props.theme.softFour};
    transition: 0.5s;
    &:hover {
    cursor: pointer; 
    font-size: 1.5rem;

    }
    ` 

const IconResetFilter = styled(BsArrowRepeat) `
 
        font-size: 1.2rem;
        color: ${props => props.theme.softFour};
        transition: 0.5s;

    &:hover {
    cursor: pointer; 
    rotate: 360deg;
    }
`

export default function Home () {
    let location = useLocation ()
    const [isAddInput, setIsAddInput] = useState(false)

    setBodyColor('weather')
  
    return (
        <>
        
        <HomeContainer>
            <HomeTitle>WEATHER APP</HomeTitle>
            <HomeContainer_form>
                <ButtonContainer>
                <button onClick={() => setIsAddInput(!isAddInput)}> Aggiungi città</button>
                <button> Aggiungi posizione</button>
                </ButtonContainer>
                {isAddInput && (
                    <InputContainer>
                    <Input type="text" placeholder='cerca'/>
                    <IconSearch />
                    </InputContainer>
                )}
                <InputContainer>
                <Input type="search" placeholder='filtra'/>
                 < IconResetFilter  />
                </InputContainer>
            </HomeContainer_form>
        </HomeContainer>

        <CityList />
        </>
    )
}
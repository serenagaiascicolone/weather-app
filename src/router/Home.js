import { styled } from 'styled-components';
import {BsArrowRepeat} from 'react-icons/bs'
import {FiSearch} from 'react-icons/fi'
import { useState, useRef, useEffect } from 'react';
import { selectCities } from "../features/citiesSlice"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { nanoid } from 'nanoid';
import { weatherApi } from './../features/weatherApi';
import CityListContainer from '../components/City/CityListContainer';



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
    const [isAddInput, setIsAddInput] = useState(false)
    const [isFilterInput, setIsFilterInput] = useState(false)
    // const [location, setLocation] = useState({lat: 0, lon: 0})
    const searchRef = useRef()
    
    document.body.classList = '';

    
    
    //salvo le città aggiunte
    let cityAdded = useSelector(selectCities)
    useEffect(() => {
        localStorage.setItem('weatherList', JSON.stringify(cityAdded))
    },[cityAdded])
    let dispatch = useDispatch();
    
    
    // dispatch 
      function handleAddedCity (){
        let cityId = nanoid();
        dispatch(weatherApi.endpoints.getCoordinatesByCityName.initiate({
            name: searchRef.current.value,
            id: cityId, 
        }))
        searchRef.current.value = ''
      }

    return (
        <> 
        <HomeContainer>
            <HomeTitle>GIULIACCI APP</HomeTitle>
            {/* <img src={require('../img/mario-giuliacci-PhotoRoom.png-PhotoRoom.png')} style={{'max-width': '250px','margin': '0 auto'}}/> */}
            <HomeContainer_form>
                <ButtonContainer>
                <button onClick={() => setIsAddInput(!isAddInput)}> Aggiungi città</button>
                <button> Aggiungi posizione</button>
                <button onClick={() => setIsFilterInput(!isFilterInput)}> Filtra </button>
                </ButtonContainer>
                {isAddInput && (
                    <InputContainer>
                    <Input type="text" placeholder='cerca' ref={searchRef} onKeyDown={(e)=> e.key === 'Enter' && handleAddedCity()}/>
                    <IconSearch onClick={handleAddedCity} />
                    </InputContainer>
                )}
                {isFilterInput && (
                <InputContainer>
                <Input type="search" placeholder='filtra'/>
                 < IconResetFilter/>
                </InputContainer>
                )}
            </HomeContainer_form>
        </HomeContainer>

                <CityListContainer cityAdded={cityAdded}/> 
        </>
  
    )
} 
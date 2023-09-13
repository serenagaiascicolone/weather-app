import { styled } from 'styled-components';
import {BsArrowRepeat} from 'react-icons/bs'
import {FiSearch} from 'react-icons/fi'
import { useState, useRef, useEffect } from 'react';
import {  selectCities } from "../features/citiesSlice"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { nanoid } from 'nanoid';
import { weatherApi } from './../features/weatherApi';
import CityListContainer from '../components/City/CityListContainer';
import { setTextFilter } from '../features/filtersSlice';
import setBodyColor from './../utilities/bodyColor';
import { useOutletContext } from 'react-router-dom';

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
 
const LogoText = styled.img `
    max-width: 50%;
    margin: 0 auto;
    padding: 0;
`
const HomeImgContainer = styled.div `
    max-width: 100%;
`
const HomeImg = styled.img `  
    max-width: 100%;
    margin: 0px auto;
    height: 250px;
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
    flex-wrap: wrap;
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
    let isNight = useOutletContext()

    const [isAddInput, setIsAddInput] = useState(false)
    const [isFilterInput, setIsFilterInput] = useState(false)
    const searchRef = useRef()
    const filterRef = useRef()
   
    //handle body.color
    if(isNight){
        setBodyColor('night')
    }else {
        document.body.classList = '';

    }

      
    //salvo le città aggiunte
    let cityAdded = useSelector(selectCities)
    useEffect(() => {
        localStorage.setItem('weatherList', JSON.stringify(cityAdded))
    },[cityAdded])
    let dispatch = useDispatch();
    
    
    // dispatch 
      function handleAddedCity (){
        // let cityId = nanoid();
        let city = {
            name: searchRef.current.value,
            id: nanoid()
        }
        dispatch(weatherApi.endpoints.getCoordinatesByCityName.initiate(city))
        searchRef.current.value = ''
      }

      // filtro le città salvate 
      function handleFilterCities () {
          let cityFiltered = filterRef.current.value;
          dispatch(setTextFilter(cityFiltered))
        
        }
        
        
        function handleResetFilter () {
        dispatch(setTextFilter(''))
      }

      //aggiungo posizione
      const [location, setLocation] = useState( {lat: 0, lon: 0});

      useEffect(()=> {
          const onSuccess = (position) => {   
              setLocation({
                  lat: position.coords.latitude,
                    lon: position.coords.longitude
              })  
                };
            const onError = (error) => {
                return error.message
            }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
      }, [])

      console.log(navigator)
      // utilizzo il secondo reducerPath di weatherApi
      function HandleAddPosition () {
        let city = {
            id: nanoid(),
            coords: {
                lat: location.lat,
                lon: location.lon
            }
        }
            dispatch(weatherApi.endpoints.getCityNameByCoordinates.initiate(city))
        }
            

    
        return (
        <> 
        <HomeContainer>
            
            {isNight ? 
            <LogoText src={require('../img/img-night/logoText.png')}/>
            :
            <LogoText src={require('../img/logoText.png')}/>
        }
            <HomeImgContainer>
                <HomeImg src={require('../img/giuliacci.png')}/>
            </HomeImgContainer>
            <HomeContainer_form>
                <ButtonContainer>
                <button onClick={() => setIsAddInput(!isAddInput)}> Aggiungi città</button>
                <button onClick={HandleAddPosition}> Aggiungi posizione</button>
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
                <Input type="search" placeholder='filtra' ref={filterRef} onChange={handleFilterCities}/>
                 < IconResetFilter onClick={handleResetFilter}/>
                </InputContainer>
                )}
            </HomeContainer_form>
        </HomeContainer>

                <CityListContainer 
                cityAdded={cityAdded}
                location = {location}
                isNight = {isNight}
                /> 
        </>
  
    )
} 
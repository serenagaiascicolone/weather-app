
import { styled } from 'styled-components'
import {FiArrowRight} from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { selectCities } from '../features/citiesSlice'
import { useSelector } from 'react-redux';

const HeaderWeatherApp = styled.header `
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
`

const Header_logo = styled.img `
    max-width: 50px;
    padding: 2rem;
`
const LogoText = styled.img `
    max-width: 250px;
    margin-top: 1rem;
    padding: 0;
&&:hover {
    cursor: pointer;
    opacity: 0.7;
}
`

const Arrow = styled(FiArrowRight) `
    font-size: 1.5rem;
    /* position: absolute;
    top: 0;
    right: 0; */
    padding: 2rem;
    transition: 0.5s;
&:hover {
    cursor: pointer;
    padding: 1rem;
}
&.rotate {
    rotate: 180deg;
}
`

export default function Header({isNight}) {
console.log(isNight)
    const location = useLocation().pathname
    const navigate = useNavigate()
    const cities = useSelector(selectCities)
    
    const coords = cities.map((city) => city.coords)
    let [index, setIndex] = useState(0)

// click sul titolo quando sei nella rotta '/city'
function handleClickHeaderText () {
    navigate('/')
    setIndex(0)
}

// click sulla freccia a destra/sinistra per scorrere il meteo delle città
function handleClickCityPage () {
    if(index < coords.length){
        setIndex(index + 1)
        navigate(`/city?lat=${coords[index].lat}&lon=${coords[index].lon}`);
    } else  {
       navigate('/')
       setIndex(0)
    }  
    return index 
}

    return (
        <HeaderWeatherApp>
            
            {location === '/city' ? (
                isNight ?
            <LogoText src={require('../img/img-night/logoText.png')} onClick={handleClickHeaderText}/>
            :
            <LogoText src={require('../img/logoText.png')} onClick={handleClickHeaderText}/>
            ) : 
            isNight ?  
            <Header_logo src={require("../img/img-night/logoImg.png")} alt="" />
            :
            <Header_logo src={require("../img/logoImg.png")} alt="" />
            }
            <Arrow onClick={handleClickCityPage} className={index === coords.length ?'rotate' : ''}/>
       
        </HeaderWeatherApp>
    )
}
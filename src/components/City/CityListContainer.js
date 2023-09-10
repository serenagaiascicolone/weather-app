import CityList from './CityList'
import { styled } from 'styled-components';
import { selectFilters } from '../../features/filtersSlice';
import { useSelector } from 'react-redux';
const CityContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem; 
	@media (min-width: 996px) {
        width: 70%;
        margin: 0 auto; 
    }
`

const Message = styled.h4 `
    text-align: center;
`

export default function CityListContainer ({cityAdded, isFilterCity, location}) {
    let filteredCity = useSelector(selectFilters)
    let filteredCityList = cityAdded.filter(city => city.name.toLowerCase() === filteredCity.toLowerCase())


    return(
        <>
        
        <CityContainer>
        {isFilterCity ? (
            filteredCityList.map((city, index) => {
                return (
                        <CityList city={city} index={index}/>
                
                )
            })
            ):(
                cityAdded.map((city, index) => {
                    return (
                     
                            <CityList 
                            city={city} 
                            index={index}
                            location={location} 
                            />
                            )
                        })
                        ) 
                    }
         {isFilterCity && filteredCityList.length === 0 ? 
            (<Message> Aggiungi città o resetta il filtro </Message>) : ''
        }           
        </CityContainer>
        </>
    )
    

}
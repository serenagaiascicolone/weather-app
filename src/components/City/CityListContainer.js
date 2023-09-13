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

export default function CityListContainer ({cityAdded, location, isNight}) {
    let filters = useSelector(selectFilters)
    // let filteredCityList = cityAdded.filter(city => city.name.toLowerCase() === filteredCity.toLowerCase())
    let filteredCityAdded = cityAdded.filter(city => {
        let textMatch = city.name.toLowerCase()
            .includes(filters.toLowerCase())
        return textMatch
    })

    return(
        <>
        
        <CityContainer>
            {filteredCityAdded && filteredCityAdded.length > 0 ? filteredCityAdded.map((city, index) => {
                return <CityList 
                city={city} 
                index={index}
                isNight={isNight}
                />
            }): (
                <Message> Aggiungi città o resetta il filtro </Message>
            )}
        {/* {isFilterCity ? (
            filteredCityList.map((city, index) => {
                return (
                        <CityList 
                        city={city} 
                        index={index}
                        isNight={isNight}
                        />
                
                )
            })
            ):(
                cityAdded.map((city, index) => {
                    return (
                     
                            <CityList 
                            city={city} 
                            index={index}
                            location={location} 
                            isNight={isNight}
                            />
                            )
                        })
                        ) 
                    }
         {isFilterCity && filteredCityList.length === 0 ? 
            (<Message> Aggiungi città o resetta il filtro </Message>) : ''
        }            */}
        </CityContainer>
        </>
    )
    

}
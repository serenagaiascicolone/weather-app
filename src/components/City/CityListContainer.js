import CityList from './CityList'
import { styled } from 'styled-components';

const CityContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
    margin-bottom: 1rem; 
`
export default function CityListContainer ({cityAdded}) {
    return (
        <CityContainer> 
        {cityAdded.map((city, index) => {
            
            return (
                <CityList city={city} index={index} />
            )
        })
    }
    </CityContainer>
    )
}
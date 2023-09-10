import {BsSnow} from 'react-icons/bs'
import { styled } from 'styled-components'

const LoaderContainer = styled.div `
    width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    height: 100vh;
`
const LoaderIcon = styled(BsSnow) `
    font-size: 5rem; 
    margin: 0 auto; 
    animation: spin 3s infinite;

    @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
}
`

export default function LoaderSpinner () {
    return (
        <LoaderContainer >

            <LoaderIcon />

        </LoaderContainer>
    )
}
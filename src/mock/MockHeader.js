import { styled } from 'styled-components'

const Header = styled.header `
    height: 80px;
`
const Header_text = styled.h2 `
    margin: 0;
    padding: 1rem;
    color: ${props => props.theme.softTwo};
    font-style: italic; 

`

const ImgArrow = styled.img `
    max-width: 25px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 2rem;
`

export default function () {
    return (
        <Header>
            <Header_text>Weather App</Header_text>
            <ImgArrow src={require('../img/ico/next_ico.png')}/>
        </Header>
    )
}
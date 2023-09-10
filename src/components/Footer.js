import { styled } from "styled-components"


const FooterContainer = styled.div `
        display: flex;
        padding: 1rem;
        align-items: center;
        justify-content: space-between;
        margin-top: 4rem; 
        @media (min-width: 996px) { 
        flex-direction: column;
        align-items: flex-start;
    }        
`
const LogoContainer = styled.span `
    
    `
const LogoText = styled.img `
    width: 100px;
`
const InfoListContainer = styled.span `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 996px) { 
        width: 100%;
        flex-direction: row;
        gap: 1rem;
    }

`
const List = styled.ul `
        display: flex;
        list-style: none;
        font-size: 0.8rem;
        gap: 0.2rem;
        padding: 0;
        flex-direction: column; 
        
        @media (min-width: 996px) { 
            flex-direction: row;
            gap: 0.8rem;
    }
`
const ListItem = styled.li `
&&:hover {
    text-decoration: underline;
    cursor: pointer;
}
`
const CopyRightContainer = styled.span ``

const CopyRight = styled.p `
    font-size: 0.8rem; 
`
export default function Footer () {
    return (
        <FooterContainer>
            <LogoContainer>
                <LogoText src={require('../img/logo2.png')} alt="" />
            </LogoContainer>
            <InfoListContainer>
                <List>
                    <ListItem>Informazioni legali</ListItem>
                    <ListItem>Informativa sulla privacy</ListItem>
                    <ListItem>Accessibilità</ListItem>
                    <ListItem>Impostazioni cookie</ListItem>
                </List>
            <CopyRightContainer>
                <CopyRight> © 2023 Giuliacci App AB</CopyRight>
            </CopyRightContainer>
            </InfoListContainer>
        </FooterContainer>
    )
}
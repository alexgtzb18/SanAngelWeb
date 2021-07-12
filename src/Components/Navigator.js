import { Container, Header, Content, Footer, Navbar, Nav, Icon, Dropdown } from 'rsuite';
import styled from 'styled-components';

import { LogoAzul } from '../assets';


const StyledContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 20px;
    z-index: 20;
    
    


    .navbar{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .logo-nav{
        width: 10%;
    }

    ol{
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li{
        margin: 20px
    }
    

`;



const Navigator = () => {
    return (
        <StyledContainer>
            <div className="navbar">
                <img src={LogoAzul} alt="LogoSanAngel" className="logo-nav"/>
                <ol>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Sobre Nosotros</li>
                </ol>
            </div>
        </StyledContainer>
    )
}
export default Navigator
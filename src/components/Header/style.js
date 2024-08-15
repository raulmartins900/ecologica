import styled from 'styled-components';

export const LogoImage = styled.img`
    max-width: 200px;
    transition: transform 0.3 ease-in-out;
    &:hover{
        transform: scale(1.1)
    }
    
    @media (max-width: 800px){
        margin-left: 20px;
        width: 200px;
        

    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 12vh;
    z-index: 20;
    background-color: var(--primary);

    position: fixed;
    top: 0;
    left: 0;
    padding-left: 1%;
    padding-right: 3%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var (--primary);
    @media (max-width: 800px){
        justify-content: center;

    }
`;
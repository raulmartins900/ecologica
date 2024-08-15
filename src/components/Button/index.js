import styled from "styled-components"

const Button = styled.button`
    color: var(--white);
    border-radius: 30px;
    background-color: var(--primary);
    font-weight: bold;
    font-size: 25px;
    padding: 2vh 5vw;
    text-decoration: none;
    transition: opacity .3s transform 0.3 ease-in-out;
    &:hover,
    &:focus{
        opacity: .5;
        transform: scale(1.1)

    }

    @media(max-width: 800px){
        background-color: var(--primary);
        border: 0;
        border-radius: 0;
        bottom: 0;
        color: var(--white);
        left: 0;
        position: fixed;
        right: 0;
        outline: 0;
        text-align: center;
    }
`;

export default Button
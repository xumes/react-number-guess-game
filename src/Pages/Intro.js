import React from 'react'

import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Intro = () => {
    let history = useHistory();

    const startGame = () =>{
            history.push('/game')
    }

    const logo = 'https://ofolclorebrasileiro.files.wordpress.com/2014/08/54545455.png'
    return (
        <Main>
            <img src={logo} />

            <p>Think in a number between 0 and 100 and I will discover it.</p>

            <button onClick={startGame} >Start</button>
        </Main>
    )
}

const Main = styled.div`
    min-height:96vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
        width: 180px;
        height: 80%;
        object-fit: cover;
    }
    button{
        background-color: blueviolet;
        color:whitesmoke;
        padding: 1rem 2rem;
    }
`;

export default Intro

import React, {useState} from 'react'

import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const Game = () => {
    const [guess, setGuess] = useState(50);
    const [ min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [attempt, setAttempt] = useState(1);
    const [playing, setPlaying] = useState(true);
    let history = useHistory();

    const guessLower = () => {
        setMax(guess)
        let nextGuess  = Math.ceil( ( (guess - min) / 2 ) + min )
        setGuess(nextGuess)
        setAttempt(attempt+1)
    }

    const guessHigher = () => {
        setMin(guess)
        let nextGuess = Math.ceil( ( ( max - (guess) ) / 2 ) + guess )
        setGuess(nextGuess)
        setAttempt(attempt+1)
    }

    const win = () => {
        setPlaying(false)
    }

    const playAgain = () => {
        history.push("/")
    }


    return(
        <Main>
            <Title>Number Guess</Title>

            { playing && ( <>
                <h3>I guess you though number {guess}</h3>

                <Buttons>
                    <button onClick={guessLower}>Lower</button>
                    <button onClick={win}>Gotcha</button>
                    <button onClick={guessHigher}>Higher</button>
                </Buttons>

                <h4>Attempts: {attempt}</h4>
                </>
            ) }

            { !playing && (
                <Result>
                    <p>The number you choose is {guess}. The computer guessed your number in {attempt} attempts.</p>
                    <button onClick={playAgain}>Play again</button>
                </Result>
            )}

        </Main>
    )
}

const Main = styled.div`
    min-height: 50vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-evenly;
    h2{
        color: blue;
        font-weight: lighter;
    }
`;

const Title = styled.h2`
    color: blue;
    font-weight: lighter;
`;

const Buttons = styled.div`
    display: flex;
    padding: 2rem;
    background-color: gray;
    flex-wrap: wrap;
    button {
        background-color: blueviolet;
        color: whitesmoke;
        padding: 0.5rem 0.5rem;
        margin: 10px;
    }
`;

const Result = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
    background-color: lightcoral;
    color: greenyellow;
`;

export default Game

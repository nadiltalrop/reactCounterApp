import {React, useState} from 'react'
import styled from 'styled-components';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <Container>
            <Heading>Counter App</Heading>
            <CounterElement>{count}</CounterElement>
            <ButtonContainer>
                <Button onClick={() => setCount(count+1)}>Increase</Button>
                <Button onClick={() => setCount(count-1)}>Decrease</Button>
            </ButtonContainer>
        </Container>
    )
}

export default Counter

const Container = styled.div`
    width: 100%;
    background-color: #f0f0f0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Heading = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`


const CounterElement = styled.h1`
`

const ButtonContainer = styled.div``

const Button = styled.button`
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`
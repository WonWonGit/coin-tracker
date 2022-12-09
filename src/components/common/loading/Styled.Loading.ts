import styled from "styled-components";
import { keyframes } from "styled-components";

export const Loading = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
`

const moving = keyframes`
    0%{
        transform: scale(1.4);
        background-color: white;
    }
    100%{
        transform: scale(1);
    }
`

export const LoadingRound = styled.div<{second : string} >`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: gray;
    animation: ${moving} 2s ${props => props.second} infinite;
`
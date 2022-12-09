import styled, { keyframes } from "styled-components";

export const ChartTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 20px;
    color: ${props => props.theme.textContentColor};
    padding: 20px;
    width: 60%;
    margin: 0 auto;
    align-items: center;

    button {
        background: none;
        border: none;

        span {
            font-size: 30px;
            color: ${props => props.theme.textColor};

            &:hover{
                color: ${props => props.theme.accentColor};
                transition: 0.4s linear;
                cursor: pointer;
            }
        }
    }
`

const fade = keyframes`
    0% {
        opacity: 0;
    }
    100%{
        opacity: 100;
    }
`

export const LineChartDiv = styled.div`

    animation: ${fade} 0.5s ease-in-out;

`


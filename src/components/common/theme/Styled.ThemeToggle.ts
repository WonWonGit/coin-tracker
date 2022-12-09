import styled from "styled-components"

export const CustomToggleSwitch = styled.div`
    position: fixed;
    width: 100px;
    height: 100px;
    left: 20px;
    bottom: -40px;
`

export const CustomToggleLabel = styled.label`
    position: absolute;
            width: 80%;
            height: 40px;
            background-color: inherit;
            border-radius: 50px;
            border: 1px solid ${props => props.theme.textContentColor};
            cursor: pointer;
`

export const CustomToggleInput = styled.input.attrs({ type: "checkbox" })`
    position: absolute;
    display:none;
    color: ${props => props.theme.textContentColor};
`

export const CustomSpanSlider = styled.span`
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 50px;
    transition: 0.3s;

    &:after{
        content: "";
        position: absolute;
        top: 7px;
        left: 5px;
        width: 30px;
        height: 27px;
        border-radius: 50%;
        box-shadow: inset 15px -1px 0px 0px black;
        transition: 0.3s;
    }

    &:before{
        content: "DARK";
        width: 100px;
        height: 42px;
        display: table-cell;
        vertical-align: middle;
        text-align: end;
        padding-left: 37px;
        color: ${props => props.theme.textContentColor};
        font-size: 12px;
    }

    ${CustomToggleInput}:checked + &:after{
        transform: translateX(39px);
        background-color: white;
        box-shadow: none;
        height: 30px;
        top: 5px;
    }

    ${CustomToggleInput}:checked + &:before{
        content: "LIGHT";
        padding-left: 0;
    }
    
`
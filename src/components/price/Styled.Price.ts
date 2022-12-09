import styled from "styled-components";
import { Overview, OverviewItem } from "../common/overView/Styled.OverView";

export const PriceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 11px;
    grid-row-gap: 13px;
    padding-bottom: 100px;

    div:first-child {
        grid-area: 1 / 1 / 2 / 3;
    }
`

export const PriceOverView = styled(Overview)`
    margin: 0;
    padding: 10px 15px;
`;

export const PriceChangeOverViewItem = styled.div<{ percent : number }>`
    width: 100%;
    div{
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    color: ${props => props.percent > 0 ? '#ff033b' : props.percent === 0 ? 'gray' : 'green' };
    padding: 10px 0;
    }
    div:last-child{
       padding: 0;  
       span {
        font-size: 52px;
       }  
    }
`

export const PriceAthOverViewItem = styled.div`
    display: flex;
    flex-direction: column;   
    font-size: 25px;
    color: ${props => props.theme.textContentColor};
    justify-content: space-evenly;
    
`

export const PriceSpan = styled.span`
    font-weight: 700;
    font-size: 15px;
    color: ${props => props.theme.textColor};
`
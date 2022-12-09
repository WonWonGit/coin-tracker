import { IChartTitleProps } from "./ChartType";
import * as Styled from "./Styled.Chart";

const ChartTitle = ({onClickEvent, title}:IChartTitleProps) => {
    return(
        <Styled.ChartTitle>
            <button onClick={onClickEvent}>
                <span>{'<'}</span>
            </button>
            {title}
            <button onClick={onClickEvent}>
                <span>{'>'}</span>
            </button>
        </Styled.ChartTitle>
    )
}

export default ChartTitle;

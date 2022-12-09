import { IHistoryData } from "../../api/apiTypes";

export interface IApexChartProps {
    data: IHistoryData[];
}

export interface IChartTitleProps {
    onClickEvent: React.MouseEventHandler<HTMLButtonElement>
    title: string
}

export interface ChartProps {
    coinId: string
}


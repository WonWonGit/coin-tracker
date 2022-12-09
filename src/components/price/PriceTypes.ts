import { IPriceData, IQuotesData } from "../../api/apiTypes";


export interface IPriceProps {
    coinId: string;
}

export interface IPriceGridProps {
    data: IQuotesData
}

export interface IPriceAthProps {
    date: string;
    price: string;
}

export interface IPriceItem {
    title: string;
    percent: number;
}
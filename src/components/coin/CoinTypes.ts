import { IInfoData, IPriceData } from "../../api/apiTypes";

  export interface IInfoOverviewProps {
    infoData: IInfoData,
    tickersData: IPriceData
  }

  export interface ITickerOverviewProps {
    tickersData: IPriceData
  }

  export interface ITabsProps {
    chartMatch: boolean | null;
    priceMatch: boolean | null;
    coinId: string;
  }

  export interface IDescrioptionProps {
    description: string;
  }
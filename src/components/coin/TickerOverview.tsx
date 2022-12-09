import { ITickerOverviewProps } from "./CoinTypes";
import * as Styled from "../common/overView/Styled.OverView";

const TickerOverview = ({tickersData}: ITickerOverviewProps) => {
    return (
        <Styled.Overview>
            <Styled.OverviewItem>
                <span>Total Suply</span>
                <span>{tickersData?.total_supply}</span>
            </Styled.OverviewItem>
            <Styled.OverviewItem>
                <span>Max Supply</span>
                <span>{tickersData?.max_supply}</span>
            </Styled.OverviewItem>
        </Styled.Overview>
    )
}

export default TickerOverview;
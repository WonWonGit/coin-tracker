import { IInfoOverviewProps } from "./CoinTypes";
import * as Styled from "../common/overView/Styled.OverView";

const InfoOverview = ({infoData, tickersData}:IInfoOverviewProps) => {

    return (
        <Styled.Overview>
            <Styled.OverviewItem>
              <span>Symbol</span>
              <span>${infoData?.symbol}</span>
            </Styled.OverviewItem>
            <Styled.OverviewItem>
              <span>Rank</span>
              <span>{infoData?.rank}</span>
            </Styled.OverviewItem>
            <Styled.OverviewItem>
              <span>Price</span>
              <span>${tickersData?.quotes.USD.price.toFixed(3)}</span>
            </Styled.OverviewItem>
        </Styled.Overview>
    )
}

export default InfoOverview;
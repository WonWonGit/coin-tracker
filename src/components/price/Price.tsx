import PriceItem from "./PriceItem";
import { IPriceGridProps } from "./PriceTypes";
import * as Styled from "./Styled.Price";
import { OverviewItem } from "../common/overView/Styled.OverView";
import PriceAth from "./PriceAth";

const PriceGrid = ({data}:IPriceGridProps) => {
    return(
        <Styled.PriceGrid>
            <PriceAth date={data?.ath_date} price={data?.ath_price.toFixed(2)}/>
            <PriceItem title={'1H'} percent={data?.percent_change_1h}/>
            <PriceItem title={'6H'} percent={data?.percent_change_6h}/>
            <PriceItem title={'12H'} percent={data?.percent_change_12h}/>
            <PriceItem title={'24H'} percent={data?.market_cap_change_24h}/>
            <PriceItem title={'30days'} percent={data?.percent_change_30d} />
            <PriceItem title={'1Year'} percent={data?.percent_change_1y} />
        </Styled.PriceGrid>
    )
}

export default PriceGrid;
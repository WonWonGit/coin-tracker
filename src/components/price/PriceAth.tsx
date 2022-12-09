import { Overview, OverviewItem } from "../common/overView/Styled.OverView"
import { IPriceAthProps } from "./PriceTypes";
import * as Styled from "./Styled.Price"

const PriceAth = ({date, price}:IPriceAthProps) => {
    return (
        <Styled.PriceOverView>
            <Styled.PriceAthOverViewItem>
                <Styled.PriceSpan>{new Date(date).toUTCString().slice(0,-4)}</Styled.PriceSpan>
                <Styled.PriceSpan>Ath Price</Styled.PriceSpan>
            </Styled.PriceAthOverViewItem>
            <Styled.PriceAthOverViewItem>
                {`$${price}`}
            </Styled.PriceAthOverViewItem>
        </Styled.PriceOverView>
    )
}

export default PriceAth;
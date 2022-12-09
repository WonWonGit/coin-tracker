import { Link } from "react-router-dom";
import { ITabsProps } from "./CoinTypes";
import * as Styled from "./Styled.Coin";

const Tabs = ({chartMatch, priceMatch, coinId}:ITabsProps) => {
    return(
        <Styled.Tabs>
            <Styled.Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Styled.Tab>
            <Styled.Tab isActive={chartMatch !== null}>
                <Link to={`/${coinId}/chart`}>Chart</Link>
            </Styled.Tab>
        </Styled.Tabs>
    )
}

export default Tabs;
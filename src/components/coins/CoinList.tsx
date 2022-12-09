import { Link } from "react-router-dom";
import { ICoinListProps } from "./CoinsListType";
import * as Styled from "./Styled.Coins";


const CoinList = ({datas}:ICoinListProps) => {
    return (
    <Styled.CoinsList>
        {
            datas?.slice(0,100).map((coin) => (
                <Styled.Coin key={coin.id}>
                    <Link to={{
                        pathname: `/${coin.id}`,
                        state: {name: coin.name}
                    }}>
                        <Styled.CoinImg src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
                        {coin.name} &rarr;
                    </Link>    
                </Styled.Coin>
            ))
            }
    </Styled.CoinsList>
    )
}

export default CoinList;

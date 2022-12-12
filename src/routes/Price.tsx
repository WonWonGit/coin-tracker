import { useQuery } from "react-query";
import { fetchCoinHistory, fetchCoinTickers } from "../api/api";
import { IHistoryData, IPriceData, IQuotesData } from "../api/apiTypes";
import Loading from "../components/common/loading/Loading";
import PriceGrid from "../components/price/Price";
import { IPriceProps } from "../components/price/PriceTypes";
import {Helmet} from "react-helmet";


const Price = ({coinId}:IPriceProps) => {

    const {isLoading, data} = useQuery<IPriceData>(["tickers",coinId], () => fetchCoinTickers(coinId),{
        refetchInterval: 50000,
      });
    return (
        <>
        <Helmet>
            <title>
                price
            </title>
        </Helmet>
        {
            isLoading ? <Loading /> : <PriceGrid data={data?.quotes.USD as IQuotesData} />
        }
        </>
    )
}
export default Price;
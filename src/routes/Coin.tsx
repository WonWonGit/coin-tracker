import { useQuery } from "react-query";
import {
  Route, Switch, useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { fetchCoinInfo, fetchCoinTickers } from "../api/api";
import { IInfoData, IPriceData } from "../api/apiTypes";
import Description from "../components/coin/Description";
import InfoOverview from "../components/coin/InfoOverview";
import Tabs from "../components/coin/Tabs";
import TickerOverview from "../components/coin/TickerOverview";
import Header from "../components/common/header/Header";
import Loading from "../components/common/loading/Loading";
import Chart from "./Chart";
import Price from "./Price";


const Coin = () => {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");

  const {isLoading: infoLoading, data: infoData} = useQuery<IInfoData>(["info", coinId], () => fetchCoinInfo(coinId));
  const {isLoading : tickersLoading , data: tickersData} = useQuery<IPriceData>(["tickers",coinId], () => fetchCoinTickers(coinId),{
    refetchInterval: 50000,
  });
  
  const loading = infoLoading || tickersLoading;

  return (
    <>
      <Header title={ state?.name ? state.name : loading ? "Loading..." : infoData?.name as string }/>
      {loading ? (
        <Loading />
      ) : (
        <>
          <InfoOverview infoData={infoData as IInfoData} tickersData={tickersData as IPriceData}></InfoOverview>
          <TickerOverview tickersData={tickersData as IPriceData}/>
          <Description description={infoData?.description as string} />
          <Tabs chartMatch={chartMatch as boolean | null} priceMatch={priceMatch as boolean | null} coinId={coinId}/>

          <Switch>
            <Route path={`/:coinId/price`}>
              <Price coinId={coinId}/>
            </Route>
            <Route path={`/:coinId/chart`}>
              <Chart coinId={coinId} />
            </Route>
          </Switch>
          </>
      )}
    </>
  );
}
export default Coin;

interface RouteParams {
  coinId: string;
}
interface RouteState {
  name: string;
}
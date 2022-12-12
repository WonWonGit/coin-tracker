import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api/api";
import Loading from "../components/common/loading/Loading";
import LineChart from "../components/chart/LineChart";
import CandleChart from "../components/chart/CansdleChart";
import { useState } from "react";
import ChartTitle from "../components/chart/ChartTitle";
import { ChartProps } from "../components/chart/ChartType";
import { IHistoryData } from "../api/apiTypes";
import {Helmet} from "react-helmet";


const Chart = ({coinId}:ChartProps) => {

    const {data, isLoading} = useQuery<IHistoryData[]>(["coinHistory", coinId], () => fetchCoinHistory(coinId));

    const [chart, setChart] = useState(0);


    return (
            <>
            <Helmet>
            <title>
                chart
            </title>
            </Helmet>
            {
                isLoading ? <Loading /> : 
                <>
                {
                    chart === 0 ? 
                    <>
                        <ChartTitle title={'Line Chart'} onClickEvent={()=>{chart === 0 ?  setChart(1) : setChart(0)}}/>
                        <LineChart data={data as IHistoryData[]}/> 
                    </>: 
                    <>
                        <ChartTitle  title={'Candle Chart'} onClickEvent={()=>{chart === 0 ?  setChart(1) : setChart(0)}}/>
                        <CandleChart data={data as IHistoryData[]} />
                    </>
                }
                </>
            }</>
    )
}
export default Chart;


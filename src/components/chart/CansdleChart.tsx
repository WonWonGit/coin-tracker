import ApexChart from "react-apexcharts";
import { IApexChartProps } from "./ChartType";


const CandleChart = ({data}:IApexChartProps) => {
    return (
        <>
        <ApexChart 
                    type="candlestick"
                    series={[
                        {
                        data: data?.map(price => [
                            price.time_close, 
                            price.open,
                            price.high,
                            price.low,
                            price.close,]) as number[][]
                    }
                    ]}
                    options={{
                        theme:{
                            mode:"dark"
                        },
                        chart:{
                            type: "candlestick",
                            height: 500,
                            width: 500,
                            toolbar:{
                                show: false
                            },
                            background: 'transparent',
                        },
                        xaxis:{
                            labels: {show: false},
                            axisTicks: {show: false},
                            axisBorder: {show: false},
                          
                            tooltip: {
                                enabled: false
                            }
                        },
                        yaxis: {
                            show: false,
                        },
                        
                    }}
                
                />

        </>
    )
}

export default CandleChart;
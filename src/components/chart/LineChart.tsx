import ApexChart from "react-apexcharts";
import { IApexChartProps } from "./ChartType";
import * as Styled from "./Styled.Chart";


const LineChart = ({data}:IApexChartProps) => {
    return(
        <Styled.LineChartDiv>
        <ApexChart
                    type="line"
                    series={[
                        {
                            name: "Price",
                            data: data?.map((price) => parseFloat(price.close)) as number[]
                        }
                    ]}
                    options={{
                        theme:{
                            mode:"dark"
                        },
                        chart:{
                            height: 800,
                            width: 800,
                            toolbar:{
                                show: false
                            },
                            animations: {
                                enabled: false,
                            },
                            background: 'transparent'
                        },
                        stroke:{
                            curve: "smooth",
                            width: 3,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis:{
                            labels: {show: false},
                            axisTicks: {show: false},
                            axisBorder: {show: false},
                            categories: data?.map(price => new Date(price?.time_close*1000).toISOString().split('T')[0])
                        },
                        tooltip: {
                            y: {
                                formatter: (value) =>  `$${value}`
                            },
                        },
                        
                    }}
                 />
        </Styled.LineChartDiv>
    )
}

export default LineChart;
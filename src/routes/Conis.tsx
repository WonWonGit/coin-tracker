import { useQuery } from "react-query";
import { fetchConis } from "../api/api";
import { ICoinList } from "../api/apiTypes";
import CoinList from "../components/coins/CoinList";
import Header from "../components/common/header/Header";
import Loading from "../components/common/loading/Loading";

const Coins = () => {

    const { isLoading, data } = useQuery<ICoinList[]>("allCoins", fetchConis);

    return (
        <>
        <Header title="Cryptocurrencies"></Header>
            {
                isLoading ? <Loading /> : 
                <CoinList datas={data?.slice(0,100) as ICoinList[]} />
            }
            
        </>
    )
}

export default Coins;



// const [coins, setCoins] = useState<Array<CoinInterface>>([]);
//     const [loading, setLoading] = useState(true);
    
//     useEffect(()=>{
//        (async()=>{
//         const response = await fetch("https://api.coinpaprika.com/v1/coins");
//         const json = await response.json();
//         setCoins(json.slice(0,100));
//         setLoading(false);
//        })();
//     },[])


import {BrowserRouter, Switch, Route} from "react-router-dom";
import Coins from "./routes/Conis";
import Coin from "./routes/Coin";

const Router = () => {
    return(
        <BrowserRouter basename="https://wonwongit.github.io/coin-tracker/">
            <Switch>
                <Route path="/:coinId">
                    <Coin></Coin>
                </Route>    
                <Route path="/">
                    <Coins></Coins>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
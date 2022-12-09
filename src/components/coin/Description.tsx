import { IDescrioptionProps } from "./CoinTypes";
import * as Styled from "./Styled.Coin";
import { Overview } from "../common/overView/Styled.OverView";

const Description = ({description}:IDescrioptionProps) => {
    return (
        <Overview>
            <Styled.Description>
                {description}
            </Styled.Description>
        </Overview>
    )
}  

export default Description;
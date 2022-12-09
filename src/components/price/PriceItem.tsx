import { ReactNode } from "react";
import { IPriceItem } from "./PriceTypes";
import * as Styled from "./Styled.Price";

const PriceItem = ({title, percent}:IPriceItem) => {
    return (
       <Styled.PriceOverView>
            <Styled.PriceChangeOverViewItem percent={percent}>
                <Styled.PriceSpan>{title}</Styled.PriceSpan>
                <div>
                    <div>{`${percent}%`}</div>
                    <div>
                        {percent > 0 ? 
                            <span className="material-symbols-outlined">trending_up</span>
                            :
                            percent === 0 ?
                            <span className="material-symbols-outlined">east</span>
                            :
                            <span className="material-symbols-outlined">trending_down</span>
                        }
                    </div>
                </div>
            </Styled.PriceChangeOverViewItem>
       </Styled.PriceOverView>
    )
}

export default PriceItem;


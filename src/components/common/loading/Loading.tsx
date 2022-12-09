import * as Styled from "./Styled.Loading";

const Loading = () => {
    return(
        <Styled.Loading>
            {
                [...Array(3)].map((num, index) => 
                    <Styled.LoadingRound second={`${(index+1)*0.2}s`} key={index}/>)
            }
        </Styled.Loading>
    )
}

export default Loading;
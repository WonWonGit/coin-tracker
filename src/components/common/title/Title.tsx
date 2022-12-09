import * as Styled from "./Styled.title";

const Title = ({title}:ITitleProps) => {
    return <Styled.Title>{title}</Styled.Title>
}

export default Title;

interface ITitleProps {
    title: string
}
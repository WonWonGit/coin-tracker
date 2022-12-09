import { ReactNode } from "react";
import * as Styled from "./Styled.Container";

const Container = ({ children}:IContainerProps) => {
    return(
        <Styled.Container>{children}</Styled.Container>
    )
}

export default Container;

interface IContainerProps {
    children: ReactNode;
}
import { Link, Router, useLocation } from "react-router-dom";
import * as Styled from "./Styled.Header";

const Header = ({title}:IHeaderProps) => {

    const {pathname} = useLocation();

    return (
     <Styled.Header>
        <Styled.Title>{
            pathname !== '/' ? 
            <>
            <span>
                <Link to={'/'}>&larr;</Link>
            </span> 
            <div>
            {title}
            </div>
            </>
            :
            title
        }</Styled.Title>
     </Styled.Header>
    );
}

export default Header;

interface IHeaderProps {
    title: string
}
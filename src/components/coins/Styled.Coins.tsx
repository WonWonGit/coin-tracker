import styled from "styled-components"

export const CoinsList = styled.ul``;

export const Coin = styled.li`
background-color: ${props => props.theme.overviewColor};
color: ${(props) => props.theme.textColor};
border-radius: 15px;
margin-bottom: 10px;
a {
  display: flex;
  align-items: center;
  padding: 20px;
  transition: color 0.2s ease-in;
}
&:hover {
  a {  
      color: ${props => props.theme.accentColor};
  }
}
`;

export const CoinImg = styled.img`
        width: 25px;
        height: 25px;
        margin-right: 10px;
`

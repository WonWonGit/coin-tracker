import styled from "styled-components";

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.theme.accentColor};

  span{
    position: absolute;
    left: 0;
  }
`;
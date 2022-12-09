import styled from "styled-components";

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.overviewColor};
  padding: 20px 40px;
  border-radius: 10px;
  margin: 20px 0;
`;

export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 10px;
    font-weight: 700;
  }
  span:last-child{
    color: ${props => props.theme.textContentColor};
    font-size: 14px;
  }
`;
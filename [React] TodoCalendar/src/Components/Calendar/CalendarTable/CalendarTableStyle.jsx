import styled from "styled-components";

export const boxStyles = `
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const OuterBox = styled.div`
  background-color: white;
  padding: 100px;
  ${boxStyles};
`;

export const Button = styled.button`
  width: 150px;
  font-size: 25px;
`;

export const GridItem = styled.div`
  /* add your styling properties here */
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 40px 30px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MonthNavigator = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

export const CurrentDate = styled.div`
  margin: 10px 0;
  font-weight: bold;
  font-size: 60px;
`;

export const TableHeader = styled.th`
  height: 50px;
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 40px;
  ${boxStyles};
`;


export const DayWrapper = styled.td`
  ${boxStyles};
  position: relative; /* add position relative */
`;

export const OneDay = styled.div`
    display: flex;
    flex-direction: column;
    background-color: purple;
    padding: 10px;
`

export const DayTop = styled.div`
    padding: 0 10px;
    background-color: green;
    font-weight: bold;
    font-size: 35px;
`;

export const DayBottom = styled.div`
    height: 80%;
    background-color: blue;
    align-self: flex-start;
`;

export const Row = styled.tr`


`;

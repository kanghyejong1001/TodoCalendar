import styled from "styled-components";

export const boxStyles = `
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const WholeCalendar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0.7);
  transform-origin: top;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 40px 30px;
  margin-bottom: 30px;
  width: 90%;
  ${boxStyles};
  
`;

const Button = styled.button`
  font-size: 2.0em;
  font-weight: bold;
  margin: 0 10px;  
`;

const MonthNavigator = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CurrentDate = styled.div`
  padding: 25px;
  font-weight: bold;
  font-size: 4.0em;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const WeekdayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 4.0em;
  font-weight: bold;
  padding: 5px;
  ${boxStyles};
`;

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 10px;
  ${boxStyles};
`;

const TopDiv = styled.div`
  font-size: 2.5em;
  padding: 5px 10px;
`;

const BottomDiv = styled.div`
    //
`;



export {
  WholeCalendar,
  HeaderContainer,
  Button,
  MonthNavigator,
  CurrentDate,
  ButtonsDiv,
  CalendarWrapper,
  WeekdayWrapper,
  DayWrapper,
  TopDiv,
  BottomDiv
};

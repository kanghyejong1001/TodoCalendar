import styled from "styled-components";

export const boxStyles = `
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const WholeCalendar = styled.div`
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  margin-bottom: 30px;
  
  ${boxStyles};
  
`;

const Button = styled.button`
    width: 3em;
    height: 3em;

  &.LeftButton:after {
    content: '<'
  }

  &.RightButton:after {
    content: '>'
  }
`;

const CurrentMY = styled.div`
  padding: 25px;
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
  padding: 5px 10px;
`;

const BottomDiv = styled.div`
    //
`;



export {
  WholeCalendar,
  HeaderContainer,
  Button,
  CurrentMY,
  ButtonsDiv,
  CalendarWrapper,
  WeekdayWrapper,
  DayWrapper,
  TopDiv,
  BottomDiv
};

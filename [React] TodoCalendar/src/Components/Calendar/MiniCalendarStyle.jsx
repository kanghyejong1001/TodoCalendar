import styled from "styled-components";

export const boxStyles = `
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const WholeCalendar = styled.div`
    padding: 32px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 25px;
  ${boxStyles};
  
`;

const Button = styled.button`
  font-weight: bold;


  &.LeftButton:after {
    content: '<';
  }

  &.RightButton:after {
    content: '>';
  }


`;


const CurrentDate = styled.div`
  padding: 0 25px;
  font-weight: bold;
`;

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const WeekdayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  padding: 5px 10px;
`;

const BottomDiv = styled.div`
    //
`;



export {
  WholeCalendar,
  HeaderContainer,
  Button,
  CurrentDate,
  CalendarWrapper,
  WeekdayWrapper,
  DayWrapper,
  TopDiv,
  BottomDiv
};

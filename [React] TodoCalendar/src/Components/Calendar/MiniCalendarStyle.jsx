import styled from "styled-components";

export const boxStyles = `
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const WholeCalendar = styled.div`
    padding: 32px;
    background: white;
    margin: 0 10px;
    ${boxStyles};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  margin-bottom: 25px;
  
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const ViewChangeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  width: 40%;
`;

const Button = styled.button`
  font-weight: bold;
  font-size: 1em;
  background: none;
  padding: 0;

  &:hover {
    background: none;
    color: grey;
  }

  &:active {
    background: none;
    color: white;
  }


  &.LeftButton:after {
    content: '<';
  }

  &.RightButton:after {
    content: '>';
  }

  &.Plus {
    margin-right: 10px;
  }


`;


const CurrentDate = styled.div`
  padding: 0 25px;
  font-weight: bold;
  font-size: 1.2em;
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
`;

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 10px;
  text-align: center;
  /*${boxStyles};*/
`;


const TopDiv = styled.div`
  color: ${props => {
    
    return props.isWeekend === 0 ? 'blue' : 
           props.isWeekend === 6 ? 'red' : 'black';
  }};
`;





const BottomDiv = styled.div`
    //
`;

const TodayMark = styled.div`
  display: inline;
  padding: 5px;
  border-radius: 50%;
  background: ${props => props.isToday ? 'red' : 'transparent'};
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
  BottomDiv,  
  ViewChangeDiv,
  HeaderTop,
  HeaderBottom,
  TodayMark
};

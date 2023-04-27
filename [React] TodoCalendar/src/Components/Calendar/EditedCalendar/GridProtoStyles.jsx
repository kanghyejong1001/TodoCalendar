import styled from 'styled-components';

export const boxStyles = `
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  ${boxStyles};
`;

const HeaderCenter = styled.div`
    display: flex;
`;


const YearMonth = styled.div`
`;

const NavButton = styled.button`
border-radius: 20px;
padding: 0em 1.2em;
font-size: 0.5em;
font-weight: bold;
cursor: pointer;
`;

const NowButton = styled.button`
    background: red;
    margine-left: 0;
`;

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 50px repeat(6, 1fr);
  ${boxStyles};
`;

const WeekdayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;


const DayWrapper = styled.div`
  display: flex;
  justify-content: center;
  ${boxStyles};
`;

const TopDiv = styled.div`
background: blue;
height: 20%;
`;

const BottomDiv = styled.div`
background: pink;
height: 80%;
`;



export {
    CalendarWrapper,
    WeekdayWrapper,
    DayWrapper,
    TopDiv,
    BottomDiv,
    NavButton,
    CalendarHeader,
    HeaderCenter,
    YearMonth,
    NowButton
}
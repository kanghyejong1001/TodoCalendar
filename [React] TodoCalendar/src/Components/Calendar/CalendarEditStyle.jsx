import styled from "styled-components";



export const boxStyles = `
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding: 40px 30px;
margin-bottom: 20px;
width: 90%;
${boxStyles};
`;

const Button = styled.button`
width: 150px;
font-size: 1.0em;
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
grid-template-rows: 50px repeat(6, 1fr);
width: 100%;
${boxStyles};
`;

const WeekdayWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 2.0em;
font-weight: bold;
${boxStyles};
`;


const DayWrapper = styled.div`
  ${boxStyles};
  
`;

const TopDiv = styled.div`
font-size: 2.0em;
font-weight: bold;
padding 10px;
background: red;
`;

const BottomDiv = styled.div`
`;

export { 
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

import styled from "@emotion/styled";


const Body = styled.div`
    position: relative; 
    width: 100vw;
    height: 100vh;
    border: black solid 1px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
`;

const TimeDiv = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    background: red;
`;

const LogoutDiv = styled.div`
    position: relative;
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    background: red;
`;

const LogoutButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background-color: #E2EAFF;
    border-radius: 30px;
    border: transparent;
    padding: 5px;
    font-size: 1px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        color: #fff;
        background-color: #82A4FF;
      }
      
    &:active {
        background-color: grey;
      }
`;


const TodoDiv = styled.div`
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    background: green;
`;

const NudgeDiv = styled.div`
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    background: pink;
`;

const BookmarkDiv = styled.div`
    grid-row: 2 / 4;
    grid-column: 1 / 2;
    background: purple;
`;

const CalendarDiv = styled.div`
    grid-row: 2 / 4;
    grid-column: 3 / 4;
    background: yellow;
`;

export {
    Body,
    CalendarDiv,
    LogoutDiv,
    LogoutButton,
    TodoDiv,
    TimeDiv,
    NudgeDiv,
    BookmarkDiv
}
import styled from "@emotion/styled";
import { css } from 'styled-components';

const Body = styled.div`
    position: relative; 
    width: 100vw;
    height: 100vh;
    border: black solid 1px;
    display: ${props => (props.isLogin ? "grid" : "flex")};
    
    ${props => props.isLogin ? 
    css`
    grid-template-columns: 2fr 3fr 2fr;
    grid-template-rows: 1fr 3fr 1fr;
    ` :
    css`
    justify-content: center;
    align-items: center;
    `}
    
`;

const TimeDiv = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    background: white;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoutDiv = styled.div`
    position: relative;
    grid-row: 1 / 2;
    grid-column: 3 / 4;
`;

const LogoutButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    border-radius: 30px;
    border: transparent;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    margin: 20px 20px 0 0;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    &:hover {
        color: #fff;
        background-color: grey;
      }
      
    &:active {
        background-color: black;
      }
`;


const TodoDiv = styled.div`
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    background: white;
`;

const DdayDiv = styled.div`
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    background: white;
`;

const BookmarkDiv = styled.div`
    grid-row: 2 / 4;
    grid-column: 1 / 2;
    background: white;
`;

const CalendarDiv = styled.div`
    grid-row: 2 / 4;
    grid-column: 3 / 4;
`;

export {
    Body,
    CalendarDiv,
    LogoutDiv,
    LogoutButton,
    TodoDiv,
    TimeDiv,
    DdayDiv,
    BookmarkDiv
}
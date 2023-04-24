import styled from "styled-components";



// Calendar 전체 감싸는 div

export const OuterBox = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 15px;
`;

// 달 변환 버튼 및 묶음

export const Button = styled.button`
    width: 110px;
    background-color: blue;    
    background-color: #E2EAFF;
    font-weight: bold;
    cursor: pointer;
    transform: none;

    &:hover {
        background-color: #82A4FF;
        color: white;
        border: none;
    }

    &:active {
        background-color: #222;
        border: none;
    }

    &:disabled {
        background-color: #888;
    }

`
// logout, 달 전환 버튼 묶음, 현재 날짜 Div 묶음
export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 30px 30px;
`;

// MonthNavigator + Logout
export const ButtonsDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

// 달 전환 버튼 묶음
export const MonthNavigator = styled.div`
    display: flex;    
    justify-content: space-between;
    width: 400px;
    display: flex;
`
// 현재 날짜 DIV
export const CurrentDate = styled.div`
    width: 100%;
    margin: 10px 0;

    font-weight: bold;
    font-size: 40px;
`

export const TableHeader = styled.th`
    height: 50px;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    box-shadow: 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    &.month-header {
        color: black;
    }
`;


// 각 일의 칸
export const Cells = styled.td`
    height: 200px;
    width: 200px;
    color: black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 15px;
`;

// 해당 일의 숫자
export const DayTop = styled.div`
    background-color: green;
    font-weight: bold;
    font-size: 20px;
    
`;

//해당 일의 내용
export const DayBottom = styled.div`
    height: 80%;
    background-color: blue;
`;

export const Row = styled.tr`
`
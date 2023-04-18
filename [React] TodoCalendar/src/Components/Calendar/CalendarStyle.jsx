import styled from "styled-components";

export const TableHeader = styled.th`
    height: 30px;
    border: black solid 1px;
    text-align: center;

    &.month-header {
        color: pink;
    }
`;

export const HeaderContainer = styled.div`
    background-color: grey;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
`;

export const Cells = styled.td`
    height: 100px;
    width: 200px;
    color: black;
    border: black solid 1px;
    // 각 켈린더의 넘처흘림 방지
    overflow: hidden;
`;

export const DayTop = styled.div`
    height: 30%;
    background-color: green;
`;

export const DayBottom = styled.div`
    height: 70%;
    background-color: blue;
`;
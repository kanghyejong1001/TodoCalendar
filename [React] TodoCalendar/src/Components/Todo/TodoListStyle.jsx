import styled from "styled-components";

export const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid $dee2e6;
    width: 80%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    display: inline-block;
`

export const Button = styled.button`
    width: 20%;
    height: 50px;
    background:#63e6be;
    display: inline-block;
`

export const TodoListDiv = styled.div`
    flex: 1;
    padding: 20px, 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    background: gray;
`
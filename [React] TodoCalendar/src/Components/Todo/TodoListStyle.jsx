import styled from "styled-components";

export const Input = styled.input`
    border-radius: 4px;
    border: 1px solid $dee2e6;
    outline: none;
    font-size: 18px;
    display: block;
    padding: 0px 30px;
    border-radius: 20px;
    box-sizing: border-box;
`

export const Button = styled.button`
    width: 20%;

`
export const XButton = styled.button`
    background: none;
    &:hover {
        background: none;
        color: lightgray;
        cursor: pointer;
    }
`

export const TodoListDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: gray;
    margin-bottom: 1.2em;
`

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    background-color: blue;
    padding: 0 10px;
`

import styled from "styled-components";

export const Input = styled.input`
    width: 200px;
    border-radius: 4px;
    border: 1px solid $dee2e6;
    outline: none;
    font-size: 1.2em;
    font-weight: bold;
    display: block;
    padding-left: 20px;
    border-radius: 50px;
    box-sizing: border-box;
`

export const Button = styled.button`
    display: inline-block;
    font-weight: bold;

`
export const XButton = styled.button`
    background: none;
    font-weight: bold;
    &:hover {
        background: none;
        color: lightgray;
        cursor: pointer;
    }
`

export const TextBox = styled.input`
    width: 65%;
    padding: em;
    margin: 0 0.2em;
    font-size: 1.2em;
    font-weight: bold;
`
export const TodoRow = styled.div`
    display: block;
    padding-left: 0.2em;
    
`

export const CheckBox = styled.input`

    height: 1.3em;
    width: 1.3em;

    &:hover {
    }
`

export const TodoList = styled.div`
    padding: 10px 0;
`



export const TodoListDiv = styled.div`
    flex-direction: column;
    margin-bottom: 1em;
`

export const Form = styled.form`
    width: 300px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 5px;
`

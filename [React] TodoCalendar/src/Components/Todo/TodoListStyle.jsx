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
    &:.LogButton {
        position: relative;
        off-left: 50%;
        
    }

`
export const XButton = styled.button`
    background: white;
    color: white;
    font-weight: bold;
    padding: 2px;
    &:hover {
        background: none;
        color: black;
        cursor: pointer;
    }
`

export const TextBox = styled.input`
    text-align: center;
    padding: 0.1em;
    font-size: 1.2em;
    font-weight: bold;
    border: transparent;
    box-sizing: border-box;
`
export const TodoRow = styled.div`
    display: flex;
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
    margin-bottom: 1em;
`

export const Form = styled.form`
    width: 300px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 5px;
`

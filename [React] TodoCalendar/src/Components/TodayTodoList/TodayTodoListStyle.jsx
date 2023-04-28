import styled from "styled-components";

export const boxStyles = `
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const TodoListTitle = styled.div`
  padding: 10px 0;
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
  

`;

const Input = styled.input`    
    color: black;
    font-size: 0.5em;
    font-weight: bold;
    width: 200px;
    padding-left: 10px;
    border-radius: 20px;
    border: 
    background-color: #FAFAFA;
    box-sizing: border-box;
    ::placeholder {
        color: #9F9F9F;
        font-weight: bold;
    }
`;

const TodoListDiv = styled.div`
    diplay: flex;
    padding: 10px;
    margin: 10px;
    ${boxStyles};
`

export {
    TodoListTitle,
    Input,
    TodoListDiv
};
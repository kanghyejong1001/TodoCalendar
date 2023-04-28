import styled from "styled-components";

export const boxStyles = `
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;


const BookMarkTitle = styled.div`
  padding: 10px 0;
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
  

`;

const BookMarkChunk = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  padding: 10px;
  ${boxStyles};
  

`;


const BookMarkTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  

`;

const BookMarkBottom = styled.div`
  

`;


const InputForm = styled.form`
  
  display: flex;
  justify-content: space-between;

`;




const Input = styled.input`    
    color: black;
    font-size: 0.5em;
    font-weight: bold;
    width: 100px;
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

const XButton = styled.button`
background: none;
font-size: 0.5em;
color: white;
font-weight: bold;
padding: 5px;
margin-left: 2px;
&:hover {
    background: none;
    color: black;
    cursor: pointer;
}
&:active {
  color: grey;
}
`

const LinkButton = styled.button`
background: none;
font-size: 0.5em;
color: black;
font-weight: bold;
font-size: 1em;
padding: 0 10px;
&:hover {
    background: none;
    color: grey;
    cursor: pointer;
}
&:active {
  color: blue;
}
`

export {
  BookMarkTitle,
  InputForm,
  BookMarkChunk,
  XButton,
  LinkButton,
  Input,
  BookMarkTop,
  BookMarkBottom
};
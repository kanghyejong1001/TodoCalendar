import styled from "@emotion/styled";

const Button = styled.button`
  display: block;
  width: 100%;
  line-height: 32px;
  padding: 8px;
  color: white;
  border: none;
  outline: none;
  box-sizing: border-box;
  background-color: black;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }

  &:active {
    background-color: #222;
  }

  &:disabled {
    background-color: #888;
  }
`;

export default Button;

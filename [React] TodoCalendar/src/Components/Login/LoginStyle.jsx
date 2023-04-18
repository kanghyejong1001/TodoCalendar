import styled from "@emotion/styled";

export const Title = styled.h1`
    font-size: 24px;
    text-align: center;
`;

export const Input = styled.input`
    color: black;
    display: block;
    padding: 4px 6px;
    width: 100%;
    height: 24px;
    border-radius: 14px;
    border: 2px solid #333;
    background-color: white;
    box-sizing: border-box;
`;

export const Button = styled.button`
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

export const CardForm = styled.form`
    padding: 16px;
    width: 400px;
    background-color: #444;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ErrorText = styled.span`
    font-size: 12px;
    color: red;
`;

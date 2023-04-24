import styled from "@emotion/styled";

export const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    color: black;
    margin-bottom: 35px;
    margin: 40px 0px;
`;

export const Input = styled.input`
    color: #black;
    display: block;
    margin: 0 100px 0;
    padding: 20px 30px;
    width: 80%;
    height: 24px;
    border-radius: 20px;
    background-color: #FAFAFA;
    box-sizing: border-box;
    ::placeholder {
        color: #9F9F9F;
        font-weight: bold;
    }
`;

export const Button = styled.button`
    display: block;
    width: 120px;
    line-height: 20px;
    padding: 15px;
    color: black;
    border-radius: 30px;
    outline: none;
    box-sizing: border-box;
    background-color: #E2EAFF;
    font-weight: bold;
    cursor: pointer;
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
`;

export const ButtonContainer = styled.div`
    width: 280px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0px 40px;
`;



export const CardForm = styled.form`
    padding: 16px;
    height: 800;
    width: 400px;
    background-color: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ErrorText = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: red;
    margin-top: 8px;
`;

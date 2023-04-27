import styled from "@emotion/styled";

export const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    color: black;
    margin-bottom: 35px;
    margin: 40px 0px;
`;

export const ButtonContainer = styled.div`
    width: 280px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0px 40px;
`;


export const CardForm = styled.form`
    padding: 16px;
    height: 500px;
    width: 600px;
    background-color: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ErrorText = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: red;
    margin-top: 8px;
`;

export const Input = styled.input`    
    color: black;
    font-size: 1em;
    font-weight: bold;
    display: block;
    margin: 0 100px 0;
    padding: 20px 0px 20px 20px;
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

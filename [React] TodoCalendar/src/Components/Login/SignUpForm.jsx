import { useForm } from "react-hook-form";
import { Title, ErrorText, CardForm, ButtonContainer, Input } from "./LoginStyle";

const SignUpForm = ({ onSubmit, setCheckId }) => {
const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();


// 게졍 생성 시 아이디 & 비밀번호 입력 후 계정 생성 누르고 뒤로가기를 누르면 전환 안됨


return (
    <CardForm onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Title>계정 생성</Title>
        <Input 
            type="text" 
            name="NewID" 
            placeholder="새 아이디" 
            {...register("NewID", { required: "새 아이디를 입력하세요." })}
            autoComplete="off"
        />
        {errors.NewID && <ErrorText>{errors.NewID.message}</ErrorText>}
        <Input 
            type="password" 
            name="NewPassword" 
            placeholder="새 비밀번호" 
            {...register("NewPassword", { required: "새 비밀번호를 입력하세요." })}
            style={{ marginTop: 8 }}
            autoComplete="off"
        />
        {errors.NewPassword && <ErrorText>{errors.NewPassword.message}</ErrorText>}
        <ButtonContainer>
        <button 
            type="submit" 
            disabled={isSubmitting} 
            style={{ marginTop: 16 }}
        >
            계정 생성
        </button>
        <button 
            type="button" 
            disabled={isSubmitting} 
            style={{ marginTop: 16 }}
            onClick={() => setCheckId(true)}
        >
            뒤로가기
        </button>
        </ButtonContainer>        
    </CardForm>
    
);
};

export default SignUpForm;

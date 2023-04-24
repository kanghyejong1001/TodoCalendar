import { useForm } from "react-hook-form";
import { Title, Input, Button, ErrorText, CardForm, ButtonContainer} from "./LoginStyle";

const SignUpForm = ({ onSubmit, setCheckId }) => {
const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

return (
    <CardForm onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Title>계정 생성</Title>
        <Input 
            type="text" 
            name="NewID" 
            placeholder="새 아이디" 
            {...register("NewID", { required: "새 아이디를 입력하세요." })}
        />
        {errors.NewID && <ErrorText>{errors.NewID.message}</ErrorText>}
        <Input 
            type="password" 
            name="NewPassword" 
            placeholder="새 비밀번호" 
            {...register("NewPassword", { required: "새 비밀번호를 입력하세요." })}
            style={{ marginTop: 8 }}
        />
        {errors.NewPassword && <ErrorText>{errors.NewPassword.message}</ErrorText>}
        <ButtonContainer>
        <Button 
            type="submit" 
            disabled={isSubmitting} 
            style={{ marginTop: 16 }}
        >
            계정 생성
        </Button>
        <Button 
            type="button" 
            disabled={isSubmitting} 
            style={{ marginTop: 16 }}
            onClick={() => setCheckId(true)}
        >
            뒤로가기
        </Button>
        </ButtonContainer>        
    </CardForm>
);
};

export default SignUpForm;

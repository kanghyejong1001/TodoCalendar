import { useForm } from "react-hook-form";
import { Title, Input, Button, ErrorText, CardForm, ButtonContainer} from "./LoginStyle";






const LoginForm = ({ onSubmit, setIsLogin, setCheckId }) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    return (
        // <CardForm onSubmit={handleSubmit(onSubmit)}>
        <CardForm onSubmit={handleSubmit((data) => {
            console.log(data)
            setIsLogin(true)
        })}>
            <Title>로그인</Title>
            <Input 
                type="text" 
                name="id" 
                placeholder="아이디" 
                {...register("id", { required: "ID를 입력하세요" })}
            />
            {errors.id && <ErrorText>{errors.id.message}</ErrorText>}
            <Input 
                type="password" 
                name="password" 
                placeholder="비밀번호" 
                {...register("password", { required: "비밀번호를 입력하세요" })}
                style={{ marginTop: 8 }}
            />
            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
            <ButtonContainer>
            <Button type="submit" disabled={isSubmitting} style={{ marginTop: 16 }}>
                로그인
            </Button>
            <Button type="button" onClick={() => setCheckId(false)} disabled={isSubmitting} style={{ marginTop: 16 }}>
                회원 가입
            </Button>
            </ButtonContainer>
            
        </CardForm>
    );
};

export default LoginForm;

import { useForm } from "react-hook-form";
import { Title, Input, Button, ErrorText, CardForm} from "./LoginStyle";

const LoginForm = ({ onSubmit, setIsLogin, setCheckId }) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    return (
        // <CardForm onSubmit={handleSubmit(onSubmit)}>
        <CardForm onSubmit={handleSubmit((data) => {
            console.log(data)
            setIsLogin(true)
        })}>
            <Title>Login</Title>
            <Input 
                type="text" 
                name="id" 
                placeholder="ID" 
                {...register("id", { required: "ID를 입력하세요" })}
            />
            {errors.id && <ErrorText>{errors.id.message}</ErrorText>}
            <Input 
                type="password" 
                name="password" 
                placeholder="Password" 
                {...register("password", { required: "비밀번호를 입력하세요" })}
                style={{ marginTop: 8 }}
            />
            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
            <Button type="submit" disabled={isSubmitting} style={{ marginTop: 16 }}>
                Login
            </Button>
            <Button type="button" onClick={() => setCheckId(false)} disabled={isSubmitting} style={{ marginTop: 16 }}>
                Create Account
            </Button>
        </CardForm>
    );
};

export default LoginForm;

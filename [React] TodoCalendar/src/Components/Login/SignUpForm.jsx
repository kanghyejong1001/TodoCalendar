import { useForm } from "react-hook-form";
import { Title, Input, Button, ErrorText, CardForm} from "./LoginStyle";

const SignUpForm = ({ onSubmit, setCheckId }) => {
const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

return (
    <CardForm onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Title>Sign Up</Title>
        <Input 
            type="text" 
            name="NewID" 
            placeholder="New ID" 
            {...register("NewID", { required: "새 아이디를 입력하세요." })}
        />
        {errors.NewID && <ErrorText>{errors.NewID.message}</ErrorText>}
        <Input 
            type="password" 
            name="NewPassword" 
            placeholder="New Password" 
            {...register("NewPassword", { required: "새 비밀번호를 입력하세요." })}
            style={{ marginTop: 8 }}
        />
        {errors.NewPassword && <ErrorText>{errors.NewPassword.message}</ErrorText>}
        <Button 
            type="submit" 
            disabled={isSubmitting} 
            style={{ marginTop: 16 }}
        >
            Sign Up
        </Button>
        <Button 
            type="button" 
            disabled={isSubmitting} 
            style={{ marginTop: 16 }}
            onClick={() => setCheckId(true)}
        >
            back
        </Button>
    </CardForm>
);
};

export default SignUpForm;

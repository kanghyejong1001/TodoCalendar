import { useForm } from "react-hook-form";
import CardForm from "./CardForm";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";
import ErrorText from "./ErrorText";

const SignUpForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      NewID: '',
      NewPassword: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
    criteriaMode: 'all',
    resolver: undefined,
    context: undefined,
    submitFocusError: true,
  });

  return (
    <CardForm onSubmit={handleSubmit(onSubmit)}>
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
      >
        Create Account
      </Button>
    </CardForm>
  );
};

export default SignUpForm;

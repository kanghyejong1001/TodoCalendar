// import { useForm } from "react-hook-form";
// import Input from "./Input";
// import Button from "./Button";
// import ErrorText from "./ErrorText";
// import CardForm from "./CardForm";
// import Title from "./Title";

// const LoginForm = ({ onSubmit }) => {
//   const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
//     defaultValues: {
//       id: '',
//       password: '',
//     },
//     mode: 'onBlur',
//     reValidateMode: 'onChange',
//     shouldFocusError: true,
//     shouldUnregister: true,
//     criteriaMode: 'all',
//     resolver: undefined,
//     context: undefined,
//     submitFocusError: true,
//   });

//   return (
//     <CardForm onSubmit={handleSubmit(onSubmit)}>
//       <Title>Login</Title>
//       <Input 
//         type="text" 
//         name="id" 
//         placeholder="ID" 
//         {...register("id", { required: "ID를 입력하세요" })}
//       />
//       {errors.id && <ErrorText>{errors.id.message}</ErrorText>}
//       <Input 
//         type="password" 
//         name="password" 
//         placeholder="Password" 
//         {...register("password", { required: "비밀번호를 입력하세요" })}
//         style={{ marginTop: 8 }}
//       />
//       {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
//       <Button type="submit" disabled={isSubmitting} style={{ marginTop: 16 }}>
//         Login
//       </Button>
//       <Button type="button" disabled={isSubmitting} style={{ marginTop: 16 }}>
//         Create Account
//       </Button>
//     </CardForm>
//   );
// };

// export default LoginForm;

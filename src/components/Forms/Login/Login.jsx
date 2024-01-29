import { useForm } from "react-hook-form";
import { StyledForm } from "./Login.styled";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>
      <div>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</div>
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("Password", { required: true })}
      />

      <input type="submit" />
    </StyledForm>
  );
};

export default Login;

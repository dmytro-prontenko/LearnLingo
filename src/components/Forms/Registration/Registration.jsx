import { useForm } from "react-hook-form";
import { StyledForm } from "./Registration.styled";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <h3>Registration</h3>
      <div>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</div>
      <input
        type="text"
        placeholder="Name"
        {...register("Name", { required: true })}
      />
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

export default Registration;

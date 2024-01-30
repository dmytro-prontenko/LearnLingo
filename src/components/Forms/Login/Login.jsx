import { useForm } from "react-hook-form";
import {
  StyledCloseBtn,
  StyledForm,
  StyledFormButton,
  StyledFormText,
  StyledFormTitle,
  StyledInput,
} from "./Login.styled";
import sprite from "../../../../public/sprite.svg";
import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";

const Login = () => {
  const {setModalStatus} =
  useContext(ModalContext);

  const closeModal = () => {
    setModalStatus(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledCloseBtn onClick={closeModal}>
        <svg width={"32px"} height={"32px"}>
          <use xlinkHref={sprite + "#icon-close"}/>
        </svg>
      </StyledCloseBtn>
      <StyledFormTitle>Login</StyledFormTitle>
      <StyledFormText>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </StyledFormText>
      <StyledInput
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <StyledInput
        type="password"
        placeholder="Password"
        {...register("Password", { required: true })}
      />

      <StyledFormButton type="submit">Log in</StyledFormButton>
    </StyledForm>
  );
};

export default Login;

import { useForm } from "react-hook-form";
import {
  StyledCloseBtn,
  StyledForm,
  StyledFormButton,
  StyledFormText,
  StyledFormTitle,
  StyledInput,
} from "./Registration.styled";
import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import sprite from "../../../assets/sprite.svg";


const Registration = () => {
  const { setModalStatus } = useContext(ModalContext);

  const closeModal = () => {
    setModalStatus(false);
  };

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
          <use xlinkHref={sprite + "#close"}></use>
        </svg>
      </StyledCloseBtn>
      <StyledFormTitle>Registration</StyledFormTitle>
      <StyledFormText>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </StyledFormText>
      <StyledInput
        type="text"
        placeholder="Name"
        {...register("Name", { required: true })}
      />
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

      <StyledFormButton type="submit">Sign Up</StyledFormButton>
    </StyledForm>
  );
};

export default Registration;

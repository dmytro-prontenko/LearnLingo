import { motion } from "framer-motion";
import {
  StyledButtons,
  StyledLink,
  StyledLinks,
  StyledLogInBtn,
  StyledLogo,
  StyledNav,
  StyledRegistrationBtn,
} from "./Header.styled";

import sprite from "../../../public/sprite.svg";
import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";

const Header = () => {
  const { modalStatus, setModalStatus, setModalContent } =
  useContext(ModalContext);

  const handleModal = (e) =>{
    setModalStatus(!modalStatus)
    setModalContent(e.currentTarget.name)
  }

  return (
    <motion.div
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="container"
    >
      <StyledNav>
        <StyledLogo to="/">LearnLingo</StyledLogo>
        <StyledLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/teachers">Teachers</StyledLink>
        </StyledLinks>
        <StyledButtons>
          <StyledLogInBtn onClick={handleModal} name="login">
            <svg width={"20px"} height={"20px"} >
              <use xlinkHref={sprite + "#icon-log-in"}></use>
            </svg>
            <span>Login</span>
          </StyledLogInBtn>
          <StyledRegistrationBtn onClick={handleModal} name="register">Registration</StyledRegistrationBtn>
        </StyledButtons>
      </StyledNav>
    </motion.div>
  );
};

export default Header;

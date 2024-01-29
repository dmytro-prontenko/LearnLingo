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

import sprite from "../../images/sprite.svg";

const Header = () => {
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
          <StyledLogInBtn>
            <svg width={"20px"} height={"20px"}>
              <use href={sprite + "#icon-log-in"}></use>
            </svg>
            <span>Login</span>
          </StyledLogInBtn>
          <StyledRegistrationBtn>Registration</StyledRegistrationBtn>
        </StyledButtons>
      </StyledNav>
    </motion.div>
  );
};

export default Header;

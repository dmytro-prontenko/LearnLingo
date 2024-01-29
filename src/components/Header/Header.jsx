import { NavLink } from "react-router-dom";
import {
  StyledButtons,
  StyledLinks,
  StyledLogo,
  StyledNav,
} from "./Header.styled";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ y:-150 }}
      animate={{ y:0 }}
      transition={{ duration: 0.3 }}
    >
      <StyledNav>
        <StyledLogo to="/">LearnLingo</StyledLogo>
        <StyledLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/teachers">Teachers</NavLink>
        </StyledLinks>
        <StyledButtons>
          <button>Login</button>
          <button>Registration</button>
        </StyledButtons>
      </StyledNav>
    </motion.div>
  );
};

export default Header;

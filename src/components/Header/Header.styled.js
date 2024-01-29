import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  padding: 12px 128px;
  /* background-color:teal; */
`;

export const StyledLogo = styled(NavLink)`
  margin-right: clamp(100px, 33%, 500px);
`;

export const StyledLinks = styled.div`
  display: flex;
  margin-right: clamp(100px, 23%, 500px);

  gap: 28px;
`;

export const StyledButtons = styled.div`
  display: flex;
`;

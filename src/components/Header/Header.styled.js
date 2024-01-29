import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  /* gap: clamp(100px, 33%, 500px); */
  padding: 30px 128px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled(NavLink)`
  color: #121417;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.4px;
  text-decoration: none;
  margin-right: clamp(100px, 390px, 500px);
`;

export const StyledLinks = styled.div`
  display: flex;
  gap: 28px;
  margin-right: clamp(100px, 268px, 500px);
`;

export const StyledLink = styled(NavLink)`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  text-decoration: none;
`;

export const StyledButtons = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledLogInBtn = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  border: none;
  background-color: transparent;

  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
  cursor: pointer;
`;

export const StyledRegistrationBtn = styled.button`
  display: flex;
  padding: 14px 39px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 12px;
  border: none;
  background: #121417;

  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */

  cursor: pointer;
`;

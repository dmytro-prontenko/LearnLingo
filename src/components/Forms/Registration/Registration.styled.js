import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 438px;
  position: relative;
`;

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: -11%;
  right: -10%;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledFormTitle = styled.h3`
  color: #121417;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px; /* 120% */
  letter-spacing: -0.8px;
`;

export const StyledFormText = styled.div`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`;

export const StyledInput = styled.input`
  display: flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;
  gap: 18px;

  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
`;

export const StyledFormButton = styled.button`
  display: flex;
  width: 438px;
  padding: 16px 180px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 12px;
  background: #f4c550;

  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
`;

import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-rows: auto-fit;
  gap: 20px;
  grid-template-areas:
    "title img"
    "footer footer";
`;

export const StyledHeroInfo = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 98px 64px;

  border-radius: 30px;
  background: #f8f8f8;
`;

export const StyledTitle = styled.h2`
  color: #121417;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px; /* 116.667% */
  letter-spacing: -0.96px;
  max-width: 548px;
`;

export const StyledSpan = styled.span`
  color: #121417;
  font-size: 48px;
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;
  background-color: #ffdc86;
`;

export const StyledText = styled.p`
  max-width: 441px;
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.32px;
`;

export const StyledHeroImg = styled(motion.img)`
  grid-area: img;
  /* width: 100%; */
  height: 530px;
  /* object-fit: cover; */
`;
export const StyledHeroFooter = styled(motion.div)`
  grid-area: footer;
  display: flex;
  justify-content: space-around;

  border-radius: 30px;
  border: 1.5px solid #f4c550;

  padding: 40px 122px;
`;

export const StyledHeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledHeroBtn = styled.button`
  width: 272px;
  padding: 16px 88px;
  border: none;
  border-radius: 12px;
  background: #f4c550;
  cursor: pointer;

  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
`;

export const StyledFooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const StyledFooterItemDigit = styled.p`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 114.286% */
  letter-spacing: -0.56px;
`;

export const StyledFooterItemText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
`;

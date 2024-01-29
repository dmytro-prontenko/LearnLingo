import { motion } from "framer-motion";
import {
  StyledFooterItem,
  StyledFooterItemDigit,
  StyledFooterItemText,
  StyledHeroBtn,
  StyledHeroFooter,
  StyledHeroImg,
  StyledHeroInfo,
  StyledHeroText,
  StyledHeroWrapper,
  StyledSpan,
  StyledText,
  StyledTitle,
} from "./Homepage.styled";

import heroImage from "../../images/hero.png"

const HomePage = () => {
  return (
    <>
      <StyledHeroWrapper>
        <motion.div
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <StyledHeroInfo>
            <StyledHeroText>
              <StyledTitle>
                Unlock your potential with the best <StyledSpan>language</StyledSpan> tutors
              </StyledTitle>
              <StyledText>
                Embark on an Exciting Language Journey with Expert Language
                Tutors: Elevate your language proficiency to new heights by
                connecting with highly qualified and experienced tutors.
              </StyledText>
            </StyledHeroText>
            <StyledHeroBtn>Get started</StyledHeroBtn>
          </StyledHeroInfo>
        </motion.div>

        <StyledHeroImg
          initial={{ x: 1500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          src={heroImage}
          alt="hero_image"
        />

        <StyledHeroFooter
          initial={{ y: 1500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <StyledFooterItem>
            <StyledFooterItemDigit>32,000 +</StyledFooterItemDigit>
            <StyledFooterItemText>Experienced tutors</StyledFooterItemText>
          </StyledFooterItem>
          <StyledFooterItem>
            <StyledFooterItemDigit>300,000 +</StyledFooterItemDigit>
            <StyledFooterItemText>5-star tutor reviews</StyledFooterItemText>
          </StyledFooterItem>
          <StyledFooterItem>
            <StyledFooterItemDigit>120 +</StyledFooterItemDigit>
            <StyledFooterItemText>Subjects taught</StyledFooterItemText>
          </StyledFooterItem>
          <StyledFooterItem>
            <StyledFooterItemDigit>200 +</StyledFooterItemDigit>
            <StyledFooterItemText>Tutor nationalities</StyledFooterItemText>
          </StyledFooterItem>
        </StyledHeroFooter>
        {/* </StyledHeroFooter> */}
      </StyledHeroWrapper>
    </>
  );
};

export default HomePage;

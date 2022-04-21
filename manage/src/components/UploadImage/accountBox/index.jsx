import React, { useState } from "react";
import styled from "styled-components";
import { ProductInfoPage } from "./ProductInfoPage";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { MoreInfoPage } from "./MoreInfoPage";
import "../MoreInfoModal.scss";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import StepsKekoo from "../../chart/StepsKekoo";

const BoxContainer1 = styled.div`
  width: 500px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  
`;

const TopContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  // width: 160%;
  // height: 550px;
  position: absolute;
  display: flex;
  // flex-direction: column;
  // border-radius: 50%;
  // transform: rotate(60deg);
  // top: -290px;
  // left: -70px;
  // background: white;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: rgba(200, 200, 200, 1);

  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox({ closemodal }) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer1>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />

          {active === "signin" && (

            <div>
              <div className="steps">
                <StepsKekoo currentstep={1} description={"Information about the product"} numbersteps={3}></StepsKekoo>
              </div>
              <HeaderContainer>
                <HeaderText>Details for the product </HeaderText>
                <HeaderText></HeaderText>
              </HeaderContainer>
            </div>
          )}
          {active === "signup" && (
            <div>
              <div className="steps">
                <StepsKekoo currentstep={2} description={"Information about the product"} numbersteps={3}></StepsKekoo>
              </div>
              <HeaderContainer>
                <HeaderText>More Information for customer.</HeaderText>
              </HeaderContainer>
            </div>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <ProductInfoPage closemodal={closemodal} />}
          {active === "signup" && <MoreInfoPage />}
        </InnerContainer>
      </BoxContainer1>
    </AccountContext.Provider>
  );
}

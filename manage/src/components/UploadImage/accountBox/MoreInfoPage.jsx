import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  BackLink

} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import StepsKekoo from "../../chart/StepsKekoo";

export function MoreInfoPage(props) {
  const { switchToSignin } = useContext(AccountContext);

  const FunctionSeMoreX = (event) => {
    const numberOfFiled =  event.target.id;
    localStorage.setItem("MoreInfo"+ numberOfFiled , event.target.value)
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" defaultValue={localStorage.getItem("MoreInfo1")} onChange={FunctionSeMoreX} id="1" placeholder="" />
        <Input type="text" defaultValue={localStorage.getItem("MoreInfo2")} onChange={FunctionSeMoreX} id="2" placeholder="" />
        <Input type="text" defaultValue={localStorage.getItem("MoreInfo3")} onChange={FunctionSeMoreX} id="3" placeholder="" />
        <Input type="text" defaultValue={localStorage.getItem("MoreInfo4")} onChange={FunctionSeMoreX} id="4" placeholder="" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Done</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        <BackLink href="#" onClick={switchToSignin}>
          Back
        </BackLink>
      </MutedLink>
    </BoxContainer>
  );
}

import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function MoreInfoPage(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="" />
        <Input type="text" placeholder="" />
        <Input type="text" placeholder="" />
        <Input type="text" placeholder="" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Done</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        <BoldLink href="#" onClick={switchToSignin}>
        Skip this step
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

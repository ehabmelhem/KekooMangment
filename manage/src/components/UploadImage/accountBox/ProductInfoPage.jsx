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
import { Switch } from "antd";
import "../MoreInfoModal.scss";

export function ProductInfoPage(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <div>
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Product name" />
        <Input type="price" placeholder="Price" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Open the comments ?</MutedLink>
      <Switch className="switch"></Switch>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Done</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
       
        <BoldLink href="#" onClick={switchToSignup}>
          Add more
        </BoldLink>
      </MutedLink>
    </BoxContainer>
          </div>

  );
}

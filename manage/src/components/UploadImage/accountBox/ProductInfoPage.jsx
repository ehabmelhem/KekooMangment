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
import SwitchKekoo from "../../chart/SwitchKekoo";
import { useRef, useEffect, useCallback, useState } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Switch } from "antd";
import "../MoreInfoModal.scss";
import { SettingOutlined } from '@ant-design/icons';
import MessageKekoo from "../../chart/MessageKekoo";
import { message, Button } from 'antd';

import { Result } from 'antd';

export function ProductInfoPage({ closemodal }) {
  const { switchToSignup } =  useContext(AccountContext);
  const [ProductName, setProductName] = useState();
  const [price, setPrice] = useState();

  const [istrue, setistrue] = useState(true);
  const key = 'updatable';

  const [missfilled, setmissfilled] = useState(true);
  
  
  const DoneMessage = () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content: 'Loaded!', key, duration: 3 });
      closemodal()
    }, 1000);
  };

   const ErrorMiss = () => {
   message.error("Please fill the missing fileds");
  };
  function doPost () {
   if(localStorage.getItem("ProductNameLocal") == "" ||
       localStorage.getItem("PriceLocal")       == "") {
        ErrorMiss();
    }else {
      if(localStorage.getItem("ProductNameLocal") != "" &&
      localStorage.getItem("PriceLocal")       != "") {
        DoneMessage();
        
      }
    }
  };
  const FunctionSetProductName = (event) => {
    localStorage.setItem("ProductNameLocal", event.target.value)
  };
  const FunctionSetPrice = (event) => {
    localStorage.setItem("PriceLocal", event.target.value)
  };


  return (
    <div>
      <BoxContainer>

        <FormContainer>
          <Input type="text"  defaultValue={localStorage.getItem("ProductNameLocal")} onChange={FunctionSetProductName} placeholder="Product name" />
          <Input type="number"  defaultValue={localStorage.getItem("PriceLocal")} onChange={FunctionSetPrice} placeholder="Price" />

        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Open the comments ?</MutedLink>

        <SwitchKekoo funvar={setistrue} />


        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton  onClick={doPost} type="submit">Done</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <BoldLink className="addmore" onClick={switchToSignup}>
          Add more
        </BoldLink>
        <MutedLink href="#">
          <BackLink onClick={closemodal} href="#">
            Back
          </BackLink>
        </MutedLink>
      </BoxContainer>

    </div>

  );
}

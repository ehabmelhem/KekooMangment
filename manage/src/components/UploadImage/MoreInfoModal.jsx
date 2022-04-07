import "./MoreInfoModal.scss";
import styled from "styled-components";
import { AccountBox } from "./accountBox";
import StepsKekoo from "../chart/StepsKekoo";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function MoreInfoModal({closemodal}) {
  return (
    <AppContainer>
      <AccountBox closemodal={closemodal} />
    </AppContainer>
  );
}

export default MoreInfoModal;

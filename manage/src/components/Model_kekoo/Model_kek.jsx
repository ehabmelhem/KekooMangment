import "./Model_kek.scss";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useCallback, useState } from "react";
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '500px',

  },
};
Modal.setAppElement('#root');

const Datatable = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }

  const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

  const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;
  const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

 
  return (
    <div className="datatable">
      <Modal
        isOpen={true}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CloseModalButton
          aria-label='Close modal'
          onClick={closeModal}
        />
      </Modal>
    
    </div>
  );
};

export default Datatable;

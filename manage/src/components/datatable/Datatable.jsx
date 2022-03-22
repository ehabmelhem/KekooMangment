import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useCallback, useState } from "react";
import NewProduct from "../../pages/new/New";
import Modal from 'react-modal';
import UploadImage from '../UploadImage/UploadImage';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container2 = styled(animated.div)`
top: 50px;
left: 50px;
right: auto;
bottom: auto;
margin-right:  -50%;
transform: translate(-50%, -50%);
width: 100px;
height: 100px;
display: inline-block;
padding: 3em;
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
`;

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
    display: "inline-block",
    zIndex: "1",
    backgroundClip: "border-box",
  },
};
Modal.setAppElement('#root');

const Datatable = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [data, setData] = useState(userRows);
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
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
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
  const clickOnAddProduct = () => {
    return (
      <div>
        render( <NewProduct ></NewProduct>);
      </div>
    )
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/products/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
   <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
         style={customStyles}
     
      >
        <CloseModalButton
          aria-label='Close modal'
          onClick={closeModal}
        />
        <NewProduct></NewProduct>
      </Modal> 
      <div className="datatable">
      <div className="datatableTitle">
        Products
        <button className="link" onClick={openModal}>Add New</button>
      </div>
      
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    </div>
  );
};

export default Datatable;

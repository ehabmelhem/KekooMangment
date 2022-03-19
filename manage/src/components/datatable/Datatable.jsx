import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useCallback, useState } from "react";
import NewProduct from "../../pages/new/New";
import Modal from 'react-modal';
import UploadImage from '../UploadImage/UploadImage';

import styled from 'styled-components';
import { GlobalStyle } from '../Modal/globalStyles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const Datatable = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [data, setData] = useState(userRows);

  const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(prev => !prev);
  // };

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
    <div className="datatable">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        
        <div className="top">
          <h1>New product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            {/* <img
                 src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            /> */}
          </div>
          <div className="right">
            <form>
              <div className="formInput">
               
              </div>
              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}
              <div className="App">
                <UploadImage></UploadImage>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>

      </Modal>
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
  );
};

export default Datatable;

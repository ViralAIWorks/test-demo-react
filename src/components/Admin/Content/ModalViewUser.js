import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ModalViewUser = (props) => {
  const { show, setShow, dataView } = props;
  console.log(props);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>User View</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder={
                dataView && dataView.username ? dataView.username : ""
              }
              disabled
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder={dataView && dataView.email ? dataView.email : ""}
              disabled
            />
            <Form.Label>Role</Form.Label>
            <Form.Control
              placeholder={dataView && dataView.role ? dataView.role : ""}
              disabled
            />
          </Form.Group>
        </Modal.Body>
        {/* <div className="col-md-12 img-preview">
          {dataView && dataView.image ? dataView.image : ""}
        </div> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewUser;

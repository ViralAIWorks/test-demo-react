import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteQuizForAdmin } from '../../../../services/apiService';

import { toast } from 'react-toastify';

const ModelDeleteQuiz = (props) => {
  const { show, setShow, dataDelete } = props;

  const handleClose = () => setShow(false);

  const handleSubmitDeleteQuiz = async () => {
    let data = await deleteQuizForAdmin(dataDelete.id);
    console.log('component res:', data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      // await props.fetchListUsers();
      props.setCurrentPage(1);
      await props.fetchListUserWithPaginate(1);
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size='x1' backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete the Quiz?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are to sure to delete this quiz? Id ={' '}
          <b>{dataDelete && dataDelete.id ? dataDelete.id : ''}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={() => handleSubmitDeleteQuiz()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelDeleteQuiz;

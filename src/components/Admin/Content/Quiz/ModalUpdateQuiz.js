import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { putUpdateQuizForAdmin } from '../../../../services/apiService';

const ModalUpdateQuiz = (props) => {
  const { show, setShow } = props;
  const [dataUpdate, setDataUpdate] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('EASY');
  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [quizId, setQuizId] = useState('');

  const handleClose = () => {
    setShow(false);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setType('EASY');
    setImage('');
    setPreviewImage('');
    setDataUpdate({});
    setQuizId('');
    props.setDataUpdate();
  };

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setQuizId(dataUpdate.id);
      setDescription(dataUpdate.description);
      setName(dataUpdate.name);
      setType(dataUpdate.difficulty);
      setImage('');
      if (dataUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
      }
    }
  }, [dataUpdate]);

  const handleUploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const handleSubmitQuiz = async () => {
    if (name.trim() === '' || description.trim() === '') {
      toast.error('Name and Description are required.');
      return;
    }

    if (!dataUpdate.id) {
      toast.error('Invalid quiz ID.');
      return;
    }

    try {
      const data = await putUpdateQuizForAdmin(dataUpdate.id, description, name, type, image);
      console.log('Check data:', data);
      if (data && data.EC === 0) {
        toast.success(data.EM);
        handleClose();
        // await props.fetchListUsers();
        // props.setCurrentPage(1);
      } else {
        toast.error(data && data.EM ? data.EM : 'Failed to update quiz.');
      }
    } catch (error) {
      console.error('Error updating quiz:', error);
      toast.error('An error occurred while updating the quiz.');
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size='xl'
        backdrop='static'
        className='modal-add-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Update quiz</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
          <form className='row g-3'>
            <div className='col-md-6'>
              <label className='form-label'>Name</label>
              <input
                type='text'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Description</label>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className='col-md-4'>
              <label className='form-label'>Type</label>
              <select
                className='form-select'
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option value='EASY'>EASY</option>
                <option value='NORMAL'>NORMAL</option>
                <option value='HARD'>HARD</option>
              </select>
            </div>
            <div className='col-md-12'>
              <label className='form-label label-upload' htmlFor='labelUpload'>
                <FcPlus />
                Upload File Image
              </label>
              <input type='file' id='labelUpload' hidden onChange={handleUploadImage} />
            </div>
            <div className='col-md-12 img-preview'>
              {previewImage ? (
                <img src={previewImage} alt='upload file' />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmitQuiz}>
            Save
          </Button>
        </Modal.Footer> */}
        Features in development
      </Modal>
    </>
  );
};

export default ModalUpdateQuiz;

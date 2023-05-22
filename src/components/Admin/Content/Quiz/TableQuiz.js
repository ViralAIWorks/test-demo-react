import React, { useEffect, useState } from 'react';
import { getAllQuizForAdmin } from '../../../../services/apiService';
import ModelDeleteQuiz from './ModalDeleteQuiz';
import ModalUpdateQuiz from './ModalUpdateQuiz';

function TableQuiz(props) {
  const [listQuiz, setListQuiz] = useState([]);

  const [isShowModalUpdate, setIsShowModalUpdate] = useState(false);
  const [isShowModalDeleteQuiz, setIsShowModalDeleteQuiz] = useState(false);

  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    }
    console.log('res: ', res);
  };

  const handleClickBtnUpdate = (quiz) => {
    setIsShowModalUpdate(true);
    setDataUpdate(quiz);
  };

  const handleClickBtnDelete = (quiz) => {
    console.log('user data: ', quiz);
    setIsShowModalDeleteQuiz(true);
    setDataDelete(quiz);
  };

  return (
    <>
      <div>List Quizzes: </div>
      <table className='table table-hover table-bordered mt-2 my-2'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Description</th>
            <th scope='col'>Type</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.map((item, index) => {
              return (
                <tr key={`table-quiz-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td style={{ display: 'flex', gap: '15px' }}>
                    <button className='btn btn-warning' onClick={() => handleClickBtnUpdate(item)}>
                      Edit
                    </button>
                    <button className='btn btn-danger' onClick={() => handleClickBtnDelete(item)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <ModalUpdateQuiz
        show={isShowModalUpdate}
        setShow={setIsShowModalUpdate}
        dataUpdate={dataUpdate}
        fetchQuiz={fetchQuiz}
        setDataUpdate={setDataUpdate}
      />

      <ModelDeleteQuiz
        show={isShowModalDeleteQuiz}
        setShow={setIsShowModalDeleteQuiz}
        dataDelete={dataDelete}
        fetchQuiz={fetchQuiz}
      />
    </>
  );
}

export default TableQuiz;

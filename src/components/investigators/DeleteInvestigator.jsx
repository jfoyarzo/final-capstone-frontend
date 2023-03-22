import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { deleteInvestigator } from '../../redux/DeleteInvestigator/deleteInvestigatorSlice';
import { fetchInvestigators } from '../../redux/investigators/investigatorSlice';

const DeleteInvestigator = () => {
  const dispatch = useDispatch();
  const investigatorsDelete = useSelector((state) => state.deleteInvestigatorSlice);
  const investigators = useSelector((state) => state.investigators);
  useEffect(() => {
    if (investigatorsDelete.status === 'fullfilled') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Investigator created successfully!',
        showConfirmButton: false,
        timer: 2000,
      });
      dispatch(fetchInvestigators());
    }
  }, [investigatorsDelete, dispatch]);

  const handleDelete = (e) => {
    dispatch(deleteInvestigator(e.target.id));
  };

  return (
    <div>
      <h1>Delete an Investigator</h1>
      <div>
        {investigators.value.map((investigator) => (
          <Card key={investigator.id} className="d-flex flex-row justify-content-between m-4 p-4">
            <img src={`${investigator.photo}`} alt="investigator" style={{ maxHeight: '2rem' }} />
            {investigator.name}
            <Button
              type="button"
              id={investigator.id}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeleteInvestigator;

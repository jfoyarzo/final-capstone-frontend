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
        title: 'Investigator deleted successfully!',
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
    <div style={{
      height: '100%', overflow: 'auto', display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center',
    }}
    >
      <h1>Delete an Investigator</h1>
      <div className="w-100 h-100 d-flex flex-wrap">
        {investigators.value.map((investigator) => (
          <Card key={investigator.id} className="d-flex flex-row align-items-center justify-content-between m-2 p-4" style={{ width: '32%', height: '20%' }}>
            <img src={`${investigator.photo}`} alt="investigator" className="border border-dark rounded-circle" style={{ maxHeight: '6rem' }} />
            {investigator.name}
            <Button
              type="button"
              id={investigator.id}
              onClick={handleDelete}
              style={{ backgroundColor: '#97BF0F', border: 'none' }}
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

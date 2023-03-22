import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { deleteInvestigator } from '../../redux/DeleteInvestigator/deleteInvestigatorSlice';

const DeleteInvestigator = () => {
  const investigators = useSelector((state) => state.investigators);

  const dispatch = useDispatch();

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

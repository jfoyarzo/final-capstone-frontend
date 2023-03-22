import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteInvestigator } from '../../redux/DeleteInvestigator/deleteInvestigatorSlice';
import { Button, Card } from 'react-bootstrap';

const DeleteInvestigator = () => (
  <div>
    <h1>Delete an Investigator</h1>
    <div>
      {investigators.value.map((investigator) => (
          <Card key={investigator.id} className="d-flex flex-row justify-content-between m-4 p-4">
            <img src={`${investigator.photo}`} alt="photo" style={{ maxHeight: "2rem" }} />
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

export default DeleteInvestigator;
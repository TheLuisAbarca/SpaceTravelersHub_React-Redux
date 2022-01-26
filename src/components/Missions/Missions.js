import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { getMissions } from '../../redux/missions/missions';
import Mission from '../Mission/Mission';

let flag = true;

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!flag) return;
    flag = false;
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div>
      <h1>Missions</h1>
      <Container fluid>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <Mission key={mission.mission_id} mission={mission} />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Missions;

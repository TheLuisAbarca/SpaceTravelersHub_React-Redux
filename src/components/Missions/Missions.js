import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { getMissions } from '../../redux/missions/missions';
import Mission from '../Mission/Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div>
      <h1>Missions</h1>
      <div className="grid">
        <div className="grid grid-cols-4">
          <div>Mission</div>
          <div>Description</div>
          <div>Status</div>
          <div>Action</div>
        </div>
        {missions.map((mission) => (
          <Mission key={mission.mission_id} mission={mission} />
        ))}
      </div>
    </div>
  );
};

export default Missions;

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { joinMission } from '../../redux/missions/missions';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(joinMission(mission.mission_id));
  };

  return (
    <>
      <tr>
        <td className="align-middle">{mission.mission_name}</td>
        <td>{mission.mission_description}</td>
        <td className="align-middle"><Badge bg="primary">Active Member</Badge></td>
        <td className="align-middle"><Button onClick={clickHandler} type="button" variant="outline-secondary">Join Mission</Button></td>
      </tr>
    </>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    mission_description: PropTypes.string,
  }).isRequired,
};

export default Mission;

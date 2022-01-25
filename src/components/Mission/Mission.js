import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Mission = ({ mission }) => (
  <>
    <tr>
      <td className="align-middle">{mission.mission_name}</td>
      <td>{mission.mission_description}</td>
      <td className="align-middle"><Badge bg="primary">Active Member</Badge></td>
      <td className="align-middle"><Button type="button" variant="outline-secondary">Join Mission</Button></td>
    </tr>
  </>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    mission_description: PropTypes.string,
  }).isRequired,
};

export default Mission;

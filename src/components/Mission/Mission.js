import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => (
  <>
    <div className="grid grid-cols-4">
      <div>{mission.mission_name}</div>
      <div>{mission.mission_description}</div>
    </div>
    <br />
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

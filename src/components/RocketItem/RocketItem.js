import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = ({ rocket }) => {
  console.log(rocket);
  const { name, description, img } = rocket;
  return (
    <div>
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketItem;

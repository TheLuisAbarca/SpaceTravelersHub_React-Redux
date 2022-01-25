import React from 'react';
import { useSelector } from 'react-redux';
import RocketItem from '../RocketItem/RocketItem';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  return (
    <div>
      { rockets.map((rocket) => (<RocketItem key={rocket.id} rocket={rocket} />)) }
    </div>
  );
};

export default Rockets;

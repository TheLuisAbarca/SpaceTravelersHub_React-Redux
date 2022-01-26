import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelRocket } from '../../redux/rockets/rockets';
import styles from './RocketItem.module.css';

const RocketItem = ({ rocket }) => {
  const {
    id, name, description, img, reserved,
  } = rocket;

  const dispatch = useDispatch();

  const bookRocketHandler = () => {
    dispatch(bookRocket(id));
  };

  const cancelRocketHandler = () => {
    dispatch(cancelRocket(id));
  };

  return (
    <li className={styles.card}>
      <img src={img} alt={name} className={styles.img} />
      <div className={styles.cardBody}>
        <h3>{name}</h3>
        <p>
          {reserved && (<Badge bg="info" className={styles.badge}>Reserved</Badge>)}
          {description}
        </p>
        {!reserved && (<button type="button" onClick={bookRocketHandler} className={styles.btn}>Reserve Rocket</button>)}
        {reserved && (<button type="button" onClick={cancelRocketHandler} className={styles['cancel-btn']}>Cancel Reservation</button>)}
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketItem;

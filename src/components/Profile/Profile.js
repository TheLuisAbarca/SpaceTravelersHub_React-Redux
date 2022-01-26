import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.divContainers}>
        <h2>My Missions</h2>
        <ul className={styles.list}>
          <li>List 1</li>
          <li>List 1</li>
          <li>List 1</li>
        </ul>
      </div>
      <div className={styles.divContainers}>
        <h2>My Rockets</h2>
        <ul className={styles.list}>
          {
            rockets.filter((rocket) => (rocket.reserved === true))
              .map((rocket) => (<li key={rocket.id}>{rocket.name}</li>))
          }
        </ul>
      </div>

    </div>
  );
};
export default Profile;

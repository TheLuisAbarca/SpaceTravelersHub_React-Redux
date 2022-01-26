import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const missions = useSelector((state) => state.missionsReducer);

  const emptyMissions = () => {
    const joinedMissions = missions.filter((mission) => (mission.reserved === true));
    if (joinedMissions.length === 0) {
      return <li key={1}>No Missions Joined yet.</li>;
    }
    return joinedMissions
      .map((mission) => (<li key={mission.mission_id}>{mission.mission_name}</li>));
  };

  const emptyRockets = () => {
    const reservedRockets = rockets.filter((rocket) => (rocket.reserved === true));
    if (reservedRockets.length === 0) {
      return <li key={1}>No Rockets Reserved yet.</li>;
    }
    return reservedRockets
      .map((rocket) => (<li key={rocket.id}>{rocket.name}</li>));
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.divContainers}>
        <h2>My Missions</h2>
        <ul className={styles.list}>
          {emptyMissions()}
        </ul>
      </div>
      <div className={styles.divContainers}>
        <h2>My Rockets</h2>
        <ul className={styles.list}>
          {emptyRockets()}
        </ul>
      </div>

    </div>
  );
};
export default Profile;

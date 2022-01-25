const FETCH_DATA = 'FETCH_DATA';

const fetchMissions = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions', {
    method: 'GET',
  });
  try {
    const data = await response.json();
    const newPayload = [];
    data.forEach((mission) => {
      newPayload.push({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        mission_description: mission.description,
      });
    });
    dispatch(fetchMissions(newPayload));
    // dispatch({ type: FETCH_DATA, payload: newPayload });
  } catch (error) {
    console.log(error);
  }
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA: {
      console.log(action.payload);
      return action.payload;
    }
    default:
      return state;
  }
};

export default missionsReducer;

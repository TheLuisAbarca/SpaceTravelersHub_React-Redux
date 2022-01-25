import getMissionsAPI from '../../API/missionAPI';

const FETCH_DATA = 'FETCH_DATA';

const fetchMissions = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getMissions = () => async (dispatch) => {
  const response = await getMissionsAPI();
  const newPayload = [];
  response.forEach((mission) => {
    newPayload.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      mission_description: mission.description,
    });
  });
  dispatch(fetchMissions(newPayload));
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return action.payload.map((mission) => ({ ...mission }));
    }
    default:
      return state;
  }
};

export default missionsReducer;

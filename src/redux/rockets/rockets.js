import getRocketsAPI from '../../API/rocketsAPI';

const GET_ROCKETS = 'GET_ROCKETS';

export const getRocketsAction = () => async (dispatch) => {
  const rockets = await getRocketsAPI();
  const validrockets = [];
  rockets.forEach((rocket) => {
    validrockets.push({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      type: rocket.rocket_type,
      img: rocket.flickr_images[0],
    });
  });
  dispatch({ type: GET_ROCKETS, payload: validrockets });
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

import getRocketsAPI from '../../API/rocketsAPI';

const GET_ROCKETS = 'GET_ROCKETS';
const BOOK_ROCKET = 'BOOK_ROCKET';

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

export const bookRocket = (id) => ({ type: BOOK_ROCKET, id });

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    default:
      return state;
  }
};

export default reducer;

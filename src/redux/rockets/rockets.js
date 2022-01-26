import getRocketsAPI from '../../API/rocketsAPI';

const GET_ROCKETS = 'GET_ROCKETS';
const BOOK_ROCKET = 'BOOK_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';

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
export const cancelRocket = (id) => ({ type: CANCEL_ROCKET, id });

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default reducer;

const getRocketsAPI = async () => {
  const data = await fetch('https://api.spacexdata.com/v3/rockets')
    .then((responce) => responce.json());
  return data;
};

export default getRocketsAPI;

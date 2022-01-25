const getMissionsAPI = async () => {
  const data = await fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json());
  return data;
};

export default getMissionsAPI;

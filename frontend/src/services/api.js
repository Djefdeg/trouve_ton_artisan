const API_URL = 'http://localhost:3000';

export const getArtisans = async () => {
  const response = await fetch(`${API_URL}/artisans`);

  return response.json();
};

export const getSpecialities = async () => {
  const response = await fetch(`${API_URL}/specialities`);

  return response.json();
};

export const getCities = async () => {
  const response = await fetch(`${API_URL}/cities`);

  return response.json();
};

export default API_URL;
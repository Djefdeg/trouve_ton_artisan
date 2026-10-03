const API_URL = 'http://localhost:3000';

export const getArtisans = async () => {
  const response = await fetch(`${API_URL}/artisans`);

  return response.json();
};

export default API_URL;
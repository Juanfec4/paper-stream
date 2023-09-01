import axios from "axios";

const CONFIG = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
  params: {
    include_adult: false,
  },
};

const getAll = async (endpoint, page = "1") => {
  try {
    let response = await axios.get(`${import.meta.env.VITE_API_URL}/${endpoint}`, {
      ...CONFIG,
      params: {
        ...CONFIG.params,
        page,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const getById = async (endpoint, id, appendEndpoints = " ") => {
  try {
    let response = await axios.get(`${import.meta.env.VITE_API_URL}/${endpoint}/${id}`, {
      ...CONFIG,
      params: {
        ...CONFIG.params,
        append_to_response: appendEndpoints,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const getByGenre = async (endpoint, genreID, page = "1") => {
  try {
    let response = await axios.get(`${import.meta.env.VITE_API_URL}/${endpoint}`, {
      ...CONFIG,
      params: {
        ...CONFIG.params,
        with_genres: genreID,
        page,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export default { getAll, getById, getByGenre };

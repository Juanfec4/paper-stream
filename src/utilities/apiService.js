import axios from "axios";

const CONFIG = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
};

const getAll = async (endpoint) => {
  try {
    let response = await axios.get(`${import.meta.env.VITE_API_URL}/${endpoint}`, CONFIG);
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
        append_to_response: appendEndpoints,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export default { getAll, getById };

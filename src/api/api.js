import axios from "axios";

export const BACKEND_ENDPOINT = `https://jsonplaceholder.typicode.com/users`;

export const fetchUsersInfo = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

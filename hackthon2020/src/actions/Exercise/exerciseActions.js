import axios from "axios";

export const getActivities = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8080/all");
  } catch (error) {
    
  }
};
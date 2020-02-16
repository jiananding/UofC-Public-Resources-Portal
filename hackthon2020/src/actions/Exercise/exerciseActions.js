import axios from "axios";

export const getExercies = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8080/all");
  } catch (error) {
    
  }
};

export const getCertainExercise = () => async dispatch => {
    try{
       const res = await axios.get("http://localhost:8080/exercise/1");
    } catch(error){

    }
}
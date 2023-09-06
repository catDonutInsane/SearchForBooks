import axios from "axios";
import { addBooks } from "../../../store/slices/reducer";
import {setLoading} from '../../../store/slices/reducer'

const apiKEY = "AIzaSyArM00tzwXzYxpeRbUpA4ifDUc3oYrbplc";
const URL = "https://www.googleapis.com/books/v1/volumes";

const searchingParams = (sortingOrder, category, value) => {
 
  let result = `?q=${value}+intitle:${value}`;
  if (category !== "all") {
    result += `+subject:${category}`;
  }
  if (sortingOrder) {
    result += `&orderBy=${sortingOrder}`;
  }
  return result;
};

export const fetchBooks = (sortingOrder, category, value, dispatch) => {
  dispatch(setLoading(true))
  axios
    .get(
      URL +
        searchingParams(sortingOrder, category, value) +
        `&maxResults=30&key=${apiKEY}`,
      {
        withCredentials: false,
      }
    )
    .then((response) => response.data)
    .then((data) =>{ dispatch(addBooks(data))
      dispatch(setLoading(false))
    })
    .catch((err) => console.log(err));
};

import React, { useState } from "react";
import axios from "axios";
import { loadMoreBooks } from "../../store/slices/reducer";
import { useAppDispatch,useAppSelector } from "../../hooks/hooks";
export const LoadMoreButton:React.FC = () => {
  const apiKEY = "AIzaSyArM00tzwXzYxpeRbUpA4ifDUc3oYrbplc";
  const URL = "https://www.googleapis.com/books/v1/volumes";
  const dispatch = useAppDispatch();
  let { category, orderBy, value } = useAppSelector((state) => state.red.params);
  const [startindex, setStartIndex] = useState(30);
  const forAll = `${URL}?q="${value}"+intitle:${value}&orderBy=${orderBy}&startIndex=${startindex}&maxResults=30&key=${apiKEY}`;
  const forCategory = `${URL}?q="${value}"+intitle:${value}+subject:${category}&orderBy=${orderBy}&startIndex=${startindex}&maxResults=30&key=${apiKEY}`;
  let load = (url:string) => {
    axios
      .get(url, {
        withCredentials: false, 
      })
      .then((response) => response.data.items)
      .then((data) => {
        dispatch(loadMoreBooks({ data }));
        setStartIndex((startindex) => startindex + 30);
      })
      .catch((err) => console.log(err));
  };

  const loadMore = (category:string) => {
    if (category !== "all") {
      load(forCategory);
    } else {
      load(forAll);
    }
  };
  return <button onClick={() => loadMore(category)}>Load More</button>;
};

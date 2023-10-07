import React, { useState } from "react";
import { loadMoreBooks } from "../../store/slices/reducer";
import { useAppDispatch,useAppSelector } from "../../hooks/hooks";
import { userAPI } from "../../api/api";

export const LoadMoreButton:React.FC = () => {
  const dispatch = useAppDispatch();
  let { category, orderBy, value } = useAppSelector((state) => state.red.params);
  const [startIndex, setStartIndex] = useState(30);
  
  const loadMore = (category:string) => {
    if (category !== "all") {      
      userAPI.loadForCategory(value,orderBy,startIndex,category)
      .then((data) => {
        dispatch(loadMoreBooks({ data }));
        setStartIndex((startIndex) => startIndex + 30);
      })
    } else {
      userAPI.loadForAll(value,orderBy,startIndex)
      .then((data) => {
        dispatch(loadMoreBooks({ data }));
        setStartIndex((startIndex) => startIndex + 30);
      })      
    }
  };
  return <button onClick={() => loadMore(category)}>Load More</button>;
};

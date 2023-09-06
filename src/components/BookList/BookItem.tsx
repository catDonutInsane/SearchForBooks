import React,{memo} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { addBookInfo } from "../../store/slices/reducer";
import s from "./BookItem.module.css";
import {Items} from '../../store/slices/types'
interface BookItemProps {
  data:Items
} const BookItem:React.FC<BookItemProps> = ( {data} ) => {
  let dispatch = useAppDispatch();
  console.log(data)
  const getbookInfo = () => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${data.id}`)
      .then((response) => response.data)
      .then((data) => dispatch(addBookInfo(data)));
  };
  return (
    <div className={s.wrapper}>
      <Link to={"/" + data.id}>
        <img
          onClick={getbookInfo}
          src={data.volumeInfo?.imageLinks?.thumbnail}
          alt="img"
        />
      </Link>
      <div>
          Название: {data.volumeInfo?.title}
      </div>
      <div>
          {data.volumeInfo?.categories}
      </div>
      <div>
          Автор: {data.volumeInfo?.authors}
      </div>
      
    </div>
  );
};
export default memo(BookItem)
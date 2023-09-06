import React from "react";
import s from './BookInfo.module.css'
import { useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";
export const BookInfo:React.FC = () => {
  const bookData = useAppSelector((state) => state.red.bookInfo);
  return (
    <div className={s.wrapper}>
      <div>
        <img src={bookData.volumeInfo?.imageLinks?.thumbnail} alt="img" />
      </div>
      <div className={s.info}>
        <b>Название:</b> <div>{bookData.volumeInfo?.title}</div>
        <b> Авторы:</b><div>{bookData.volumeInfo?.authors}</div>        
         <b>Количество страниц:</b><div>{bookData.volumeInfo?.pageCount}</div>
         <b>Описание:</b><div>{bookData.volumeInfo?.description}</div>
        </div>
      <Link to="/">
        <button>HomePage</button>
      </Link>
    </div>
  );
};

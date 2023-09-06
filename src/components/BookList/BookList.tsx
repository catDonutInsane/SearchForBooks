import React from "react";
import  BookItem  from "./BookItem";
import { useAppSelector } from "../../hooks/hooks";
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButtom";
import s from "./BookList.module.css";
import { ScrollUpBtn } from "../ScrollUpBtn/ScrollUpBtn";
export const BookList:React.FC = () => {
  let {books,isLoading} = useAppSelector((state) => state.red);
  
  return (
    <>
      {isLoading ?"Waiting for loading":books.totalItems ? (
        <div>
        Total Items: {books.totalItems}
        <div className={s.wrapper}>
          { books.items.map((i) => <BookItem key={i.etag} data={i} />)}
        </div>
        {books.items.length===0 ?"":books.items.length >= books.totalItems ?"":<LoadMoreButton />
        }
        <ScrollUpBtn />
      </div>
      ) : (
        "Список пуст"
        
      )}
    </>
  );
};

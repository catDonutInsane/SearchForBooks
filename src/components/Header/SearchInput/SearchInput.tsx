import React, { useCallback, useState } from "react";
import {fetchBooks} from './searchingParams'
import {useAppSelector,useAppDispatch} from "../../../hooks/hooks";
import { setValue } from "../../../store/slices/reducer";

export const SearchInput:React.FC = () =>{
  const [err, setErr] = useState<string>('')
  const dispatch = useAppDispatch()
  let {category,orderBy,value} = useAppSelector(state=>state.red.params)
  const loadBooks=()=>{
    if(!value){
      setErr("Input value")
      return
    }
    else{
    fetchBooks(orderBy,category,value,dispatch)
    setErr('')
  }
  }
    return(
      <>
      <input onKeyDown={(e)=>{
          if(e.key==='Enter'){
            loadBooks()
          
          }}
      } onChange={(e)=>dispatch(setValue(e.target.value))} type="text" />
      {err}
      <button 
      onClick={()=>{
          loadBooks()
        }}>Search</button>
        
        </>
    )
}

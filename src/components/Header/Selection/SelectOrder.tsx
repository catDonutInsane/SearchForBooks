import React from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import {setOrder} from '../../../store/slices/reducer'

export const SelectOrder:React.FC = () =>{
    const dispatch = useAppDispatch()
    return(
        <>
        <select onChange={(e) => dispatch(setOrder(e.currentTarget.value))}>
            <option>relevance</option>
            <option>newest</option>
            
        </select>
        
        </>
    )
}
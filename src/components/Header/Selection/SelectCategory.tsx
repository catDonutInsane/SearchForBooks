import React from "react";
import { useAppDispatch} from "../../../hooks/hooks";
import {setCategory} from '../../../store/slices/reducer'
export const SelectCategory:React.FC = () =>{
    const dispatch = useAppDispatch()
    return(
        <>
        <select onChange={(e) => dispatch(setCategory(e.currentTarget.value))}>
            <option>all</option>
            <option>art</option>
            <option>technology</option>
            <option>biology</option>
            <option>history</option>
        </select>
        </>
    )
}
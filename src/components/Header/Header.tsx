import React from "react";
 import { SearchInput } from "./SearchInput/SearchInput";
import { SelectCategory } from "./Selection/SelectCategory";
import { SelectOrder } from "./Selection/SelectOrder";
import s from './Header.module.css'
export const Header:React.FC = () =>{
    return(
        <div className={s.wrapper}>
            <SearchInput/>
            <div>
            <SelectCategory/>
            <SelectOrder/>
            </div>
           
        </div>
    )
}
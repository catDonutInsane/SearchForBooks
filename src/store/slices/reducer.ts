import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookList,Items } from "./types";
type Params={
    category:string,
    orderBy:string,
    value:string

}
type IS ={
    params:Params,
    books:BookList,
    bookInfo:Items,
    isLoading: boolean
}
const initialState:IS={
    params:{
        category:'all',
        orderBy:'relevance',
        value :''
    },
    
    books:{
        totalItems:0,
        items:[]
    },
    bookInfo:{},
    isLoading: false
    
}

const reducer = createSlice({
    name: 'reducer',
    initialState,
    reducers:{
        setValue(state,action:PayloadAction<string>){
            state.params.value = action.payload
        },
            setCategory(state, action:PayloadAction<string>){
                state.params.category= action.payload
            },
            setOrder(state, action:PayloadAction<string>){
                state.params.orderBy= action.payload
            },
            addBooks(state,action:PayloadAction<BookList>){
                state.books=action.payload
            },
            addBookInfo(state,action: PayloadAction<Items>){
                state.bookInfo = action.payload
            },
            loadMoreBooks(state, action){
                state.books.items
                 = [...state.books.items, ...action.payload.data]
            },
            setLoading(state, action: PayloadAction<boolean>){
                state.isLoading = action.payload
            }
    }
})
export const {setCategory,setOrder,
              addBooks,addBookInfo,
              setValue,loadMoreBooks,setLoading} = reducer.actions
export default reducer.reducer
import axios from "axios";



const instance = axios.create({  
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
  withCredentials:false
})
const apiKEY = "AIzaSyArM00tzwXzYxpeRbUpA4ifDUc3oYrbplc";
export const userAPI={
    async loadForAll(value,orderBy,startIndex){
        const response = await instance.get(`?q="${value}"+intitle:${value}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=30&key=${apiKEY}`);
        const data = response.data.items;
        return data
    
    },
    async loadForCategory(value,orderBy,startIndex,category){
        const response = await instance.get(`?q="${value}"+intitle:${value}+subject:${category}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=30&key=${apiKEY}`);
        const data = response.data.items;
        return data




}}
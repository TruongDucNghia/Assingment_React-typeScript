import { CategoryType } from "../types/category";
import instance from "./instance";

export const addcate = (data: CategoryType) =>{
    const url = `/category`
    return instance.post(url, data)
}

export const listCate = () =>{
    const url = '/category'
    return instance.get(url)
}
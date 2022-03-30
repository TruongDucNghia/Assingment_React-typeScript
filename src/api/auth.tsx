import { UserType } from "../types/user";
import instance from "./instance";

export const registers = (data: UserType) =>{
    const url = `/users`
    return instance.post(url, data)
}

export const login = (data: UserType) =>{
    const url = `/login`
    return instance.post(url, data)
}
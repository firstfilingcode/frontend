import axios from "axios";
export const BASE_URL = 'https://accounts.rusoft.in/api';

export const Timeout = (time) => {
    let controller = new AbortController();
    setTimeout(() => controller.abort(), time * 1000);
    return controller;
};

export const myAxios = axios.create({
    baseURL: BASE_URL,
})




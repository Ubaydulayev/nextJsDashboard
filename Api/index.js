import axios from "axios"

export const getUsers = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=10`);
        return {succes : true , data: res.data }
    }catch (error) {
        console.error("error");
        return { succes: false }
    }
}

export const getTodos = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=12`);
        return {succes : true , data: res.data }
    }catch (error) {
        console.error("error");
        return { succes: false }
    }
}

export const getPosts = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=12`);
        return {succes : true , data: res.data }
    }catch (error) {
        console.error("error");
        return { succes: false }
    }
}

export const getAlbums = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=12`);
        return {succes : true , data: res.data }
    }catch (error) {
        console.error("error");
        return { succes: false }
    }
}

export const getPhotos = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=12`);
        return {succes : true , data: res.data }
    }catch (error) {
        console.error("error");
        return { succes: false }
    }
}
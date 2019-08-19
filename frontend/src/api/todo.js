import axios from "axios";
const URL = "http://localhost:3003/api/todos";

export const Api = {
    searchTodo: (term = '') => 
        axios.get(`${URL}?description__regex=/${term}/&sort=-createdAt`),

    addTodo: description => 
        axios.post(URL, { description }),
        
    deleteTodo: id =>
        axios.delete(`${URL}/${id}`),
}
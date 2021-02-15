import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    googleBooksSearch: function(query) {
        return axios.get(BASEURL + query)
    },
    saveBook: function(bookData) {
        console.log(bookData);
        return axios.post("/api/books/", bookData);
    },

    // getBooks: function() {
    //     return axios.get("/api/books");
    // },
    // getBook: function(id) {
    //     return axios.get("api/books/" + id);
    // },
    // deleteBook: function(id) {
    //     return axios.delete("api/books/" + id);
    // }
};
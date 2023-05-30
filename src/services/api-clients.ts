import axios from "axios";

// Creating an axios instance with custom configuration

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9680f9848b5a41f39902b04ad6bce6db" // My rawg api key
    }
})
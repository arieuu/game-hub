import axios from "axios";

// Creating an axios instance with custom configuration

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "669698f8868344188dccd2a0d008b224" // My rawg api key
    }
})
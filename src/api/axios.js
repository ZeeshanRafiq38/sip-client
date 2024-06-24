import axios from "axios";
export const baseUrl = "http://localhost:5500";
const api = axios.create({
    baseURL: baseUrl,
});

// Add a request interceptor to include the token in the request headers
api.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem("userLogin"));
        const token = user?.token;
        // console.log(token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// Add a response interceptor to handle token expiration (status code 401)
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error);
        if (error?.response?.status === 401) {
            // Perform logout action (e.g., clear token and redirect to login page)
            localStorage.removeItem("userLogin");
            window.location.href = "/login"; // Redirect to the login page
        }
        return Promise.reject(error);
    }
);
export default api;

import axios from "axios";


const API_URL = "https://dummyjson.com";
export default class AuthService {
    static async login(data) {
        try {
            const response = await axios.post(API_URL + "/auth/login", {
                data
            });
            return response.data;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
    
    static async register(email, password) {
        try {
            const response = await axios.post(API_URL + "/register", {
                email,
                password,
            });
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

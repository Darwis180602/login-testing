import axios from "axios";

const API_URL = "https://dummyjson.com";
export default class ProductService {
    static async getProducts() {
        try {
            const response = await axios.get(API_URL + "/products?limit=200");
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async getProduct(id) {
        try {
            const response = await axios.get(API_URL + "/products/" + id);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async addProduct(product) {
        try {
            const response = await axios.post(API_URL + "/products/add", product);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async updateProduct(id, product) {
        try {
            const response = await axios.put(API_URL + "/products/" + id, product);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async deleteProduct(id) {
        try {
            const response = await axios.delete(API_URL + "/products/" + id);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

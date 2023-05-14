import { BASE_URL } from "@env";
import axios from "axios"
export async function productGet() {

    const axiosObject = axios.create({
        baseURL: "http://10.0.2.2:8000/products",
        headers: {
            'Access-Control-Allow-Credentials':true,
            "Content-Type": "application/json",
        },
        method: "GET"
    });
    return axiosObject.get("/");
}

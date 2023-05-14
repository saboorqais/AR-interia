import { BASE_URL } from "@env";
import axios from "axios"
export async function categoryGet(limit:number) {

    const axiosObject = axios.create({
        baseURL: `http://10.0.2.2:8000/category/?limit=${limit}`,
        headers: {
            'Access-Control-Allow-Credentials':true,
            "Content-Type": "application/json",
        },
        method: "GET"
    });
    return axiosObject.get("/");
}

export async function categoryGetProduct(category_id:number) {

    const axiosObject = axios.create({
        baseURL: `http://10.0.2.2:8000/category/${category_id}/products`,
        headers: {
            'Access-Control-Allow-Credentials':true,
            "Content-Type": "application/json",
        },
        method: "GET"
    });
    return axiosObject.get("/");
}

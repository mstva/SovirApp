import axios from "axios";
import {api} from "./urlConfig";

export let allProducts = []

axios.get(`${api}/products`)
    .then(response => allProducts = response.data.products)
    .catch(error => console.log(error))
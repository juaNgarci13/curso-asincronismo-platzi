import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const anotherFn = async (url) => {
    try {
        const products = await fetchData(`${url}/products`)
        const idProduct = await fetchData(`${url}/products/${products[0].id}`)
        const category = await fetchData(`${url}/categories/${idProduct.category.id}`)
        console.log(products[0], idProduct.title, category.name);
    } catch (err) {
        console.log(err);
    }
}

anotherFn(API);
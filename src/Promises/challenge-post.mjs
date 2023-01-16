import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(api, data) {
    const response = fetch(api, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response;
}

const data = {
    "title": "Monitor",
    "price": 100_000_000,
    "description": "A monito pc",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log("Error Post: ", err))

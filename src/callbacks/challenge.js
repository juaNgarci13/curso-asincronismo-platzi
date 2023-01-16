const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi, callback) {
    let xHttp = new XMLHttpRequest();

    xHttp.open('GET', urlApi, true);

    xHttp.onreadystatechange = function (event) {
        if (xHttp.readyState === 4) {
            if (xHttp.status === 200) {
                callback(null, JSON.parse(xHttp.responseText))
            } else {
                const error = new Error("Error", + urlApi);
                return callback(error, null);
            }
        }
    }

    xHttp.send();
}



fetchData(`${API}/products`, function (err, data) {
    if (err) return console.log("Error1", err);
    fetchData(`${API}/products/${data[0].id}`, function (err2, data2) {
        if (err2) return console.log("Error2", err2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (err3, data3) {
            if (err3) return console.log("Error3", err3);
            console.log("1", data[0]);
            console.log("2", data2.title);
            console.log("3", data3.name);
        })
    })
})

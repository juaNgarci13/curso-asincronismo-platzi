# PLAYGROUND : CLASE 17

En este desafío vas a conectarte a una API que no existe, por ende debes capturar el error haciendo uso de try/catch y lanzar un error con el mensaje API Not Found.

Para lanzar el error debes usar el siguiente bloque de código:

```js
throw new Error('API Not Found');
```

Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada, dentro del cuerpo de la función runCode debes escribir tu solución.

Ejemplo:
```js
Input:
await runCode();

Output:
Error: API Not Found
```

## SOLUTION: 

```JS
export async function runCode() {
  const url = 'https://domain-api-com';
  try {
    const response = await fetch(url);
   } catch (err) { 
    throw new Error('API Not Found');
  }

}
```
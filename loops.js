console.log("Hola")

// Iteración #1: Usa includes

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (const product of products) {
    if(product.includes("Camiseta")) {
        console.log(product)
    }
}

// **Iteración #2: Condicionales avanzados**

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

// Puedes usar este array para probar tu función:

// **Iteración #3: Probando For...of**

// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

// Puedes usar este array:

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const places of placesToTravel) {
    console.log(places)   
}


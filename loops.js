// console.log("Hola")

// Iteración #1: Usa includes

// // Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (const product of products) {
    if(product.includes("Camiseta")) {
        console.log(product)
    }
}

// **Iteración #2: Condicionales avanzados**

// // Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

// // Puedes usar este array para probar tu función:

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

const approvedAlumns = alumns.map(function (alumn) {
    let approvedAlumn = alumn
    if((alumn.T1===true && alumn.T2===true) || (alumn.T1===true && alumn.T3===true) || (alumn.T2===true && alumn.T3===true)){
        approvedAlumn.isApproved = true;
        console.log(`Felicidades ${alumn.name} has aprobado el semestre`)
    }else {
        approvedAlumn.isApproved = false;
        console.log(`Lo sentimos ${alumn.name} has perdido el semestre`)
    }
    return approvedAlumn;
});

console.log(approvedAlumns)

// **Iteración #3: Probando For...of**

// // Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

// // Puedes usar este array:

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const places of placesToTravel) {
    console.log(places)
}

// **Iteración #4: Probando For...in**

// // Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const i in alien) {
    console.log(alien[i])
}

// **Iteración #5: Probando For** PENDIENTE

// // Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array:

const placesToTravel5 = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
];

for (let index = 0; index < placesToTravel5.length; index++) {
    if (placesToTravel5[index].id === 11 || placesToTravel5[index].id === 40){
        placesToTravel5.splice(index, 1);
    };    
};
console.log(placesToTravel5);

// **Iteración #6: Mixed For...of e includes** PENDIENTE

// Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

for (const toy6 of toys) {
    if (toy6.name.includes('gato')) {
        let toy = toys.indexOf(toy6);
        toys.splice(toy, 2)
    };
};

console.log(toys);

// **Iteración #7: For...of avanzado**

// Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:

const popularToys = [];
const toys7 = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

for (const toy7 of toys7) {
  if (toy7.sellCount > 15) {
    popularToys.push(toy7);
  }
}

console.log(popularToys);
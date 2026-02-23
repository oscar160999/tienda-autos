const autos = [
    { marca: "Toyota", modelo: "Corolla", precio: 20000 },
    { marca: "Honda", modelo: "Civic", precio: 22000 },
    { marca: "Ford", modelo: "Mustang", precio: 45000 },
    { marca: "Chevrolet", modelo: "Camaro", precio: 47000 },
    { marca: "Nissan", modelo: "Sentra", precio: 18000 },
    { marca: "BMW", modelo: "Serie 3", precio: 52000 }
];

const inputBusqueda = document.getElementById("busqueda");
const precioMin = document.getElementById("precioMin");
const precioMax = document.getElementById("precioMax");
const resultados = document.getElementById("resultados");

function mostrarAutos(lista) {
    resultados.innerHTML = "";
    if (lista.length === 0) {
        resultados.innerHTML = "<p>No se encontraron resultados.</p>";
        return;
    }

    lista.forEach(auto => {
        const card = document.createElement("div");
        card.classList.add("auto-card");
        card.innerHTML = `
            <h3>${auto.marca} ${auto.modelo}</h3>
            <p>Precio: $${auto.precio}</p>
        `;
        resultados.appendChild(card);
    });
}

function filtrar() {
    const texto = inputBusqueda.value.toLowerCase();
    const min = parseInt(precioMin.value);
    const max = parseInt(precioMax.value);

    const filtrados = autos.filter(auto =>
        (auto.marca.toLowerCase().includes(texto) ||
         auto.modelo.toLowerCase().includes(texto)) &&
        auto.precio >= min &&
        auto.precio <= max
    );

    mostrarAutos(filtrados);
}

inputBusqueda.addEventListener("input", filtrar);
precioMin.addEventListener("change", filtrar);
precioMax.addEventListener("change", filtrar);

mostrarAutos(autos);
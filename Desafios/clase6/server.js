const express = require("express");
const contenedorImport = require("./Contenedor.js");

const app = express();
let funcionesArchivos = new contenedorImport("productos.txt");

const PORT = 8080;

app.get("/productos", async (req, res) => {
  const todosLosProductos = await funcionesArchivos.getAll();
  res.send(todosLosProductos);
});

app.get("/productoRandom", async (req, res) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * max) + min);
  }

  const todosLosProductos = await funcionesArchivos.getAll();

  let idNumber = getRandomInt(1, todosLosProductos.length);

  funcionesArchivos.getById(idNumber).then((data) => res.send(data));
});

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando puerto ${PORT}`);
});

server.on("error", (error) => {
  console.error(error);
});

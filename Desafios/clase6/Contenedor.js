const fs = require("fs");

class Contenedor {
  constructor(nombreArchivo) {
    this.urlArchivo = `./${nombreArchivo}`;
    if (!fs.existsSync(this.urlArchivo)) {
      fs.writeFileSync(`./${nombreArchivo}`, "[]");
    }
  }

  //** metodos privados para reutilizacion de codigo **//

  async #readFile() {
    const res = await fs.promises.readFile(`./${this.urlArchivo}`, "utf-8");
    return JSON.parse(res);
  }

  async #writeFile(data) {
    await fs.promises.writeFile(
      `./${this.urlArchivo}`,
      JSON.stringify(data, null, 2)
    );
  }

  //** Metodos publicos **//

  async save(object) {
    const data = await this.#readFile();
    const id = data.length == 0 ? 1 : data[data.length - 1].id + 1;
    const objectOtAdd = { ...object, id: id };
    const newData = [...data, objectOtAdd];
    this.#writeFile(newData);
    return data;
  }

  async getById(id) {
    try {
      const data = await this.#readFile();
      let productoId = data.find((element) => element.id == id);
      if (productoId != undefined) {
        return productoId;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getAll() {
    try {
      const data = await this.#readFile();
      if (data) {
        return data;
      } else {
        console.log("No hay productos");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async deleteById(id) {
    try {
      const data = await this.#readFile();
      let newData = data.filter((element) => element.id != id);
      if (newData) {
        this.#writeFile(newData);
      } else {
        console.log("No se encontro el producto a eliminar");
      }
    } catch (error) {
      console.error(error);
    }
  }

  deleteAll = () => {
    this.#writeFile([]);
  };
}

module.exports = Contenedor;

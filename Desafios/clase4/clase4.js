const Contenedor = require ("./Contenedor")
const Producto = require("./productos")

let producto1 = new Producto(
    (title = "Paleta de pintor"),
    (price = 168.25),
    (thumbnail =
      "https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-06-512.png")
  );
  
  let producto2 = new Producto(
    (title = "Microscopio"),
    (price = 1250.35),
    (thumbnail =
      "https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-10-512.png")
  );
  
  let producto3 = new Producto(
    (title = "Lapiz HB"),
    (price = 15.1),
    (thumbnail =
      "https://cdn4.iconfinder.com/data/icons/to-cool-for-school/512/pencil-512.png")
  );
  
  let producto4 = new Producto(
    (title = "Tijera"),
    (price = 40.35),
    (thumbnail =
      "https://cdn4.iconfinder.com/data/icons/to-cool-for-school/512/closed-scissor-512.png")
  );


const productos = new Contenedor("productos.txt")



//* Descomentar para agregar productos, cambiar numero para guardar diferentes productos */

// productos.save(producto4)

//* Pruebas de metodos */

// productos.getById(2).then((res)=>console.log(res))
// productos.deleteById(2)
// productos.getAll().then((res)=>console.log(res))

// productos.deleteAll()
class Usuario {
  constructor(nombre, apellido) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.libros = []),
      (this.mascotas = []);
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`
  }

  addMascota(nombreMascota) {
    this.mascotas.push(nombreMascota)
  }

  countMascotas(){
    return this.mascotas.length
  }

  addBook(nombre, autor){
    this.libros.push({"nombre":nombre,"autor":autor});
  }

  getBooksNames(){
    const booksNames = []
    this.libros.forEach(element => {
      booksNames.push(element.nombre)
    });
    return booksNames
  }

}

const usuarioAndres = new Usuario("Andres", "Rubio");


console.log(usuarioAndres.getFullName())

usuarioAndres.addMascota("Titan");
usuarioAndres.addMascota("Kovu");
usuarioAndres.addMascota("Spock");

console.log(usuarioAndres.countMascotas());

usuarioAndres.addBook("Jk Rowling","Harry Postre y la torta de chocolate");
usuarioAndres.addBook("Jaime Oliver","Cocinando la piedra filosofal");

console.log(usuarioAndres.getBooksNames());
console.log(usuarioAndres);
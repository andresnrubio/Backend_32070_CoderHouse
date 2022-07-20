const fs = require('fs')
const { resourceUsage } = require('process')

class Contenedor {

constructor(nombreArchivo){
    fs.writeFileSync(`./${nombreArchivo}`,'[]'),
    (this.urlArchivo = `./${nombreArchivo}`)
}

#readFile(){
   const data =  JSON.parse(fs.readFileSync(`./${this.urlArchivo}`,'utf-8')) 
   return data
}

#writeFile(data){
    fs.writeFileSync(`./${this.urlArchivo}`,JSON.stringify(data));
}


save(object){
    const data =  this.#readFile()
    const id = data.length == 0 ? 1 : data[data.length - 1].id + 1
    const objectOtAdd = {...object, "id":id};
    data.push(objectOtAdd);
    this.#writeFile(data)
    return data
}

getById(id){
    const data = this.#readFile()
    let productoId = data.find((element) => element.id == id);
    return productoId
}

getAll(){
const data = this.#readFile()
   return data
}

deleteById(id){
    const data = this.#readFile()
    let newData = data.filter((element) => element.id != id);
    this.#writeFile(newData)
}

deleteAll=()=>{
    fs.writeFileSync(`./${this.urlArchivo}`,"[]")
}

}


module.exports = Contenedor
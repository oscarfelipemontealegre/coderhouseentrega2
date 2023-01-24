const fs = require ('fs');
const { findSourceMap } = require('module');
const { json } = require('node:stream/consumers');
const { join } = require('path');

const datos = './datos.json';

class ProductManager{
    
async addProduct(productos){
    try {
        const listaProducto = await this.getProduct()
        listaProducto.push(productos)
        await fs.promises.writeFile(datos,JSON.stringify(listaProducto))
    } catch (error) {
        console.log(error)
    }
}

async getProduct(){
    try {
        if (fs.existsSync(datos)){
            const productos = await fs.promises.readFile(datos,'utf-8')
            const productosJS = JSON.parse(productos)
            return productosJS
        }else{
            return []
        }
    } catch (error) {
        console.log(error)
    }
}

async Id(){
    const datos = this.getProduct();
    try {
        const NuevoId;
        datos.length === 0 ? NuevoId = 1:NuevoId =datos[datos.length-1].Id+1;
        

        const nuevoProducto={ ...Id, id:nuevoId};
        datos.push(nuevoProducto)
        await this.writeFile(datos);
        return nuevoProducto.id;

    } catch (error) {
        console.log(error)
    }
}

async getFindId(){
    const datos = this.getProduct();
    try {
        const Id =datos.find(Id => datos.id === Id);
        return Id ? Id: null;

    } catch (error) {
        console.log(error)
    }
}

async getDelete(){
    const datos = this.getProduct();
    try {
        datos = datos.filter(datos => datos.id != id);
        await this.writeFile(datos);
    } catch (error) {
        console.log(error)
    }
}



}

const producto = new ProductManager()

async function entrega () {
const getProducts = await producto.getProduct()
console.log(getProducts)

const listaProducto1 ={
    "title": "producto prueba",
    "description":"Este es un producto prueba",
    "price":200,
    "thumbnail":"Sin imagen",
    "code":"abc123",
    "stock":25
}

const listaProducto2 ={
    "title": "producto prueba1",
    "description":"Este es un producto prueba1",
    "price":230,
    "thumbnail":"Sin imagen1",
    "code":"abc1234",
    "stock":10
}
const listaProducto3 ={
    "title": "producto prueba2",
            "description":"Este es un producto prueba2",
            "price":290,
            "thumbnail":"Sin imagen3",
            "code":"abc12345",
            "stock":20
}

await producto.addProduct(listaProducto1)
await producto.addProduct(listaProducto2)
await producto.addProduct(listaProducto3)


}



entrega()
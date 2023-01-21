const fs = require ('fs');
const { findSourceMap } = require('module');
const { json } = require('node:stream/consumers');
const { join } = require('path');

const datos = './datos.json';

class ProductManager{
    
async addProduct(producto){
    try {
        const datosProductos = await this.getProduct()
        datosProductos.push(productos)
        await fs.promises.writeFile(producto,JSON.stringify(datosProductos))
    } catch (error) {
        
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

async getProductById(){
    try {
        if (fs.existsSync(id)){
            const productoId = await fs.identify(id)
        }else{
            return ('el producto se encuentra')
        }
    } catch (error) {
        console.log('el producto no se encuentra')
    }
}

async getDelete(){
    try {
        if (fs.existsSync(id)){
            const borrarProducto = await fs.unlink(id)
        }else{
            return ('el producto se encuentra')
        }
    } catch (error) {
        console.log('el producto no se encuentra')
    }
}
#agregarId(){
    let id = 1
    if (this.productoId.length!==0){
        id = this.productoId[this.productoId.length-1].id+1
    }
    return id
}

}

const producto = new ProductManager()

async function entrega () {
const getProduct = await producto.getProduct()
console.log(getProduct)

const getProductById = await getProductById.productoId
console.log(getProductById)

const getDelete = await getProductById.productoId
console.log (getDelete)
}



entrega()
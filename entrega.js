const fs = require ('fs');
const { findSourceMap } = require('module');
const { json } = require('node:stream/consumers');
const { join } = require('path');

const datos = './datos.json';

class ProductManager{
    
/*async addProduct(productos){
    try {
        const listaProducto = await this.getProduct()
        listaProducto.push(productos)
        await fs.promises.writeFile(datos,JSON.stringify(listaProducto))
        const datoId = await this.getProduct();
        if (datoId.length ===0){
            productos.id = 1
            datoId.push(productos);
            await fs.promises.writeFile(datos,JSON.stringify(datoId,null,'\t'));
        }
    } catch (error) {
        console.log(error) 
    }
}*/

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

addProduct = async( productos)=>{
try {
    const datoId= await this.getProduct();
    if (datoId.length ===0){
        productos.id = 1;
        datoId.push(productos);
        await fs.promises.writeFile(datos,JSON.stringify(datoId,null,'\t'));
    }else{
        productos.id=datoId[datoId.length-1].id+1;
        datoId.push(productos);
        await fs.promises.writeFile(datos,JSON.stringify(datoId,null,'\t'));
    }
    
} catch (error) {
    console.log(error)
}
}



getFindId = async  id =>{
    const productos = await this.getProduct();
    try {
        const Id = productos.find(Id => productos.id === Id);
        return Id ? Id: null;


    } catch (error) {
        console.log(error)
    }
}

getDelete = async id =>{
    const productos = await this.getProduct();
    try {
        const indexOfElement = productos.findIndex(dato => dato.id != id);
        productos.splice(indexOfElement,1);
        await this.writeFile(productos);
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
    "itle": "producto1",
    "description":"Este es un producto prueba",
    "price":200,
    "thumbnail":"Sin imagen",
    "code":"abc123",
    "stock":25
}

const listaProducto2 ={
    "title": "producto2",
    "description":"Este es un producto prueba1",
    "price":230,
    "thumbnail":"Sin imagen1",
    "code":"abc1234",
    "stock":10
}
const listaProducto3 ={
            "title": "producto3",
            "description":"Este es un producto prueba2",
            "price":290,
            "thumbnail":"Sin imagen3",
            "code":"abc12345",
            "stock":20
}
const listaProducto4 ={
    "title": "producto4",
    "description":"Este es un producto prueba2",
    "price":290,
    "thumbnail":"Sin imagen3",
    "code":"abc12345",
    "stock":20
}




//await producto.addProduct(listaProducto3)
await producto.getFindId(3)
    
}





entrega();
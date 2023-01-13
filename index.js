const { profileEnd } = require('console')
const fs = require('fs')
const { json } = require('node:stream/consumers')
const datos = './datos.json'

class ProductManager{
    constructor (){
        this.productos=[]
    } 
}

    async getProductos (productos) {
        try {
            const dataproductos = await this.consultarProductos()
            dataproductos = push(productos)
        } catch (error) {
            
        }
    }


    async consultarProductos(){
        try {
            if (fs.existsSync(datos)){
                const productos = await fs.promises.readFile(datos, id)
                const productosJs = JSON.parse (productos)
                return productosJs
            }else{
                return []
            }
        } catch (error) {
            console.log(error)
        }
    }

    const productos1= new ProductManager()

    async function entrega2 (){
        const consultarProductos = await entrega2.consultarProductos()
        console.log(consultarProductos)
    }

const fs = require('fs')
const { json } = require('node:stream/consumers')
const datos = './datos.json'

class ProductManager{
    constructor (){
        this.productos=[datos]
    } 

}


    getProductos (datos) {
        try {
            const dataproductos = await this.consultarProductos()
            dataproductos = push(datos)
        } catch (error) {
            
        }
    }


    consultarProductos(){
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

        #agregarId(){
            let id = 1
            if (this.datos.length!==0){
                id = this.datos[this.datos.length-1].id+1
            }
            return id
        }
        
    }

    const productos = new ProductManager()

    async function entrega2 (){
        const consultarProductos = await entrega2.consultarProductos()
        console.log(consultarProductos)
    }


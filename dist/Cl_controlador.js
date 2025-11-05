import Cl_mProducto from "./Cl_mProducto.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarProducto({ ProductoData, callback, }) {
        this.modelo.agregarProducto({
            mercancia: new Cl_mProducto(ProductoData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    ProductosRegistrados() {
        return this.modelo.listar();
    }
}

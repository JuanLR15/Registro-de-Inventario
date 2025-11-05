import Cl_mProducto, { iProducto } from "./Cl_mProducto.js";
import Cl_mInventario from "./Cl_mInventario.js";
import Cl_vInventario from "./Cl_vInventario.js";

export default class Cl_controlador {
  public modelo: Cl_mInventario;
  public vista: Cl_vInventario;
  constructor(modelo: Cl_mInventario, vista: Cl_vInventario) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarProducto({
    ProductoData,
    callback,
  }: {
    ProductoData: iProducto;
    callback: Function;
  }): void {
    this.modelo.agregarProducto({
      mercancia: new Cl_mProducto(ProductoData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  ProductosRegistrados(): iProducto[] {
    return this.modelo.listar();
  }
}
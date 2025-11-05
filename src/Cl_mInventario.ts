import Cl_mProducto, { iProducto } from "./Cl_mProducto.js";

export default class Cl_mInventario {
  private registro: Cl_mProducto[] = [];
  agregarProducto({
    mercancia,
    callback,
  }: {
    mercancia: Cl_mProducto;
    callback: (error: string | false) => void;
  }): void {
    let error = mercancia.error();
    if (error) {
      callback(error);
      return;
    }
    let existe = this.registro.find((c) => c.producto === mercancia.producto);
    if (existe) {
      callback("Este producto ya está registrado.");
      return;
    }
    this.registro.push(mercancia);
    callback(false);
  }
  listar(): iProducto[] {
    let lista: iProducto[] = [];
    this.registro.forEach((mercancia) => {
      lista.push(mercancia.toJSON());
    });
    return lista;
  }
}
import { iProducto } from "./Cl_mProducto.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";

export default class Cl_vInventario extends Cl_vGeneral {
  private btAgregarProducto: HTMLButtonElement;
  private divProductosRegistrados: HTMLDivElement;
  constructor() {
    super({ formName: "registro" });
    this.btAgregarProducto = this.crearHTMLButtonElement("btAgregarProducto", {
      onclick: () => this.agregarProducto(),
    });
    this.divProductosRegistrados = this.crearHTMLElement(
      "divProductosRegistrados",
      {
        type: tHTMLElement.CONTAINER,
        refresh: () => this.mostrarGruposRegistrados(),
      }
    ) as HTMLDivElement;
  }
  mostrarGruposRegistrados() {
    this.divProductosRegistrados.innerHTML = "";
    let inventario = this.controlador?.ProductosRegistrados();
    if (!inventario) return;
    inventario.forEach((Producto: iProducto) => {
      this.divProductosRegistrados.innerHTML += `<tr>
            <td>${Producto.producto}</td>
            <td>${Producto.cantidad}</td>
            <td>${Producto.precio}</td>
        </tr>`;
    });
  }
  agregarProducto() {
    let producto = prompt("Ingrese el nombre del Producto:");
    if (!producto) return;
    let cantidad = prompt("Ingrese la cantidad de productos:");
    if (!cantidad) return;
    let precio = prompt("Ingrese el precio del producto:");
    if (!precio) return;
    this.controlador!.agregarProducto({
      ProductoData: {
        producto: producto,
        cantidad: cantidad,
        precio: precio,
      },
      callback: (error: string | false) => {
        if (error) alert(error);
        this.refresh();
      },
    });
  }
}
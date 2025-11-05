import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vInventario extends Cl_vGeneral {
    constructor() {
        super({ formName: "registro" });
        this.btAgregarProducto = this.crearHTMLButtonElement("btAgregarProducto", {
            onclick: () => this.agregarProducto(),
        });
        this.divProductosRegistrados = this.crearHTMLElement("divProductosRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarGruposRegistrados(),
        });
    }
    mostrarGruposRegistrados() {
        var _a;
        this.divProductosRegistrados.innerHTML = "";
        let inventario = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.ProductosRegistrados();
        if (!inventario)
            return;
        inventario.forEach((Producto) => {
            this.divProductosRegistrados.innerHTML += `<tr>
            <td>${Producto.producto}</td>
            <td>${Producto.cantidad}</td>
            <td>${Producto.precio}</td>
        </tr>`;
        });
    }
    agregarProducto() {
        let producto = prompt("Ingrese el nombre del Producto:");
        if (!producto)
            return;
        let cantidad = prompt("Ingrese la cantidad de productos:");
        if (!cantidad)
            return;
        let precio = prompt("Ingrese el precio del producto:");
        if (!precio)
            return;
        this.controlador.agregarProducto({
            ProductoData: {
                producto: producto,
                cantidad: cantidad,
                precio: precio,
            },
            callback: (error) => {
                if (error)
                    alert(error);
                this.refresh();
            },
        });
    }
}

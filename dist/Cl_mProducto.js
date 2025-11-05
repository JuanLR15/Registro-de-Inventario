export default class Cl_mProducto {
    constructor({ producto, cantidad, precio }) {
        this._producto = "";
        this._cantidad = "";
        this._precio = "";
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    set producto(producto) {
        this._producto = producto.trim().toUpperCase();
    }
    get producto() {
        return this._producto;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad.trim();
    }
    get cantidad() {
        return this._cantidad;
    }
    set precio(precio) {
        this._precio = precio.trim().toLowerCase();
    }
    get precio() {
        return this._precio;
    }
    error() {
        if (this._producto.length === 0)
            return "Este espacio no puede estar vacio";
        if (this._cantidad.length === 0)
            return "La cantidad no puede estar vacia";
        return false;
    }
    toJSON() {
        return {
            producto: this._producto,
            cantidad: this._cantidad,
            precio: this._precio,
        };
    }
}

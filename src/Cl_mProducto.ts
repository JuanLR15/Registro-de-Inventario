export interface iProducto {
    producto: string;
    cantidad: string;
    precio: string;
}

export default class Cl_mProducto {
    private _producto: string;
    private _cantidad: string;
    private _precio: string;

    constructor({producto, cantidad, precio}: {producto: string; cantidad: string; precio: string;}){
        this._producto = "";
        this._cantidad = "";
        this._precio = "";
        this.producto = producto;
        this.cantidad = cantidad;  
        this.precio = precio;      
    }

    set producto(producto: string) {
        this._producto = producto.trim().toUpperCase(); 
    }

    get producto(): string {
        return this._producto; 
    }

    set cantidad(cantidad: string) {
        this._cantidad = cantidad.trim(); 
    }

    get cantidad(): string {
        return this._cantidad; 
    }

    set precio(precio: string) {
        this._precio = precio.trim().toLowerCase(); 
    }

    get precio(): string {
        return this._precio; 
    }

    error(): string | false {
        if(this._producto.length === 0)  
            return "Este espacio no puede estar vacio";
        if(this._cantidad.length === 0)  
            return "La cantidad no puede estar vacia";
        return false;
    }

    toJSON(): iProducto {
        return {
            producto: this._producto,
            cantidad: this._cantidad,
            precio: this._precio,
        }
    }
}







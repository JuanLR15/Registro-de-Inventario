export default class Cl_mInventario {
    constructor() {
        this.registro = [];
    }
    agregarProducto({ mercancia, callback, }) {
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
    listar() {
        let lista = [];
        this.registro.forEach((mercancia) => {
            lista.push(mercancia.toJSON());
        });
        return lista;
    }
}

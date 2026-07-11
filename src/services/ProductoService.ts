import { Producto } from "../models/ProductoModel.js";
import { productos } from "../data/ProductoData.js";

let siguienteId = 1;

export const crearProducto = (
    nombre: string,
    precio: number,
    stock: number
): Producto => {
    try {
        if (!nombre) {
            throw new Error("El nombre es obligatorio.");
        }
        if (precio <= 0) {
            throw new Error("El precio debe ser mayor que 0.");
        }
        if (stock < 0) {
            throw new Error("El stock no puede ser negativo.");
        }
        const producto: Producto = {
            id: siguienteId,
            nombre,
            precio,
            stock
        };
        productos.push(producto);
        siguienteId++;
        return producto;
    } catch (error) {
        throw error;
    }
};

export const obtenerProductos = (): Producto[] => {
    return productos;
};

export const obtenerProductoPorId = (
    id: number
): Producto | undefined => {
    return productos.find(producto => producto.id === id);
};

export const editarProducto = (
    id: number,
    nombre: string,
    precio: number,
    stock: number
): Producto => {
    try {
        const producto = obtenerProductoPorId(id);
        if (!producto) {
            throw new Error("Producto no encontrado.");
        }
        if (!nombre) {
            throw new Error("El nombre es obligatorio.");
        }
        if (precio <= 0) {
            throw new Error("El precio debe ser mayor que 0.");
        }
        if (stock < 0) {
            throw new Error("El stock no puede ser negativo.");
        }
        producto.nombre = nombre;
        producto.precio = precio;
        producto.stock = stock;
        return producto;
    } catch (error) {
        throw error;
    }
};

export const eliminarProducto = (
    id: number
): boolean => {
    try {
        const indice = productos.findIndex(producto => producto.id === id);
        if (indice === -1) {
            throw new Error("Producto no encontrado.");
        }
        productos.splice(indice, 1);
        return true;
    } catch (error) {
        throw error;
    }
};
import { Pedido } from "../models/PedidoModel.js";
import { pedidos } from "../data/PedidoData.js";
import { obtenerClientePorId } from "./ClienteService.js";
import { obtenerProductoPorId } from "./ProductoService.js";

let siguienteId = 1;

export const crearPedido = (
    idCliente: number,
    idProducto: number,
    cantidad: number
): Pedido => {
    try {
        const cliente = obtenerClientePorId(idCliente);
        if (!cliente) {
            throw new Error("Cliente no encontrado.");
        }
        const producto = obtenerProductoPorId(idProducto);
        if (!producto) {
            throw new Error("Producto no encontrado.");
        }
        if (cantidad <= 0) {
            throw new Error("La cantidad debe ser mayor que 0.");
        }
        if (cantidad > producto.stock) {
            throw new Error("No hay suficiente stock.");
        }
        const pedido: Pedido = {
            id: siguienteId,
            idCliente,
            idProducto,
            cantidad
        };
        producto.stock -= cantidad;
        pedidos.push(pedido);
        siguienteId++;
        return pedido;
    } catch (error) {
        throw error;
    }
};

export const obtenerPedidos = (): Pedido[] => {
    return pedidos;
};

export const obtenerPedidoPorId = (
    id: number
): Pedido | undefined => {
    return pedidos.find(pedido => pedido.id === id);
};

export const editarPedido = (
    id: number,
    cantidad: number
): Pedido => {
    try {
        const pedido = obtenerPedidoPorId(id);
        if (!pedido) {
            throw new Error("Pedido no encontrado.");
        }
        const producto = obtenerProductoPorId(pedido.idProducto);
        if (!producto) {
            throw new Error("Producto no encontrado.");
        }
        producto.stock += pedido.cantidad;
        if (cantidad <= 0) {
            throw new Error("La cantidad debe ser mayor que 0.");
        }
        if (cantidad > producto.stock) {
            producto.stock -= pedido.cantidad;
            throw new Error("No hay suficiente stock.");
        }
        pedido.cantidad = cantidad;
        producto.stock -= cantidad;
        return pedido;
    } catch (error) {
        throw error;
    }
};

export const eliminarPedido = (
    id: number
): boolean => {
    try {
        const indice = pedidos.findIndex(pedido => pedido.id === id);
        if (indice === -1) {
            throw new Error("Pedido no encontrado.");
        }
        const pedido = pedidos[indice];
        if (!pedido) {
            throw new Error("Pedido no encontrado.");
        } const producto = obtenerProductoPorId(pedido.idProducto);
        if (producto) {
            producto.stock += pedido.cantidad;
        }
        pedidos.splice(indice, 1);
        return true;
    } catch (error) {
        throw error;
    }
};
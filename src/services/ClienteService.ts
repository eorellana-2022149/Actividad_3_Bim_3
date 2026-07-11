import { Cliente } from "../models/ClienteModel.js";
import { clientes } from "../data/ClienteData.js";

let siguienteId = 1;

export const crearCliente = (
    nombre: string,
    telefono: string
): Cliente => {
    try {
        if (!nombre) {
            throw new Error("El nombre es obligatorio.");
        }
        if (!telefono) {
            throw new Error("El teléfono es obligatorio.");
        }
        const cliente: Cliente = {
            id: siguienteId,
            nombre,
            telefono
        };
        clientes.push(cliente);
        siguienteId++;
        return cliente;
    } catch (error) {
        throw error;
    }
};

export const obtenerClientes = (): Cliente[] => {
    return clientes;
};

export const obtenerClientePorId = (
    id: number
): Cliente | undefined => {
    return clientes.find(cliente => cliente.id === id);
};

export const editarCliente = (
    id: number,
    nombre: string,
    telefono: string
): Cliente => {
    try {
        const cliente = obtenerClientePorId(id);
        if (!cliente) {
            throw new Error("Cliente no encontrado.");
        }
        if (!nombre) {
            throw new Error("El nombre es obligatorio.");
        }
        if (!telefono) {
            throw new Error("El teléfono es obligatorio.");
        }
        cliente.nombre = nombre;
        cliente.telefono = telefono;
        return cliente;
    } catch (error) {
        throw error;
    }
};

export const eliminarCliente = (
    id: number
): boolean => {
    try {
        const indice = clientes.findIndex(cliente => cliente.id === id);
        if (indice === -1) {
            throw new Error("Cliente no encontrado.");
        }
        clientes.splice(indice, 1);
        return true;
    } catch (error) {
        throw error;
    }
};
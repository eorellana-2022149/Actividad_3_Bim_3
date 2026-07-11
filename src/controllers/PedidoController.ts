import {
    crearPedido,
    obtenerPedidos,
    obtenerPedidoPorId,
    editarPedido,
    eliminarPedido
} from "../services/PedidoService.js";

const leerNumero = (prompt: (mensaje: string) => string, mensaje: string): number => {
    return Number(prompt(mensaje));
};

const mostrarMenuPedidos = (): void => {
    console.log("\nPEDIDOS");
    console.log("1. Crear pedido");
    console.log("2. Listar pedidos");
    console.log("3. Buscar pedido");
    console.log("4. Editar pedido");
    console.log("5. Eliminar pedido");
    console.log("0. Regresar");
};

const crearPedidoMenu = (
    prompt: (mensaje: string) => string
): void => {
    try {
        const idCliente = leerNumero(prompt, "Ingrese el ID del cliente: ");
        const idProducto = leerNumero(prompt, "Ingrese el ID del producto: ");
        const cantidad = leerNumero(prompt, "Ingrese la cantidad: ");
        const pedido = crearPedido(
            idCliente,
            idProducto,
            cantidad
        );
        console.log("\nPedido creado correctamente.");
        console.table(pedido);
    } catch (error: any) {
        console.log(error.message);
    }
};

const listarPedidos = (): void => {
    const pedidos = obtenerPedidos();
    if (pedidos.length === 0) {
        console.log("\nNo hay pedidos registrados.");
        return;
    }
    console.table(pedidos);
};

const buscarPedido = (
    prompt: (mensaje: string) => string
): void => {
    const id = leerNumero(prompt, "Ingrese el ID del pedido: ");
    const pedido = obtenerPedidoPorId(id);
    if (!pedido) {
        console.log("Pedido no encontrado.");
        return;
    }
    console.table(pedido);
};

const editarPedidoMenu = (
    prompt: (mensaje: string) => string
): void => {
    try {
        const id = leerNumero(prompt, "Ingrese el ID del pedido: ");
        const cantidad = leerNumero(prompt, "Nueva cantidad: ");
        const pedido = editarPedido(
            id,
            cantidad
        );
        console.log("\nPedido actualizado correctamente.");
        console.table(pedido);
    } catch (error: any) {
        console.log(error.message);
    }
};

const eliminarPedidoMenu = (
    prompt: (mensaje: string) => string
): void => {
    try {
        const id = leerNumero(prompt, "Ingrese el ID del pedido: ");
        eliminarPedido(id);
        console.log("\nPedido eliminado correctamente.");
    } catch (error: any) {
        console.log(error.message);
    }
};

export const menuPedidos = (
    prompt: (mensaje: string) => string
): void => {
    let opcion = -1;
    while (opcion !== 0) {
        mostrarMenuPedidos();
        opcion = leerNumero(prompt, "Seleccione una opción: ");
        switch (opcion) {
            case 1:
                crearPedidoMenu(prompt);
                break;
            case 2:
                listarPedidos();
                break;
            case 3:
                buscarPedido(prompt);
                break;
            case 4:
                editarPedidoMenu(prompt);
                break;
            case 5:
                eliminarPedidoMenu(prompt);
                break;
            case 0:
                console.log("Regresando al menú principal...");
                break;
            default:
                console.log("Opción inválida.");
                break;
        }
    }
};
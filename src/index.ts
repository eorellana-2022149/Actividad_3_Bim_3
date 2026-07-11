import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Productos
import {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    editarProducto,
    eliminarProducto
} from "./services/ProductoService.js";

// Clientes
import {
    crearCliente,
    obtenerClientes,
    obtenerClientePorId,
    editarCliente,
    eliminarCliente
} from "./services/ClienteService.js";

// Pedidos
import {
    crearPedido,
    obtenerPedidos,
    obtenerPedidoPorId,
    editarPedido,
    eliminarPedido
} from "./services/PedidoService.js";
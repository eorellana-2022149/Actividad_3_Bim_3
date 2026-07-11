import PromptSync from "prompt-sync";

import { menuProductos } from "./controllers/ProductoController.js";
import { menuClientes } from "./controllers/ClienteController.js";
import { menuPedidos } from "./controllers/PedidoController.js";

const prompt = PromptSync();

const leerNumero = (mensaje: string): number => {
    return Number(prompt(mensaje));
};

const mostrarMenuPrincipal = (): void => {
    console.log("\nTIENDA");
    console.log("1. Productos");
    console.log("2. Clientes");
    console.log("3. Pedidos");
    console.log("0. Salir");
};

let opcion = -1;
while (opcion !== 0) {
    mostrarMenuPrincipal();
    opcion = leerNumero("Seleccione una opción: ");
    switch (opcion) {
        case 1:
            menuProductos(prompt);
            break;
        case 2:
            menuClientes(prompt);
            break;
        case 3:
            menuPedidos(prompt);
            break;
        case 0:
            console.log("\nPrograma finalizado.");
            break;
        default:
            console.log("\nOpción inválida.");
            break;
    }
}
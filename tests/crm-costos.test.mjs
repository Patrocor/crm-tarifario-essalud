import assert from "node:assert/strict";
import {
  agregarAlCarrito,
  actualizarCantidadCarrito,
  buscarEnCatalogo,
  formatearSoles,
  lineaDesdeTarifario,
  totalesCarrito,
} from "../src/crmCostos.js";

const consulta = {
  codigo: "0101001",
  descripcion: "Consulta Ambulatoria por Médico Especialista",
  subtotal: 27,
  igv: 4.86,
  precioTotal: 31.86,
  tipo: "prestacion",
  categoria: "ATENCIÓN  AMBULATORIA",
};

const curacion = {
  codigo: "0305002",
  descripcion: "CURACION GRANDE",
  subtotal: 31,
  igv: 5.58,
  precioTotal: 36.58,
  tipo: "prestacion",
  categoria: "PROCEDIMIENTOS EN TOPICO",
};

let carrito = [];
carrito = agregarAlCarrito(carrito, consulta, 1);
carrito = agregarAlCarrito(carrito, curacion, 1);
carrito = agregarAlCarrito(carrito, consulta, 1);

assert.equal(carrito.length, 2);
assert.equal(carrito[0].cantidad, 2);
assert.equal(carrito[0].total, 63.72);

carrito = actualizarCantidadCarrito(carrito, carrito[1].id, 3);
assert.equal(carrito[1].cantidad, 3);
assert.equal(carrito[1].total, 109.74);

const tot = totalesCarrito(carrito);
assert.equal(tot.subtotal, 54 + 93);
assert.equal(tot.total, 173.46);

const linea = lineaDesdeTarifario(consulta, 1);
assert.equal(linea.unitTotal, 31.86);

const hits = buscarEnCatalogo([consulta, curacion], "curacion");
assert.equal(hits.length, 1);
assert.equal(hits[0].codigo, "0305002");

assert.ok(formatearSoles(31.86).includes("31.86"));

console.log("crm-costos.test.mjs OK");

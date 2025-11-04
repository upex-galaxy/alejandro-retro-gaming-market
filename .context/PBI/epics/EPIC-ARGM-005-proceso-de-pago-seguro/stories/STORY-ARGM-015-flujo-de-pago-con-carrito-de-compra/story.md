---
id: STORY-ARGM-015
jira_id: null
epic_id: EPIC-ARGM-005
title: Como comprador, quiero poder añadir un producto a mi carrito de compra y proceder al pago de forma segura a través de una pasarela de pago integrada para completar mi pedido
priority: High
story_points: 10
assignee: null
status: To Do
---

## Description
Esta historia de usuario define el flujo de compra principal. Cubre la funcionalidad del carrito de compra y el proceso de checkout, culminando en la integración con una pasarela de pago para procesar la transacción de forma segura. Es una historia compleja y crítica para el negocio.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Añadir un producto al carrito y completar el pago**
- **Given:** Un comprador ha iniciado sesión y está en la página de un producto.
- **When:** Hace clic en "Añadir al carrito", luego va al carrito, procede al checkout, rellena su dirección de envío, introduce los datos de su tarjeta de crédito en el formulario de la pasarela de pago y confirma la compra.
- **Then:** El pago se procesa con éxito, el pedido se crea en el sistema con el estado "Pagado", el stock del producto se descuenta, y el comprador ve una página de confirmación y recibe un correo electrónico con los detalles del pedido.

**Scenario 2: Intento de pago con tarjeta rechazada**
- **Given:** Un comprador está en el paso de pago del checkout.
- **When:** Introduce los datos de una tarjeta de crédito que es rechazada por la pasarela de pago (ej. fondos insuficientes).
- **Then:** La pasarela de pago muestra un mensaje de error claro, el pedido no se crea y el comprador tiene la oportunidad de intentarlo con otra tarjeta.

**Scenario 3: El producto ya no está disponible**
- **Given:** Un comprador tiene un producto en su carrito.
- **When:** Procede al checkout, pero otro usuario ha comprado el mismo producto (el último en stock) unos segundos antes.
- **Then:** Se muestra un mensaje de error antes de realizar el pago, indicando que el producto ya no está disponible, y se elimina del carrito.

## Technical Notes (iniciales)
- La integración con la pasarela de pago (ej. Stripe) debe hacerse siguiendo las mejores prácticas de seguridad, utilizando sus SDKs y elementos de formulario para no manejar directamente los datos de la tarjeta (cumplimiento de PCI).
- El estado del carrito de compra puede gestionarse en el lado del cliente (localStorage) para usuarios no autenticados, pero debe sincronizarse con la base de datos cuando el usuario inicia sesión.
- El proceso de creación del pedido y descuento del stock debe ser una transacción atómica en la base de datos para evitar inconsistencias.
- El flujo de checkout debe ser lo más simple y directo posible para minimizar el abandono.

## Definition of Done
- [ ] Código implementado y funcionando para el carrito de compra y el flujo de checkout.
- [ ] Integración con la pasarela de pago completada y probada en un entorno de sandbox.
- [ ] Tests unitarios para la lógica del carrito y la creación de pedidos (cobertura > 80%).
- [ ] Tests de integración que verifiquen la comunicación con la pasarela de pago (usando mocks).
- [ ] Tests E2E (Playwright) que simulen el flujo completo de compra, desde añadir al carrito hasta la confirmación del pedido.
- [ ] Code review aprobado.
- [ ] Documentación de la API de pedidos y pagos actualizada.
- [ ] Desplegado en el entorno de staging.

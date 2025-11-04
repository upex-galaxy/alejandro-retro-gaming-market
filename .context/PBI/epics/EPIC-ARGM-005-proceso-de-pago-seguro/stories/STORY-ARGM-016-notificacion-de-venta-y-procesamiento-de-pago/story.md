---
id: STORY-ARGM-016
jira_id: null
epic_id: EPIC-ARGM-005
title: Como vendedor, quiero recibir una notificación cuando uno de mis productos ha sido vendido y el pago ha sido procesado para poder proceder con el envío
priority: High
story_points: 6
assignee: null
status: To Do
---

## Description
Esta historia de usuario se asegura de que el vendedor sea informado inmediatamente después de una venta exitosa. Una notificación clara y oportuna es crucial para que el vendedor pueda cumplir con el pedido rápidamente, lo que a su vez conduce a una buena experiencia para el comprador.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Notificación de venta exitosa**
- **Given:** Un pago para un pedido ha sido procesado con éxito.
- **When:** El sistema confirma la transacción.
- **Then:** El vendedor recibe una notificación por correo electrónico con el asunto "¡Has vendido un artículo!" y los detalles del pedido (producto, precio, dirección de envío del comprador).

**Scenario 2: El anuncio se marca como vendido**
- **Given:** Un pago para un pedido ha sido procesado con éxito.
- **When:** El sistema confirma la transacción.
- **Then:** El anuncio correspondiente al producto vendido se marca automáticamente como "Vendido" y ya no está disponible para la compra en el marketplace.

**Scenario 3: El pedido aparece en el panel del vendedor**
- **Given:** Un vendedor ha realizado una venta.
- **When:** Inicia sesión y va a su panel de "Mis Ventas".
- **Then:** Ve el nuevo pedido con el estado "Pendiente de Envío", junto con toda la información necesaria para gestionarlo.

## Technical Notes (iniciales)
- Utilizar webhooks de la pasarela de pago para recibir notificaciones de pago exitoso de forma fiable. El sistema no debe depender únicamente de la redirección del cliente después del pago.
- El servicio de notificaciones por correo electrónico debe ser robusto.
- Crear un nuevo estado "Pendiente de Envío" en el ciclo de vida del pedido.
- El panel de "Mis Ventas" del vendedor debe ser claro y proporcionar toda la información necesaria para el envío.

## Definition of Done
- [ ] Código implementado y funcionando para procesar las notificaciones de pago y actualizar el estado del pedido.
- [ ] Tests unitarios para la lógica de gestión de webhooks (cobertura > 80%).
- [ ] Tests de integración que simulen la recepción de un webhook de la pasarela de pago y verifiquen que se realizan todas las acciones correspondientes (creación de pedido, envío de correo, etc.).
- [ ] Tests E2E (Playwright) no son el foco principal aquí, pero se puede verificar que el pedido aparece en el panel del vendedor.
- [ ] Code review aprobado.
- [ ] Documentación del proceso de gestión de webhooks actualizada.
- [ ] Desplegado en el entorno de staging.

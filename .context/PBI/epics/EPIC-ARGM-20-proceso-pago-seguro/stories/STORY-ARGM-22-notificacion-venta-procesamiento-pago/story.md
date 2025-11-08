# Notificación de Venta y Procesamiento de Pago

**Jira Key:** ARGM-22
**Epic:** EPIC-ARGM-20 (Proceso de Pago Seguro)
**Priority:** High
**Story Points:** 3
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** seller
**I want to** receive a notification when one of my products has been sold and the payment has been processed
**So that** I can proceed with shipping.

---

## Description

Una vez que un comprador ha completado una transacción, el vendedor necesita ser informado de inmediato para poder gestionar el envío del producto. Esta funcionalidad asegura que el vendedor reciba una notificación clara y oportuna, confirmando que el pago ha sido procesado con éxito y que puede proceder con la logística.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Notificación de venta exitosa
- **Given:** Un comprador ha completado el proceso de pago de un producto de un vendedor.
- **When:** El pago es confirmado por la pasarela de pago.
- **Then:** El vendedor recibe una notificación por correo electrónico y/o en la plataforma (ej. un icono de campana) informándole de la venta, el producto vendido y los detalles del comprador para el envío.

### Scenario 2: Edge Case - Fallo en el envío de notificación
- **Given:** Una venta se ha completado y el pago ha sido procesado.
- **When:** El sistema de envío de notificaciones falla temporalmente.
- **Then:** El sistema debe reintentar el envío de la notificación o registrar el fallo para una revisión manual, asegurando que el vendedor sea informado eventualmente.

### Scenario 3: Happy Path - Visualización de ventas en panel
- **Given:** Un vendedor ha iniciado sesión.
- **When:** Navega a su panel de "Mis Ventas".
- **Then:** Ve una lista de todas sus ventas recientes, incluyendo el estado del pago y los detalles del comprador.

---

## Technical Notes

### Frontend
- Crear un componente `SalesNotification` para mostrar notificaciones en la UI.
- Crear una página `MySales` para que el vendedor vea su historial de ventas.

### Backend
- Implementar un webhook o un listener para recibir confirmaciones de pago de la pasarela de pago.
- Crear un servicio de notificación que envíe correos electrónicos y/o notificaciones push al vendedor.
- Actualizar el estado de la transacción y el saldo del vendedor.

### Database
- **Tablas:** `transactions`, `seller_accounts`.
- **Acción:** Actualización de estado y saldo.

### External Services
- Servicio de envío de correo electrónico.

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para el servicio de notificación de ventas.
- [ ] Integración con webhooks de la pasarela de pago.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

# Flujo de Pago con Carrito de Compra

**Jira Key:** ARGM-21
**Epic:** EPIC-ARGM-20 (Proceso de Pago Seguro)
**Priority:** High
**Story Points:** 8
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** buyer
**I want to** be able to add a product to my shopping cart and proceed to payment securely through an integrated payment gateway
**So that** I can complete my order.

---

## Description

Esta funcionalidad cubre el proceso completo de compra, desde la selección de productos hasta la confirmación del pago. Incluye la gestión de un carrito de compra, la selección de la dirección de envío, la elección del método de pago y la integración con una pasarela de pago externa para procesar la transacción de forma segura.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Compra exitosa
- **Given:** Un comprador ha añadido un producto a su carrito.
- **When:** Procede al checkout, introduce una dirección de envío válida y los datos de su tarjeta de crédito en la pasarela de pago.
- **Then:** El pago se procesa correctamente, el stock del producto se actualiza, el comprador recibe una confirmación de pedido y el vendedor es notificado.

### Scenario 2: Error - Pago rechazado
- **Given:** Un comprador está en la pasarela de pago.
- **When:** Introduce datos de tarjeta incorrectos o la transacción es rechazada por el banco.
- **Then:** La pasarela de pago devuelve un error, el sistema informa al comprador del rechazo y le permite reintentar el pago.

### Scenario 3: Edge Case - Carrito vacío
- **Given:** Un comprador intenta acceder al checkout con un carrito vacío.
- **When:** Intenta proceder al pago.
- **Then:** El sistema le impide avanzar y le redirige a la página del marketplace o a su carrito, indicando que está vacío.

---

## Technical Notes

### Frontend
- Crear componentes `ShoppingCart`, `CheckoutForm` y `PaymentGatewayIntegration`.
- El `CheckoutForm` debe recopilar la dirección de envío y redirigir a la pasarela de pago o integrar su widget.

### Backend
- Crear endpoints `POST /api/cart/add`, `GET /api/cart`, `POST /api/checkout`.
- El endpoint de checkout debe interactuar con la API de la pasarela de pago (ej. Stripe API) para crear un `PaymentIntent` y confirmar el pago.
- Actualizar el estado del `listing` (marcar como vendido) y crear un registro en `transactions`.

### Database
- **Tablas:** `carts`, `cart_items`, `transactions`, `listings`.
- **Acción:** Inserción, actualización y lectura.

### External Services
- Pasarela de pago (ej. Stripe).

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para los endpoints del carrito y checkout.
- [ ] Integración con la pasarela de pago funcional.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

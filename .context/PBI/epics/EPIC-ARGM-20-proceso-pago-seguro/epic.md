# Proceso de Pago Seguro

**Jira Key:** ARGM-20
**Status:** To Do
**Priority:** CRITICAL
**Phase:** Foundation (Sprint 1-2)

---

## Epic Description

Esta épica abarca todas las funcionalidades relacionadas con el flujo de pago, desde que un comprador añade un producto al carrito hasta que el vendedor retira los fondos de sus ventas. Incluye la integración con una pasarela de pago, la gestión de notificaciones de venta y el proceso de retiro de fondos. Es fundamental para la monetización de la plataforma y la confianza en las transacciones financieras.

**Business Value:**
Esta épica es directamente responsable de la capacidad de la plataforma para generar ingresos. Un proceso de pago seguro y eficiente es crítico para la conversión de ventas y para asegurar que tanto compradores como vendedores confíen en la plataforma para manejar sus transacciones financieras.

---

## User Stories

1. **ARGM-21** - As a buyer, I want to be able to add a product to my shopping cart and proceed to payment securely through an integrated payment gateway to complete my order.
2. **ARGM-22** - As a seller, I want to receive a notification when one of my products has been sold and the payment has been processed so I can proceed with shipping.
3. **ARGM-23** - As a seller, I want the funds from my sales to accumulate in my platform account and be able to withdraw them to my bank account securely.

**NOTA:** Los IDs serán actualizados cuando se creen las stories en Jira.

---

## Scope

### In Scope
- Carrito de compra básico.
- Integración con una pasarela de pago (ej. Stripe).
- Flujo de checkout con dirección de envío y método de pago.
- Notificaciones de venta para el vendedor.
- Acumulación de fondos en la cuenta del vendedor.
- Retiro de fondos a cuenta bancaria.

### Out of Scope (Future)
- Múltiples métodos de pago (ej. PayPal, criptomonedas).
- Pagos a plazos.
- Gestión de impuestos compleja.
- Integración con servicios de envío para cálculo de costes en tiempo real.

---

## Acceptance Criteria (Epic Level)

1. ✅ Un comprador puede añadir productos al carrito y completar una compra de forma segura.
2. ✅ Un vendedor recibe notificaciones de venta y puede ver los fondos acumulados.
3. ✅ Un vendedor puede solicitar y recibir el retiro de fondos a su cuenta bancaria.

---

## Related Functional Requirements

- **F-3.2:** Proceso de Pago (Checkout)

See: `.context/SRS/functional-specs.md`

---

## Technical Considerations

### Backend
- Integración con la API de una pasarela de pago (ej. Stripe).
- Endpoints para gestionar el carrito de compra.
- Endpoints para procesar pagos y actualizar el estado de las transacciones.
- Endpoints para gestionar la cuenta de fondos del vendedor y los retiros.

### Database Schema
**Tables:**
- `carts` (id, user_id, created_at)
- `cart_items` (id, cart_id, listing_id, quantity)
- `transactions` (id, buyer_id, seller_id, listing_id, amount, status, payment_intent_id, created_at)
- `seller_accounts` (id, user_id, current_balance, bank_account_details)
- `withdrawals` (id, seller_account_id, amount, status, requested_at, processed_at)

---

## Dependencies

### Internal Dependencies
- EPIC-ARGM-2: Gestión de Cuentas y Perfiles (usuarios deben existir).
- EPIC-ARGM-7: Marketplace: Compra y Venta (necesita productos para comprar).

### Blocks
- Ninguna.

---

## Success Metrics

### Functional Metrics
- Tasa de éxito de transacciones de pago > 99%.
- Tiempo de procesamiento de retiro de fondos < 3 días hábiles.

### Business Metrics
- Tasa de conversión de carrito a compra > 20%.
- Volumen total de transacciones procesadas.

---

## Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| Fallos en la pasarela de pago | High | Medium | Implementar reintentos automáticos. Monitoreo constante. Tener un plan de contingencia con un proveedor alternativo. |
| Fraude en pagos | High | Medium | Utilizar las herramientas de detección de fraude de la pasarela de pago. Implementar límites y verificaciones adicionales. |

---

## Related Documentation

- **PRD:** `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md`

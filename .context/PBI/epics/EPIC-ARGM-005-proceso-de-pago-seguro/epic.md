---
id: EPIC-ARGM-005
jira_id: null
title: Proceso de Pago Seguro
priority: High
business_value: High
estimated_story_points: 26
---

## Description
Esta épica cubre todo el flujo transaccional de la plataforma, desde que un comprador decide comprar un producto hasta que el vendedor recibe el dinero. Es una de las partes más críticas del sistema, ya que maneja el dinero de los usuarios y debe ser extremadamente segura y fiable.

## Scope
**In Scope:**
- Un carrito de compra para que los usuarios puedan añadir productos.
- Un flujo de checkout para introducir la dirección de envío y realizar el pago.
- Integración con una pasarela de pago externa (ej. Stripe) para procesar los pagos.
- Notificaciones a comprador y vendedor tras una venta exitosa.
- Un sistema para que los vendedores puedan retirar los fondos acumulados a su cuenta bancaria.

**Out of Scope:**
- Compra en 1-clic.
- Múltiples métodos de pago (solo tarjeta de crédito/débito en el MVP).
- Cálculo automático de impuestos.
- Integración con servicios de envío para calcular costes en tiempo real (se usará un coste de envío fijo o introducido por el vendedor en el MVP).

## Acceptance Criteria (Epic-level)
- [ ] Un comprador puede añadir un artículo a su carrito y completar una compra de forma segura.
- [ ] El pago se procesa a través de una pasarela de pago segura y fiable.
- [ ] Tanto el comprador como el vendedor son notificados cuando se realiza una venta.
- [ ] Los vendedores tienen un mecanismo para retirar sus ganancias.

## Dependencies
- **Épicas dependientes:** EPIC-ARGM-002 (necesita productos para comprar).
- **Recursos externos:** Pasarela de pago (Stripe, PayPal, etc.).
- **Technical pre-requisites:** Cuenta de desarrollador en la pasarela de pago elegida.

## User Stories
- STORY-ARGM-015: Como comprador, quiero poder añadir un producto a mi carrito de compra y proceder al pago de forma segura a través de una pasarela de pago integrada para completar mi pedido. (10 pts)
- STORY-ARGM-016: Como vendedor, quiero recibir una notificación cuando uno de mis productos ha sido vendido y el pago ha sido procesado para poder proceder con el envío. (6 pts)
- STORY-ARGM-017: Como vendedor, quiero que los fondos de mis ventas se acumulen en mi cuenta de la plataforma y poder retirarlos a mi cuenta bancaria de forma segura. (10 pts)

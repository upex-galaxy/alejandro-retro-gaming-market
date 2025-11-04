---
id: STORY-ARGM-017
jira_id: null
epic_id: EPIC-ARGM-005
title: Como vendedor, quiero que los fondos de mis ventas se acumulen en mi cuenta de la plataforma y poder retirarlos a mi cuenta bancaria de forma segura
priority: High
story_points: 10
assignee: null
status: To Do
---

## Description
Esta historia de usuario cierra el ciclo financiero para el vendedor. Define cómo los fondos de las ventas se acreditan en la cuenta del vendedor dentro de la plataforma y cómo pueden solicitar un retiro (payout) de esos fondos a su propia cuenta bancaria. Este proceso debe ser seguro y transparente.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Acumulación de fondos**
- **Given:** Un vendedor ha completado una venta y el período de protección del comprador (ej. 14 días) ha finalizado.
- **When:** El sistema procesa el estado del pedido a "Completado".
- **Then:** Los fondos de esa venta (precio del producto menos la comisión de la plataforma) se añaden al saldo disponible del vendedor.

**Scenario 2: Solicitud de retiro de fondos**
- **Given:** Un vendedor tiene un saldo disponible superior al mínimo de retiro (ej. 25€).
- **When:** Navega a su panel de "Finanzas", introduce la cantidad que desea retirar, y confirma la solicitud (habiendo configurado previamente su cuenta bancaria).
- **Then:** Se crea una solicitud de retiro con el estado "Pendiente", y el monto solicitado se deduce de su saldo disponible.

**Scenario 3: Procesamiento del retiro por un administrador**
- **Given:** Un administrador del sistema revisa las solicitudes de retiro pendientes.
- **When:** El administrador procesa el pago al vendedor a través del dashboard de la pasarela de pago (ej. Stripe Connect) o manualmente.
- **Then:** El estado del retiro en la plataforma se actualiza a "Completado" y el vendedor recibe una notificación por correo electrónico.

## Technical Notes (iniciales)
- La integración con la pasarela de pago debe utilizar un sistema que soporte marketplaces, como Stripe Connect o PayPal for Marketplaces. Esto permite gestionar los fondos de los vendedores y automatizar los pagos.
- Para el MVP, el proceso de pago final al vendedor puede ser manual para simplificar el desarrollo inicial. Un administrador procesaría los pagos en lotes.
- Es necesario un sistema de libro mayor (ledger) interno para rastrear todas las transacciones, comisiones y saldos de los vendedores de forma precisa.
- El vendedor debe poder configurar y guardar de forma segura los datos de su cuenta bancaria para los retiros.

## Definition of Done
- [ ] Código implementado y funcionando para el sistema de saldos y el flujo de solicitud de retiros.
- [ ] Integración con la pasarela de pago para la gestión de cuentas de vendedor y pagos (payouts).
- [ ] Tests unitarios para la lógica del libro mayor y los cálculos de comisiones (cobertura > 80%).
- [ ] Tests de integración que verifiquen la creación de solicitudes de retiro y la actualización de saldos.
- [ ] Tests E2E (Playwright) que simulen a un vendedor solicitando un retiro.
- [ ] Code review aprobado.
- [ ] Documentación de la API y del proceso de retiros actualizada.
- [ ] Desplegado en el entorno de staging.

# Retiro de Fondos por parte del Vendedor

**Jira Key:** ARGM-23
**Epic:** EPIC-ARGM-20 (Proceso de Pago Seguro)
**Priority:** Medium
**Story Points:** 5
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** seller
**I want to** have the funds from my sales accumulate in my platform account and be able to withdraw them to my bank account securely.

---

## Description

Los vendedores necesitan una forma fiable y segura de acceder a los fondos generados por sus ventas. Esta funcionalidad permite a los vendedores ver su saldo acumulado en la plataforma y solicitar el retiro de esos fondos a una cuenta bancaria de su elección, garantizando la seguridad y la trazabilidad del proceso.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Solicitud de retiro exitosa
- **Given:** Un vendedor con saldo positivo en su cuenta de la plataforma y una cuenta bancaria configurada.
- **When:** Solicita un retiro de fondos por una cantidad menor o igual a su saldo disponible.
- **Then:** El saldo de la plataforma se reduce, se crea un registro de retiro con estado "Pendiente" y el vendedor recibe una confirmación.

### Scenario 2: Error - Saldo insuficiente
- **Given:** Un vendedor con saldo en su cuenta de la plataforma.
- **When:** Intenta solicitar un retiro por una cantidad mayor a su saldo disponible.
- **Then:** El sistema rechaza la solicitud y muestra un mensaje de error indicando "Saldo insuficiente".

### Scenario 3: Happy Path - Procesamiento de retiro por administrador
- **Given:** Un administrador revisa una solicitud de retiro "Pendiente".
- **When:** El administrador procesa el retiro (ej. realiza la transferencia bancaria).
- **Then:** El estado del retiro cambia a "Completado" y el vendedor recibe una notificación de que sus fondos han sido enviados.

---

## Technical Notes

### Frontend
- Crear una página "Mi Saldo" donde el vendedor pueda ver su saldo y un formulario para solicitar retiros.
- Formulario para configurar la cuenta bancaria (IBAN, SWIFT, etc.).

### Backend
- Crear un endpoint `GET /api/seller-account/balance`.
- Crear un endpoint `POST /api/withdrawals/request` para que los vendedores soliciten retiros.
- Crear endpoints para que los administradores puedan `PUT /api/withdrawals/:id/process` y `PUT /api/withdrawals/:id/cancel`.

### Database
- **Tablas:** `seller_accounts`, `withdrawals`.
- **Acción:** Actualización de saldo y registro de retiros.

### External Services
- Posible integración con un servicio de pagos masivos (ej. Stripe Connect, PayPal Payouts) para automatizar las transferencias.

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para los endpoints de retiro de fondos.
- [ ] Interfaz de usuario para la gestión de saldo y retiros.
- [ ] Interfaz de administración para procesar retiros.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

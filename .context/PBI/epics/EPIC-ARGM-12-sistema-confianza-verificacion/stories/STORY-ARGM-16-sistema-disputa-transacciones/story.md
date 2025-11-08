# Sistema de Disputa de Transacciones

**Jira Key:** ARGM-16
**Epic:** EPIC-ARGM-12 (Sistema de Confianza y Verificación)
**Priority:** Medium
**Story Points:** 8
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** buyer or seller, if a problem arises with a transaction
**I want to** be able to open a dispute case
**So that** the platform's support team can mediate and help me resolve it.

---

## Description

En cualquier marketplace, pueden surgir problemas con las transacciones. Esta funcionalidad proporciona un mecanismo formal para que compradores y vendedores puedan reportar y gestionar disputas, permitiendo que el equipo de soporte de la plataforma intervenga y medie para encontrar una solución justa. Esto es crucial para mantener la confianza y la satisfacción del usuario.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Apertura de una disputa
- **Given:** Un comprador o vendedor ha completado una transacción y surge un problema.
- **When:** Accede a la transacción en su historial, hace clic en "Abrir Disputa", describe el problema y envía.
- **Then:** El sistema crea un nuevo caso de disputa con estado "Abierto" y notifica a ambas partes y al equipo de soporte.

### Scenario 2: Happy Path - Resolución de una disputa
- **Given:** Un caso de disputa está en estado "Abierto" y el equipo de soporte ha mediado.
- **When:** El equipo de soporte marca la disputa como "Resuelta" y añade una resolución.
- **Then:** Ambas partes (comprador y vendedor) son notificadas de la resolución y el caso se cierra.

### Scenario 3: Edge Case - Disputa sin resolución
- **Given:** Un caso de disputa está abierto por más de 14 días sin actividad.
- **When:** El sistema detecta la inactividad.
- **Then:** El sistema notifica al equipo de soporte para que revise el caso y tome una acción.

---

## Technical Notes

### Frontend
- Crear una interfaz para "Abrir Disputa" en la página de detalle de la transacción.
- Crear una página "Mis Disputas" donde los usuarios puedan ver el estado de sus casos.

### Backend
- Crear un endpoint `POST /api/disputes` para abrir nuevas disputas.
- Crear un endpoint `GET /api/disputes/my-disputes` para que los usuarios vean sus disputas.
- Crear endpoints para que el equipo de soporte pueda `PUT /api/disputes/:id/resolve` y `PUT /api/disputes/:id/update`.

### Database
- **Tablas:** `disputes` (id, transaction_id, reporter_id, reported_party_id, status, description, resolution, created_at, updated_at).

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para los endpoints de disputa.
- [ ] Interfaz de usuario para abrir y ver disputas.
- [ ] Interfaz de administración básica para gestionar disputas.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

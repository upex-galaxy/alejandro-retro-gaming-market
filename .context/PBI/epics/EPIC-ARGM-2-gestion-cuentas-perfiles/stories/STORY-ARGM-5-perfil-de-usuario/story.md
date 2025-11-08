# Perfil de Usuario Público y Privado

**Jira Key:** ARGM-5
**Epic:** EPIC-ARGM-2 (Gestión de Cuentas y Perfiles)
**Priority:** Medium
**Story Points:** 5
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** usuario registrado
**I want to** tener un perfil público donde pueda ver mi reputación, mis artículos en venta (si soy vendedor) y mis compras (si soy comprador)
**So that** construir confianza en la comunidad.

---

## Description

El perfil de usuario es el centro de la identidad y reputación en la plataforma. Debe diferenciar claramente entre la información pública visible para todos y la información privada gestionable solo por el propietario de la cuenta. Esto es fundamental para la transparencia y la confianza en el marketplace.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Visualización de perfil propio
- **Given:** Un usuario ha iniciado sesión.
- **When:** Navega a su propia página de perfil.
- **Then:** Ve toda su información, incluyendo la sección pública (nombre de usuario, reputación) y la sección privada (correo electrónico, opción de cambiar contraseña, historial de compras).

### Scenario 2: Happy Path - Visualización de perfil ajeno
- **Given:** Un usuario ha iniciado sesión.
- **When:** Visita el perfil de otro usuario (un vendedor).
- **Then:** Ve únicamente la información pública del vendedor: su nombre de usuario, su reputación media, y la lista de artículos que tiene actualmente a la venta.

### Scenario 3: Edge Case - Visualización de perfil sin iniciar sesión
- **Given:** Un visitante anónimo.
- **When:** Intenta acceder a una página de perfil de un usuario.
- **Then:** Puede ver la misma información pública que un usuario registrado (nombre de usuario, reputación, artículos en venta).

---

## Technical Notes

### Frontend
- Crear un componente `UserProfilePage` que renderice la información del perfil.
- El componente debe recibir el `userId` como prop y hacer una llamada a la API para obtener los datos.
- Debe tener lógica condicional para mostrar u ocultar la información privada si el `userId` del perfil coincide con el del usuario autenticado.

### Backend
- Crear un endpoint `GET /api/users/:userId/profile`.
- El endpoint debe devolver siempre la información pública.
- Si el `userId` solicitado coincide con el del token de autenticación, el endpoint debe incluir además la información privada en la respuesta.

### Database
- **Tablas:** `users`, `profiles`, `listings` (para obtener los artículos en venta).
- **Acción:** Lectura y join de tablas.

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para el endpoint del perfil.
- [ ] Tests de componente para la página de perfil.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

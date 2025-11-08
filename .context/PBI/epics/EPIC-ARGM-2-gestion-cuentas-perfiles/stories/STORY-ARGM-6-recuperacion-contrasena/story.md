# Flujo de Recuperación de Contraseña

**Jira Key:** ARGM-6
**Epic:** EPIC-ARGM-2 (Gestión de Cuentas y Perfiles)
**Priority:** High
**Story Points:** 5
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** usuario que ha olvidado su contraseña
**I want to** poder solicitar un restablecimiento de la misma a través de mi correo electrónico
**So that** recuperar el acceso a mi cuenta.

---

## Description

Un flujo de recuperación de contraseña es crucial para la experiencia de usuario, ya que permite a los usuarios auto-gestionar la recuperación de su cuenta sin necesidad de contactar a soporte. El proceso debe ser seguro para evitar la toma de control de cuentas por parte de actores maliciosos.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Solicitud de restablecimiento
- **Given:** Un usuario en la página "He olvidado mi contraseña".
- **When:** Ingresa el correo electrónico asociado a su cuenta y hace clic en "Enviar".
- **Then:** El sistema le muestra un mensaje de confirmación y le envía un correo electrónico con un enlace único para restablecer la contraseña.

### Scenario 2: Happy Path - Restablecimiento de contraseña
- **Given:** Un usuario ha hecho clic en el enlace de restablecimiento de su correo.
- **When:** Ingresa una nueva contraseña segura y la confirma.
- **Then:** El sistema actualiza su contraseña, le notifica que el cambio fue exitoso y lo redirige a la página de inicio de sesión.

### Scenario 3: Error - Correo no encontrado
- **Given:** Un usuario en la página "He olvidado mi contraseña".
- **When:** Ingresa un correo electrónico que no está registrado en la plataforma.
- **Then:** El sistema muestra un mensaje de confirmación genérico (para no revelar qué correos existen) y no envía ningún correo.

---

## Technical Notes

### Frontend
- Crear una página `ForgotPassword` y una `ResetPassword`.
- La página `ResetPassword` debe leer un token de la URL.

### Backend
- Crear endpoint `POST /api/auth/forgot-password`. Genera un token de reseteo con tiempo de expiración (ej. 1 hora), lo guarda en la base de datos y envía el correo.
- Crear endpoint `POST /api/auth/reset-password`. Valida el token, verifica que no haya expirado y actualiza la contraseña del usuario.

### Database
- **Tabla:** `users` o una tabla dedicada `password_resets`.
- **Campos:** `user_id`, `reset_token`, `expires_at`.

### External Services
- Servicio de envío de correo electrónico para mandar el enlace de restablecimiento.

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para los endpoints de recuperación.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

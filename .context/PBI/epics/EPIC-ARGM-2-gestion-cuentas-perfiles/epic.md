# Gestión de Cuentas y Perfiles

**Jira Key:** ARGM-2
**Status:** To Do
**Priority:** CRITICAL
**Phase:** Foundation (Sprint 1-2)

---

## Epic Description

Esta épica abarca todas las funcionalidades esenciales para que un usuario pueda crear y gestionar su identidad dentro de la plataforma. Incluye el proceso de registro inicial, la autenticación segura para acceder a la cuenta, la visualización de un perfil público que fomente la confianza y un mecanismo para recuperar el acceso en caso de olvidar la contraseña. Es la puerta de entrada para cualquier interacción en el marketplace.

**Business Value:**
Sin la gestión de cuentas, no es posible diferenciar entre compradores y vendedores, ni construir un sistema de reputación, que es clave para la confianza y seguridad del marketplace. Habilita la personalización y la seguridad, dos pilares de la experiencia de usuario.

---

## User Stories

1. **ARGM-3** - As a new user, I want to be able to register on the platform with my email and a password to access the buying and selling features.
2. **ARGM-4** - As a registered user, I want to be able to log in and out of my account securely to manage my activity on the platform.
3. **ARGM-5** - As a registered user, I want to have a public profile where I can see my reputation, my items for sale (if I am a seller) and my purchases (if I am a buyer) to build trust in the community.
4. **ARGM-6** - As a user who has forgotten my password, I want to be able to request a reset through my email to regain access to my account.

**NOTA:** Los IDs serán actualizados cuando se creen las stories en Jira (siguiente paso).

---

## Scope

### In Scope
- Registro de usuario con correo y contraseña.
- Inicio y cierre de sesión.
- Perfil de usuario público y privado básico.
- Flujo de recuperación de contraseña por correo.

### Out of Scope (Future)
- Registro con redes sociales (Google, Facebook).
- Autenticación de dos factores (2FA).
- Edición avanzada de perfiles (avatares, biografías extensas).

---

## Acceptance Criteria (Epic Level)

1. ✅ Un nuevo usuario puede completar el ciclo de registro, inicio de sesión y cierre de sesión sin errores.
2. ✅ La información del perfil de usuario se muestra correctamente (pública vs. privada).
3. ✅ El flujo de recuperación de contraseña permite a un usuario restablecer su contraseña y acceder a su cuenta.

---

## Related Functional Requirements

- **F-1.1:** Registro de Usuario
- **F-1.2:** Perfil de Usuario

See: `.context/SRS/functional-specs.md`

---

## Technical Considerations

### Backend
- Se utilizará un sistema de autenticación basado en tokens (JWT).
- Las contraseñas se almacenarán hasheadas y saladas (bcrypt).

### Database Schema
**Tables:**
- `users` (id, username, email, password_hash, created_at)
- `profiles` (user_id, reputation_score, public_info)

---

## Dependencies

### External Dependencies
- Servicio de envío de correo electrónico (para bienvenida y recuperación de contraseña).

### Internal Dependencies
- Ninguna. Esta es una épica fundacional.

### Blocks
- EPIC-ARGM-002: Marketplace: Compra y Venta
- EPIC-ARGM-003: Sistema de Confianza y Verificación
- EPIC-ARGM-005: Proceso de Pago Seguro

---

## Success Metrics

### Functional Metrics
- Tasa de éxito de registro > 98%.
- Tiempo de inicio de sesión < 1.5 segundos.

### Business Metrics
- Alcanzar 200 compradores registrados en las primeras 8 semanas.

---

## Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| Vulnerabilidades de seguridad en autenticación | High | Medium | Seguir las mejores prácticas de OWASP para autenticación. Realizar pentesting básico. |
| Fallo en el servicio de envío de correos | Medium | Low | Implementar reintentos y un sistema de monitoreo para el servicio de email. |

---

## Related Documentation

- **PRD:** `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md`

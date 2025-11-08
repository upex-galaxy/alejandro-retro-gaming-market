# Proceso de Verificación para Nuevos Vendedores

**Jira Key:** ARGM-13
**Epic:** EPIC-ARGM-12 (Sistema de Confianza y Verificación)
**Priority:** High
**Story Points:** 8
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** new seller
**I want to** be able to go through a unique verification process (e.g. validating my identity) to obtain a "Verified Seller Seal"
**So that** I can generate more trust in buyers.

---

## Description

Para fomentar la confianza en el marketplace, los nuevos vendedores deben pasar por un proceso de verificación. En el MVP, este proceso será manual, requiriendo que el vendedor envíe documentación y pruebas de su legitimidad. Una vez aprobado, el vendedor recibirá un distintivo visible en su perfil y anuncios.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Solicitud de verificación exitosa
- **Given:** Un usuario registrado que no es vendedor verificado.
- **When:** Solicita la verificación de vendedor desde su perfil y sube los documentos requeridos.
- **Then:** El sistema registra la solicitud y la pone en estado "Pendiente de Revisión" para el administrador.

### Scenario 2: Happy Path - Aprobación de verificación por administrador
- **Given:** Un administrador revisa una solicitud de verificación "Pendiente".
- **When:** El administrador aprueba la solicitud.
- **Then:** El estado del vendedor cambia a "Verificado", se le asigna el "Sello de Vendedor Verificado" y recibe una notificación por correo electrónico.

### Scenario 3: Happy Path - Visualización del sello
- **Given:** Un comprador está viendo el perfil o un anuncio de un vendedor verificado.
- **When:** La página carga.
- **Then:** El "Sello de Vendedor Verificado" es claramente visible junto al nombre del vendedor.

---

## Technical Notes

### Frontend
- Crear una sección en el perfil de usuario para "Solicitar Verificación de Vendedor".
- Formulario para subir documentos (ej. DNI, facturas de compra de juegos retro).

### Backend
- Crear un endpoint `POST /api/seller-verification/request` para que los usuarios envíen sus solicitudes.
- Crear endpoints para que los administradores puedan `GET /api/seller-verification/requests` (listar), `PUT /api/seller-verification/:id/approve` y `PUT /api/seller-verification/:id/reject`.
- Actualizar el campo `is_verified_seller` en la tabla `users`.

### Database
- **Tablas:** `seller_verifications` (id, user_id, documents_url, status, requested_at, reviewed_by, approved_at).
- **Campo:** `users.is_verified_seller` (boolean).

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para los endpoints de verificación.
- [ ] Interfaz de usuario para la solicitud de verificación.
- [ ] Interfaz de administración básica para revisar solicitudes.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

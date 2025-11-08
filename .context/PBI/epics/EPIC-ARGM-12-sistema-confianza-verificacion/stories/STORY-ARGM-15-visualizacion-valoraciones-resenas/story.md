# Visualización de Valoraciones y Reseñas Recibidas

**Jira Key:** ARGM-15
**Epic:** EPIC-ARGM-12 (Sistema de Confianza y Verificación)
**Priority:** Medium
**Story Points:** 3
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** seller
**I want to** be able to see the ratings and reviews I have received
**So that** I can build my reputation on the platform.

---

## Description

Los vendedores necesitan una forma clara y accesible de ver las valoraciones y reseñas que han recibido. Esto les permite monitorear su reputación, identificar áreas de mejora y responder a los comentarios de los compradores. Esta información será visible en su perfil público y en un panel privado.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Visualización en perfil público
- **Given:** Un comprador visita el perfil público de un vendedor.
- **When:** La página carga.
- **Then:** Se muestra la puntuación media del vendedor (ej. 4.5/5 estrellas) y una lista de las últimas reseñas recibidas, incluyendo el comentario y la puntuación.

### Scenario 2: Happy Path - Visualización en panel privado
- **Given:** Un vendedor ha iniciado sesión y navega a su panel de "Mis Valoraciones".
- **When:** La página carga.
- **Then:** Ve una lista completa de todas las valoraciones y reseñas que ha recibido, con detalles como la fecha y el comprador.

### Scenario 3: Edge Case - Vendedor sin valoraciones
- **Given:** Un vendedor nuevo sin valoraciones.
- **When:** Un comprador visita su perfil público.
- **Then:** Se muestra un mensaje indicando "Este vendedor aún no tiene valoraciones" en lugar de la puntuación media.

---

## Technical Notes

### Frontend
- Integrar la visualización de la puntuación media y las reseñas en el componente `UserProfilePage`.
- Crear un componente `SellerRatingsPanel` para la vista privada del vendedor.

### Backend
- Modificar el endpoint `GET /api/users/:userId/profile` para incluir la puntuación media y un resumen de las reseñas.
- Crear un endpoint `GET /api/ratings/seller/:sellerId` para que el vendedor pueda ver todas sus reseñas.

### Database
- **Tabla:** `ratings`.
- **Acción:** Lectura y agregación de datos para calcular la puntuación media.

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para los endpoints de visualización de valoraciones.
- [ ] Interfaz de usuario para mostrar valoraciones en perfil público y panel privado.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

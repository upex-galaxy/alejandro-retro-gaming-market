# Dejar una Valoración y Reseña de un Vendedor

**Jira Key:** ARGM-14
**Epic:** EPIC-ARGM-12 (Sistema de Confianza y Verificación)
**Priority:** High
**Story Points:** 5
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** buyer
**I want to** be able to leave a rating (from 1 to 5 stars) and a review for a seller after a completed purchase
**So that** I can share my experience with the community.

---

## Description

El sistema de valoraciones y reseñas permite a los compradores compartir su experiencia con otros usuarios, contribuyendo a la reputación del vendedor y a la transparencia del marketplace. Esta funcionalidad se activará una vez que una transacción haya sido marcada como completada.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Envío de valoración y reseña
- **Given:** Un comprador ha completado una transacción con un vendedor.
- **When:** Accede a la sección de "Mis Compras", selecciona la transacción y hace clic en "Valorar Vendedor". Ingresa 4 estrellas y un comentario.
- **Then:** La valoración y reseña se guardan, se asocian al vendedor y se hacen visibles en su perfil.

### Scenario 2: Error - Intentar valorar dos veces
- **Given:** Un comprador ya ha valorado a un vendedor por una transacción específica.
- **When:** Intenta volver a valorar al mismo vendedor para la misma transacción.
- **Then:** El sistema le informa que ya ha valorado esa transacción y no permite una nueva valoración.

### Scenario 3: Edge Case - Valoración sin comentario
- **Given:** Un comprador está en el formulario de valoración.
- **When:** Selecciona 5 estrellas pero deja el campo de comentario vacío.
- **Then:** La valoración se guarda correctamente con las 5 estrellas y sin comentario.

---

## Technical Notes

### Frontend
- Crear un componente `RatingForm` que permita seleccionar estrellas y escribir un comentario.
- Integrar este formulario en la página de "Mis Compras" o en una página dedicada post-transacción.

### Backend
- Crear un endpoint `POST /api/ratings`.
- Validar que la transacción exista, esté completada y que el comprador no haya valorado ya al vendedor para esa transacción.
- Guardar la valoración y reseña en la tabla `ratings`.
- Recalcular la puntuación media del vendedor.

### Database
- **Tablas:** `ratings` (id, transaction_id, seller_id, buyer_id, stars, comment, created_at).
- **Campo:** `users.average_rating` (actualizar).

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para el endpoint de creación de valoraciones.
- [ ] Interfaz de usuario para el formulario de valoración.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

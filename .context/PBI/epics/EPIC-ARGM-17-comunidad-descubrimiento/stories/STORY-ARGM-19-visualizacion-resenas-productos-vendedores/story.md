# Visualización de Reseñas de Productos y Vendedores

**Jira Key:** ARGM-19
**Epic:** EPIC-ARGM-17 (Comunidad y Descubrimiento)
**Priority:** Medium
**Story Points:** 3
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** buyer
**I want to** be able to read other users' reviews of a product or a seller
**So that** I can evaluate reliability and quality before buying.

---

## Description

La visualización de reseñas es un componente clave para la toma de decisiones de compra. Esta historia se enfoca en integrar y mostrar las reseñas existentes (tanto de productos, si se implementan, como de vendedores) de manera prominente en las páginas de detalle de productos y perfiles de vendedores, permitiendo a los compradores evaluar la fiabilidad y calidad.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Visualización de reseñas de vendedor en página de producto
- **Given:** Un comprador está en la página de detalle de un producto.
- **When:** La página carga.
- **Then:** Se muestra la puntuación media del vendedor y un enlace para ver todas sus reseñas, junto con un resumen de las últimas reseñas.

### Scenario 2: Happy Path - Visualización de reseñas de vendedor en perfil
- **Given:** Un comprador está en el perfil público de un vendedor.
- **When:** La página carga.
- **Then:** Se muestra la puntuación media del vendedor y una lista paginada de todas las reseñas que ha recibido.

### Scenario 3: Edge Case - Producto sin reseñas (si se implementan)
- **Given:** Un comprador está en la página de detalle de un producto que no tiene reseñas (si se implementa la funcionalidad de reseñas de producto).
- **When:** La página carga.
- **Then:** Se muestra un mensaje indicando "Este producto aún no tiene reseñas" en la sección correspondiente.

---

## Technical Notes

### Frontend
- Integrar componentes de visualización de reseñas (`ReviewSummary`, `ReviewList`) en `ProductDetailPage` y `UserProfilePage`.
- Asegurarse de que las reseñas de vendedor se carguen de forma asíncrona para no bloquear la carga principal de la página.

### Backend
- Modificar el endpoint `GET /api/listings/:listingId` para incluir un resumen de las reseñas del vendedor.
- Modificar el endpoint `GET /api/users/:userId/profile` para incluir todas las reseñas del vendedor.

### Database
- **Tablas:** `ratings`.
- **Acción:** Lectura y agregación de datos.

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para los endpoints que proporcionan datos de reseñas.
- [ ] Interfaz de usuario para mostrar reseñas en páginas de producto y perfiles.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

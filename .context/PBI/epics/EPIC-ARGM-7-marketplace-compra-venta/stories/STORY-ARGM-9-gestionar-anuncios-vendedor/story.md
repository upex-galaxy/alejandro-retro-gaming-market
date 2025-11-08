# Gestión de Anuncios por parte del Vendedor

**Jira Key:** ARGM-9
**Epic:** EPIC-ARGM-7 (Marketplace: Compra y Venta)
**Priority:** Medium
**Story Points:** 5
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** seller
**I want to** be able to view and manage my active listings, being able to edit them or mark them as sold
**So that** I can keep my inventory updated.

---

## Description

Una vez que un vendedor ha creado anuncios, necesita una forma centralizada de gestionarlos. Esta historia de usuario cubre la creación de un panel donde el vendedor puede ver todos sus productos listados, actualizarlos si es necesario (ej. bajar el precio) o marcarlos como vendidos si la transacción se completa fuera de la plataforma o el producto ya no está disponible.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Visualización de anuncios
- **Given:** Un vendedor con varios anuncios activos ha iniciado sesión.
- **When:** Navega a su panel de "Mis Anuncios".
- **Then:** Ve una lista de todos sus productos, cada uno con su foto principal, título, precio y estado actual.

### Scenario 2: Happy Path - Edición de un anuncio
- **Given:** Un vendedor está en su panel de "Mis Anuncios".
- **When:** Hace clic en "Editar" en uno de sus anuncios y cambia el precio.
- **Then:** El precio del anuncio se actualiza en toda la plataforma.

### Scenario 3: Happy Path - Marcar como vendido
- **Given:** Un vendedor está en su panel de "Mis Anuncios".
- **When:** Hace clic en "Marcar como vendido" en un anuncio activo.
- **Then:** El estado del anuncio cambia a "Vendido" y ya no aparece en los resultados de búsqueda del marketplace.

---

## Technical Notes

### Frontend
- Crear una página `MyListings` que muestre los anuncios del vendedor autenticado.
- Cada anuncio en la lista debe tener botones para "Editar" y "Marcar como vendido".
- El botón "Editar" debe redirigir al formulario `ListingForm`, pre-cargado con los datos del anuncio.

### Backend
- Crear un endpoint `GET /api/listings/my-listings` que devuelva los anuncios del usuario autenticado.
- Modificar el endpoint `PUT /api/listings/:listingId` para permitir la actualización de un anuncio.
- Asegurarse de que solo el propietario de un anuncio pueda editarlo.

### Database
- **Tabla:** `listings`
- **Acción:** Lectura (filtrando por `seller_id`) y Actualización.

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para los endpoints de gestión de anuncios.
- [ ] Tests de componente para el panel de anuncios.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

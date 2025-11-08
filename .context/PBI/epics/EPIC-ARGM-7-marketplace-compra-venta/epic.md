# Marketplace: Compra y Venta

**Jira Key:** ARGM-7
**Status:** To Do
**Priority:** CRITICAL
**Phase:** Foundation (Sprint 1-2)

---

## Epic Description

Esta épica constituye el núcleo funcional del marketplace. Abarca todas las funcionalidades que permiten a los vendedores listar sus productos y a los compradores encontrarlos y evaluarlos. Incluye la creación y gestión de anuncios, así como la búsqueda y el filtrado de productos. Es la base sobre la que se realizan todas las transacciones comerciales.

**Business Value:**
El valor de negocio es directo: sin esta épica, no hay mercado. Habilita la oferta (vendedores que listan productos) y la demanda (compradores que los encuentran), generando el inventario y la actividad que son la razón de ser de la plataforma.

---

## User Stories

1. **ARGM-8** - As a seller, I want to be able to create a listing for a retro console or game, uploading photos, a detailed description, price, and condition of the item, to be able to put my products up for sale.
2. **ARGM-9** - As a seller, I want to be able to view and manage my active listings, being able to edit them or mark them as sold, to keep my inventory updated.
3. **ARGM-10** - As a buyer, I want to be able to search and filter products by name, console, category, or condition to easily find the items that interest me.
4. **ARGM-11** - As a buyer, I want to be able to see the detail page of a product with all the relevant information and the seller's profile to make an informed purchase decision.

**NOTA:** Los IDs serán actualizados cuando se creen las stories en Jira.

---

## Scope

### In Scope
- Creación de anuncios con campos definidos (título, descripción, precio, fotos, estado).
- Gestión de anuncios por parte del vendedor (editar, marcar como vendido).
- Búsqueda por texto libre.
- Filtros básicos (consola, categoría, estado).
- Página de detalle del producto.

### Out of Scope (Future)
- Subastas.
- Anuncios destacados o promocionados.
- Campos personalizados en los anuncios.
- Guardar búsquedas o crear alertas.

---

## Acceptance Criteria (Epic Level)

1. ✅ Un vendedor puede crear, ver y gestionar un anuncio de principio a fin.
2. ✅ Un comprador puede buscar un producto usando texto y filtros, y encontrar resultados relevantes.
3. ✅ Un comprador puede acceder a la página de detalle de cualquier producto listado y ver toda su información.

---

## Related Functional Requirements

- **F-2.1:** Creación de Anuncios (Listings)
- **F-3.1:** Búsqueda y Filtros

See: `.context/SRS/functional-specs.md`

---

## Technical Considerations

### Backend
- Endpoints CRUD para la gestión de `listings`.
- Implementar un motor de búsqueda (puede ser un simple LIKE de SQL para el MVP, o algo más avanzado como Elasticsearch si se escala).

### Database Schema
**Tables:**
- `listings` (id, seller_id, title, description, price, status, console_id, condition, created_at)
- `listing_images` (id, listing_id, image_url)

---

## Dependencies

### Internal Dependencies
- EPIC-ARGM-2: Gestión de Cuentas y Perfiles (un vendedor debe ser un usuario registrado).

### Blocks
- EPIC-ARGM-5: Proceso de Pago Seguro (un comprador no puede pagar sin esta épica).

---

## Success Metrics

### Functional Metrics
- Tiempo de carga de la página de búsqueda < 2 segundos con 10,000 anuncios.
- Tasa de éxito en la creación de anuncios > 99%.

### Business Metrics
- Alcanzar un mínimo de 500 anuncios activos en las primeras 8 semanas.
- Tasa de conversión de visita a detalle de producto > 15%.

---

## Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| Calidad de las imágenes y descripciones | Medium | High | Implementar guías claras y ejemplos para los vendedores. Requerir un mínimo de 3 imágenes. |
| Búsqueda lenta o irrelevante | High | Medium | Empezar con una búsqueda SQL optimizada. Planificar la migración a un servicio de búsqueda dedicado si el rendimiento se degrada. |

---

## Related Documentation

- **PRD:** `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md`

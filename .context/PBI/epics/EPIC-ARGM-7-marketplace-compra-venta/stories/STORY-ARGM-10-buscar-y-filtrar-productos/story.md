# Búsqueda y Filtrado de Productos

**Jira Key:** ARGM-10
**Epic:** EPIC-ARGM-7 (Marketplace: Compra y Venta)
**Priority:** High
**Story Points:** 5
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** buyer
**I want to** be able to search and filter products by name, console, category, or condition
**So that** I can easily find the items that interest me.

---

## Description

La capacidad de encontrar productos de manera eficiente es fundamental para la experiencia del comprador. Esta historia cubre la implementación de una barra de búsqueda de texto libre y un conjunto de filtros clave que permitan a los usuarios acotar el catálogo de productos para encontrar exactamente lo que buscan.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Búsqueda por texto
- **Given:** Un comprador está en la página del marketplace.
- **When:** Escribe "Super Mario" en la barra de búsqueda y presiona Enter.
- **Then:** La página se actualiza para mostrar solo los productos que contienen "Super Mario" en su título o descripción.

### Scenario 2: Happy Path - Filtrado por categoría
- **Given:** Un comprador está viendo una lista de productos.
- **When:** Aplica el filtro de categoría "Super Nintendo".
- **Then:** La lista de productos se actualiza para mostrar únicamente artículos de la categoría "Super Nintendo".

### Scenario 3: Happy Path - Búsqueda y filtro combinados
- **Given:** Un comprador está en la página del marketplace.
- **When:** Busca "Zelda" y además aplica el filtro de estado "Original".
- **Then:** La lista de productos muestra solo los artículos de "Zelda" que están en estado "Original".

---

## Technical Notes

### Frontend
- Crear componentes para la barra de búsqueda (`SearchBar`) y los filtros (`FilterPanel`).
- El estado de la búsqueda y los filtros debe gestionarse en la URL (query params) para que las búsquedas se puedan compartir.
- Cada vez que cambia un filtro o la búsqueda, se debe realizar una nueva llamada a la API.

### Backend
- Crear un endpoint `GET /api/listings/search` que acepte parámetros de consulta (ej. `?q=mario&console=snes&status=original`).
- La lógica del endpoint debe construir una consulta a la base de datos que incorpore dinámicamente los filtros proporcionados.
- Implementar paginación en los resultados de búsqueda.

### Database
- **Tabla:** `listings`
- **Acción:** Lectura con cláusulas `WHERE` y `LIKE` complejas. Considerar la creación de índices en las columnas de búsqueda y filtro para mejorar el rendimiento.

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para el endpoint de búsqueda.
- [ ] Tests de componente para la barra de búsqueda y los filtros.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

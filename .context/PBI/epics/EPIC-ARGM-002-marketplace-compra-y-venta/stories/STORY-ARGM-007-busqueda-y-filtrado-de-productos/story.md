---
id: STORY-ARGM-007
jira_id: null
epic_id: EPIC-ARGM-002
title: Como comprador, quiero poder buscar y filtrar productos por nombre, consola, categoría o estado para encontrar fácilmente los artículos que me interesan
priority: High
story_points: 5
assignee: null
status: To Do
---

## Description
Esta historia de usuario se centra en la capacidad de los compradores para descubrir productos en el marketplace. Una funcionalidad de búsqueda y filtrado robusta y fácil de usar es crucial para una buena experiencia de compra y para ayudar a los usuarios a encontrar lo que buscan en un catálogo potencialmente grande.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Búsqueda por texto simple**
- **Given:** Un comprador está en la página principal del marketplace.
- **When:** Escribe "Super Mario" en la barra de búsqueda y presiona Enter.
- **Then:** Se le muestra una página de resultados con todos los productos que contienen "Super Mario" en su título o descripción.

**Scenario 2: Filtrado por consola**
- **Given:** Un comprador está viendo una lista de productos.
- **When:** Aplica el filtro "Consola: Nintendo 64".
- **Then:** La lista de resultados se actualiza para mostrar únicamente productos relacionados con la Nintendo 64.

**Scenario 3: Combinación de búsqueda y filtros**
- **Given:** Un comprador está en la página del marketplace.
- **When:** Busca "Zelda" y además aplica los filtros "Estado: Original" y "Consola: Super Nintendo".
- **Then:** La lista de resultados muestra solo los juegos de Zelda para Super Nintendo que están en estado original.

## Technical Notes (iniciales)
- Para la búsqueda de texto, se puede utilizar la funcionalidad de búsqueda de la base de datos (e.g., Full-Text Search en PostgreSQL) o un motor de búsqueda dedicado como Elasticsearch para una mayor escalabilidad y flexibilidad.
- Los filtros deben poder combinarse (AND).
- La API debe tener un endpoint de búsqueda que acepte parámetros para el texto de búsqueda y los diferentes filtros.
- El estado de los filtros debe reflejarse en la URL para que las búsquedas se puedan compartir.

## Definition of Done
- [ ] Código implementado y funcionando para la búsqueda y el filtrado de productos.
- [ ] Tests unitarios para la lógica de construcción de consultas de búsqueda (cobertura > 80%).
- [ ] Tests de integración para el endpoint de la API de búsqueda.
- [ ] Tests E2E (Playwright) que prueben varias combinaciones de búsqueda y filtros.
- [ ] Code review aprobado.
- [ ] Documentación de la API de búsqueda actualizada.
- [ ] Desplegado en el entorno de staging.

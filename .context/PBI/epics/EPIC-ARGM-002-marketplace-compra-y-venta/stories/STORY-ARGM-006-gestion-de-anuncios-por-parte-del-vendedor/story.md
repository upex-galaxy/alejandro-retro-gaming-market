---
id: STORY-ARGM-006
jira_id: null
epic_id: EPIC-ARGM-002
title: Como vendedor, quiero poder ver y gestionar mis listados activos, pudiendo editarlos o marcarlos como vendidos, para mantener mi inventario actualizado
priority: Medium
story_points: 5
assignee: null
status: To Do
---

## Description
Esta historia de usuario proporciona a los vendedores un panel de control para gestionar sus anuncios. Desde este panel, pueden ver todos los artículos que tienen a la venta, editar la información de un anuncio existente o marcar un artículo como "Vendido" si se ha vendido fuera de la plataforma o si el anuncio ha expirado.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Ver la lista de anuncios activos**
- **Given:** Un vendedor con varios anuncios activos ha iniciado sesión.
- **When:** Navega a su panel de "Mis Anuncios".
- **Then:** Ve una lista de todos sus anuncios activos, mostrando el título, el precio y la fecha de publicación de cada uno.

**Scenario 2: Editar un anuncio existente**
- **Given:** Un vendedor está en su panel de "Mis Anuncios".
- **When:** Hace clic en el botón "Editar" de un anuncio y cambia el precio del artículo.
- **Then:** La información del anuncio se actualiza y los cambios son visibles en la página pública del producto.

**Scenario 3: Marcar un anuncio como vendido**
- **Given:** Un vendedor está en su panel de "Mis Anuncios".
- **When:** Hace clic en el botón "Marcar como Vendido" de un anuncio.
- **Then:** El anuncio ya no aparece en los resultados de búsqueda del marketplace y se muestra como "Vendido" tanto en el panel del vendedor como en la página del producto (si se accede directamente).

## Technical Notes (iniciales)
- El panel de gestión de anuncios debe ser una tabla o una cuadrícula clara y fácil de usar.
- La función de edición debe reutilizar el mismo formulario que el de creación de anuncios, pero pre-cargado con los datos existentes.
- El cambio de estado de un anuncio (de "Activo" a "Vendido") debe ser una operación atómica en la base de datos.
- Considerar la paginación si un vendedor tiene un gran número de anuncios.

## Definition of Done
- [ ] Código implementado y funcionando para el panel de gestión de anuncios.
- [ ] Tests unitarios para la lógica de edición y cambio de estado (cobertura > 80%).
- [ ] Tests de integración para los endpoints de la API de gestión de anuncios.
- [ ] Tests E2E (Playwright) que simulen la edición y el marcado como vendido de un anuncio.
- [ ] Code review aprobado.
- [ ] Documentación de la API de gestión de anuncios actualizada.
- [ ] Desplegado en el entorno de staging.

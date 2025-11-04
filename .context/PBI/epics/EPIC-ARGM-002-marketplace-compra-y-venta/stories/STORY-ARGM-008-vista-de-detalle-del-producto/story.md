---
id: STORY-ARGM-008
jira_id: null
epic_id: EPIC-ARGM-002
title: Como comprador, quiero poder ver la página de detalle de un producto con toda la información relevante y el perfil del vendedor para tomar una decisión de compra informada
priority: High
story_points: 6
assignee: null
status: To Do
---

## Description
La página de detalle del producto (PDP) es donde el comprador toma la decisión final de compra. Esta historia de usuario se asegura de que toda la información crítica sobre el producto y el vendedor esté presentada de una manera clara y convincente.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Visualización de la información del producto**
- **Given:** Un comprador ha hecho clic en un producto desde la página de resultados de búsqueda.
- **When:** Aterriza en la página de detalle del producto.
- **Then:** Puede ver claramente el título del producto, una galería de imágenes, la descripción completa, el precio, el estado del artículo y la consola a la que pertenece.

**Scenario 2: Visualización de la información del vendedor**
- **Given:** Un comprador está en la página de detalle de un producto.
- **When:** Mira la sección de información del vendedor en la misma página.
- **Then:** Puede ver el nombre de usuario del vendedor, su valoración media, y un enlace a su perfil público. Si el vendedor está verificado, se muestra el "Sello de Vendedor Verificado".

**Scenario 3: Navegación al perfil del vendedor**
- **Given:** Un comprador está en la página de detalle de un producto.
- **When:** Hace clic en el nombre del vendedor.
- **Then:** Es redirigido a la página de perfil público del vendedor, donde puede ver todos los artículos que este tiene a la venta.

## Technical Notes (iniciales)
- La página debe ser renderizada en el servidor (SSR) para un buen rendimiento y SEO.
- La galería de imágenes debe permitir al usuario hacer zoom o ver las imágenes a pantalla completa.
- La información del vendedor debe cargarse junto con la del producto en una única llamada a la API si es posible, para optimizar el rendimiento.
- Incluir un botón claro de "Añadir al carrito".

## Definition of Done
- [ ] Código implementado y funcionando para la página de detalle del producto.
- [ ] Tests unitarios para los componentes de la página (cobertura > 80%).
- [ ] Tests de integración para el endpoint de la API que sirve los datos del producto.
- [ ] Tests E2E (Playwright) que verifiquen que toda la información se muestra correctamente.
- [ ] Code review aprobado.
- [ ] Documentación de la API de detalle de producto actualizada.
- [ ] Desplegado en el entorno de staging.

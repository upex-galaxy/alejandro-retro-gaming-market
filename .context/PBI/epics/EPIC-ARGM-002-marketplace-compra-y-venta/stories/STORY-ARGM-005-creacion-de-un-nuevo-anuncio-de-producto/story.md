---
id: STORY-ARGM-005
jira_id: null
epic_id: EPIC-ARGM-002
title: Como vendedor, quiero poder crear un listado para una consola o juego retro, subiendo fotos, una descripción detallada, precio y estado del artículo, para poder poner mis productos a la venta
priority: High
story_points: 8
assignee: null
status: To Do
---

## Description
Esta historia de usuario permite a un vendedor crear un nuevo anuncio (listing) para un producto de gaming retro. El formulario de creación de anuncios es un componente clave que debe ser intuitivo y capturar toda la información necesaria para que los compradores puedan tomar una decisión informada.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Creación de un anuncio exitosa**
- **Given:** Un vendedor verificado ha iniciado sesión en la plataforma.
- **When:** Navega a la página de "Vender un artículo", completa todos los campos obligatorios (Título, Consola, Estado, Descripción, Precio, al menos 3 imágenes) y envía el formulario.
- **Then:** El anuncio se crea con el estado "Activo", es visible en el marketplace y el vendedor es redirigido a la página de su nuevo anuncio.

**Scenario 2: Intento de creación de anuncio con campos faltantes**
- **Given:** Un vendedor verificado está en el formulario de creación de anuncios.
- **When:** Intenta enviar el formulario sin rellenar uno o más de los campos obligatorios.
- **Then:** Se muestra un mensaje de error indicando qué campos son necesarios y el formulario no se envía.

**Scenario 3: Intento de creación de anuncio con un precio inválido**
- **Given:** Un vendedor verificado está en el formulario de creación de anuncios.
- **When:** Introduce un valor no numérico o negativo en el campo de precio.
- **Then:** Se muestra un mensaje de error de validación junto al campo de precio y el formulario no se envía.

## Technical Notes (iniciales)
- Implementar un servicio de subida de imágenes que las redimensione y optimice para la web.
- Las imágenes deben almacenarse en un servicio de almacenamiento de objetos (como AWS S3, Google Cloud Storage, etc.).
- La validación de los campos del formulario debe realizarse tanto en el frontend como en el backend.
- Considerar una lista predefinida de "Consolas" y "Estados" para asegurar la consistencia de los datos.

## Definition of Done
- [ ] Código implementado y funcionando para el formulario de creación de anuncios.
- [ ] Tests unitarios para la lógica de validación del formulario (cobertura > 80%).
- [ ] Tests de integración para el endpoint de la API de creación de anuncios, incluyendo la subida de imágenes (con mocks).
- [ ] Tests E2E (Playwright) que simulen el flujo completo de creación de un anuncio.
- [ ] Code review aprobado.
- [ ] Documentación de la API de creación de anuncios actualizada.
- [ ] Desplegado en el entorno de staging.

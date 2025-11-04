---
id: STORY-ARGM-014
jira_id: null
epic_id: EPIC-ARGM-004
title: Como comprador, quiero poder leer las reseñas de otros usuarios sobre un producto o un vendedor para evaluar la fiabilidad y calidad antes de comprar
priority: Medium
story_points: 5
assignee: null
status: To Do
---

## Description
Esta historia de usuario se asegura de que el contenido generado por la comunidad (las valoraciones y reseñas) sea visible en los lugares correctos para ayudar a los compradores a tomar decisiones. La prueba social es un factor de conversión muy importante, y esta historia la pone en práctica.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Ver la valoración del vendedor en la página de producto**
- **Given:** Un comprador está viendo la página de detalle de un producto.
- **When:** Mira la sección de información del vendedor.
- **Then:** Ve la puntuación media del vendedor y el número total de valoraciones que ha recibido, junto con un enlace para ver todas las reseñas.

**Scenario 2: Ver las reseñas detalladas en el perfil del vendedor**
- **Given:** Un comprador ha navegado al perfil público de un vendedor.
- **When:** Hace clic en la pestaña de "Valoraciones".
- **Then:** Ve una lista completa de todas las valoraciones y reseñas que otros compradores han dejado para ese vendedor.

**Scenario 3: No hay reseñas para un vendedor nuevo**
- **Given:** Un comprador está viendo la página de un producto de un vendedor nuevo que aún no tiene valoraciones.
- **When:** Mira la sección de información del vendedor.
- **Then:** Ve un mensaje que indica "Este vendedor aún no tiene valoraciones".

## Technical Notes (iniciales)
- Reutilizar los componentes y datos de la Épica 3 (Sistema de Confianza).
- La información agregada (puntuación media, número de valoraciones) debe ser calculada y almacenada en el perfil del vendedor para no tener que recalcularla en cada carga de página de producto.
- Asegurarse de que la visualización de las reseñas sea clara y fácil de leer, mostrando la puntuación, el comentario y la fecha.

## Definition of Done
- [ ] Código implementado y funcionando para mostrar las valoraciones en la página de producto y en el perfil del vendedor.
- [ ] Tests unitarios para los componentes que muestran las valoraciones (cobertura > 80%).
- [ ] Tests de integración para los endpoints de la API que sirven las valoraciones.
- [ ] Tests E2E (Playwright) que verifiquen que las valoraciones se muestran correctamente en los diferentes lugares de la plataforma.
- [ ] Code review aprobado.
- [ ] Documentación de la API actualizada.
- [ ] Desplegado en el entorno de staging.

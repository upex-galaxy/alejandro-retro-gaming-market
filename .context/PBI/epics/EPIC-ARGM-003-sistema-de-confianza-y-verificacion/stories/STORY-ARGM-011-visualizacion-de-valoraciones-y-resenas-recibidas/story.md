---
id: STORY-ARGM-011
jira_id: null
epic_id: EPIC-ARGM-003
title: Como vendedor, quiero poder ver las valoraciones y reseñas que he recibido para construir mi reputación en la plataforma
priority: Medium
story_points: 5
assignee: null
status: To Do
---

## Description
Esta historia de usuario permite a los vendedores ver el feedback que han recibido de los compradores. Es una parte crucial del ciclo de retroalimentación, ya que permite a los vendedores hacer un seguimiento de su reputación y responder a las críticas si es necesario (aunque la respuesta a las reseñas puede ser una funcionalidad de una versión futura).

## Acceptance Criteria (Gherkin format)

**Scenario 1: Ver la lista de valoraciones recibidas**
- **Given:** Un vendedor que ha recibido varias valoraciones ha iniciado sesión.
- **When:** Navega a su panel de control y selecciona la pestaña "Mis Valoraciones".
- **Then:** Ve una lista cronológica de todas las valoraciones que ha recibido, mostrando la puntuación, el comentario, el nombre de usuario del comprador y el producto asociado a la transacción.

**Scenario 2: Ver la puntuación media**
- **Given:** Un vendedor está en su panel de "Mis Valoraciones".
- **When:** Mira en la parte superior de la página.
- **Then:** Ve su puntuación media general calculada a partir de todas las valoraciones recibidas, junto con un desglose del número de valoraciones de 5, 4, 3, 2 y 1 estrellas.

**Scenario 3: Las valoraciones son visibles públicamente**
- **Given:** Un comprador está viendo el perfil público de un vendedor.
- **When:** Hace clic en la pestaña o sección de "Valoraciones".
- **Then:** Puede ver la misma lista de valoraciones y la puntuación media que ve el vendedor, para poder evaluar su reputación.

## Technical Notes (iniciales)
- Crear una vista en el panel del vendedor dedicada a mostrar las valoraciones.
- La misma API que sirve las valoraciones para el perfil público puede ser reutilizada aquí.
- El cálculo del desglose de estrellas puede hacerse en el backend y pasarse a la API para evitar cálculos en el frontend.
- Considerar la paginación para vendedores con un gran número de valoraciones.

## Definition of Done
- [ ] Código implementado y funcionando para la visualización de valoraciones recibidas.
- [ ] Tests unitarios para la lógica de visualización y paginación (cobertura > 80%).
- [ ] Tests de integración para el endpoint de la API que sirve las valoraciones de un vendedor.
- [ ] Tests E2E (Playwright) que verifiquen que un vendedor puede ver sus valoraciones correctamente.
- [ ] Code review aprobado.
- [ ] Documentación de la API actualizada.
- [ ] Desplegado en el entorno de staging.

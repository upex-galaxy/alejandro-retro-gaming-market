---
id: STORY-ARGM-010
jira_id: null
epic_id: EPIC-ARGM-003
title: Como comprador, quiero poder dejar una valoración (de 1 a 5 estrellas) y una reseña a un vendedor después de una compra completada para compartir mi experiencia con la comunidad
priority: High
story_points: 8
assignee: null
status: To Do
---

## Description
Esta historia de usuario permite a los compradores calificar su experiencia con un vendedor después de una transacción. Este sistema de feedback es la base de la reputación en el marketplace y ayuda a futuros compradores a tomar decisiones informadas.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Dejar una valoración y reseña**
- **Given:** Un comprador ha completado una compra y el pedido ha sido marcado como "Entregado".
- **When:** Navega a su historial de compras, selecciona el pedido y elige la opción "Dejar Valoración". Rellena la puntuación (4 estrellas) y un comentario positivo.
- **Then:** La valoración se guarda y se asocia al vendedor y a esa transacción. El vendedor recibe una notificación.

**Scenario 2: Intento de dejar una valoración antes de tiempo**
- **Given:** Un comprador acaba de realizar un pedido que aún no ha sido enviado.
- **When:** Intenta encontrar la opción para dejar una valoración para esa compra.
- **Then:** La opción para dejar una valoración no está disponible hasta que el pedido se complete.

**Scenario 3: Dejar una valoración sin reseña**
- **Given:** Un comprador ha completado una compra.
- **When:** Elige dejar solo una puntuación de 5 estrellas, sin escribir un comentario.
- **Then:** La valoración se guarda correctamente. El comentario es opcional.

**Scenario 4: Editar una valoración**
- **Given:** Un comprador ya ha dejado una valoración para un pedido.
- **When:** Decide que quiere cambiar su puntuación o su comentario y vuelve a la opción de valoración.
- **Then:** Puede editar su valoración y comentario dentro de un período de tiempo limitado (ej. 30 días).

## Technical Notes (iniciales)
- El sistema debe tener una lógica clara para determinar cuándo se puede dejar una valoración (ej. después de que el estado del pedido cambie a "Entregado").
- Las valoraciones deben estar vinculadas a una transacción específica para evitar valoraciones falsas.
- La puntuación media del vendedor debe recalcularse de forma eficiente cada vez que se añade o edita una valoración.
- Considerar un sistema de notificaciones (en la plataforma y por correo) para informar al vendedor de nuevas valoraciones.

## Definition of Done
- [ ] Código implementado y funcionando para el sistema de valoraciones y reseñas.
- [ ] Tests unitarios para la lógica de cálculo de la puntuación media (cobertura > 80%).
- [ ] Tests de integración para los endpoints de la API de valoraciones.
- [ ] Tests E2E (Playwright) que simulen el flujo completo de dejar y ver una valoración.
- [ ] Code review aprobado.
- [ ] Documentación de la API de valoraciones actualizada.
- [ ] Desplegado en el entorno de staging.

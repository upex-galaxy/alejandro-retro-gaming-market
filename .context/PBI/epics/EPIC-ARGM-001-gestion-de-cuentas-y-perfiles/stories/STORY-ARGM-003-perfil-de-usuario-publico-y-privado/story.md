---
id: STORY-ARGM-003
jira_id: null
epic_id: EPIC-ARGM-001
title: Como usuario registrado, quiero tener un perfil público donde pueda ver mi reputación, mis artículos en venta y mis compras para construir confianza en la comunidad
priority: Medium
story_points: 8
assignee: null
status: To Do
---

## Description
Esta historia de usuario se centra en la creación de un perfil de usuario que tiene una parte pública, visible para toda la comunidad, y una parte privada, accesible solo por el propio usuario. El perfil público es clave para construir confianza y reputación dentro del marketplace.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Visualización de un perfil público ajeno**
- **Given:** Un usuario ha iniciado sesión.
- **When:** Visita el perfil de otro usuario (por ejemplo, haciendo clic en el nombre de un vendedor en un anuncio).
- **Then:** Puede ver la información pública del perfil, que incluye: nombre de usuario, fecha de registro, valoración media como vendedor, y la lista de artículos que tiene actualmente a la venta.

**Scenario 2: Visualización del perfil propio**
- **Given:** Un usuario ha iniciado sesión.
- **When:** Navega a su propia página de perfil.
- **Then:** Ve toda su información pública, y además tiene acceso a una sección privada para gestionar su cuenta (cambiar contraseña, editar correo) y ver su historial de compras.

**Scenario 3: Intento de acceso a la sección privada de otro usuario**
- **Given:** Un usuario ha iniciado sesión.
- **When:** Intenta acceder a la URL de la sección de gestión de cuenta de otro usuario.
- **Then:** Se le deniega el acceso y es redirigido a su propio perfil o a una página de error.

## Technical Notes (iniciales)
- Diseñar un modelo de datos que separe claramente la información pública de la privada del usuario.
- La API debe tener endpoints separados o una lógica de autorización robusta para servir los datos del perfil según quién los solicita.
- El frontend debe mostrar dinámicamente las opciones de edición solo si el perfil que se está viendo pertenece al usuario que ha iniciado sesión.

## Definition of Done
- [ ] Código implementado y funcionando para la visualización de perfiles de usuario.
- [ ] Tests unitarios para la lógica de negocio del perfil (cobertura > 80%).
- [ ] Tests de integración para los endpoints de la API de perfiles.
- [ ] Tests E2E (Playwright) que verifiquen la correcta visualización de perfiles públicos y privados.
- [ ] Code review aprobado.
- [ ] Documentación de la API de perfiles actualizada.
- [ ] Desplegado en el entorno de staging.

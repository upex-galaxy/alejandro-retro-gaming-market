---
id: STORY-ARGM-012
jira_id: null
epic_id: EPIC-ARGM-003
title: Como comprador o vendedor, si surge un problema con una transacción, quiero poder abrir un caso de disputa para que el equipo de soporte de la plataforma medie y me ayude a resolverlo
priority: Medium
story_points: 5
assignee: null
status: To Do
---

## Description
Esta historia de usuario introduce un mecanismo de seguridad para compradores y vendedores: un sistema de disputas. Si un producto no llega, no es como se describió, o surge cualquier otro problema, cualquiera de las partes puede iniciar un proceso de mediación con el equipo de soporte de la plataforma.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Abrir una disputa**
- **Given:** Un comprador ha recibido un producto que no coincide con la descripción del anuncio.
- **When:** Va a los detalles de su pedido y hace clic en "Abrir una Disputa". Rellena un formulario explicando el problema y adjunta fotos como prueba.
- **Then:** Se crea un nuevo caso de disputa con el estado "Abierto", el vendedor es notificado, y el caso aparece en una cola para el equipo de soporte.

**Scenario 2: El equipo de soporte gestiona la disputa**
- **Given:** Un caso de disputa ha sido abierto.
- **When:** Un miembro del equipo de soporte revisa el caso, se comunica con ambas partes (fuera de la plataforma en el MVP, por correo) y toma una decisión (ej. reembolso parcial, devolución del producto).
- **Then:** El administrador actualiza el estado de la disputa a "Resuelto" y registra la resolución en el sistema.

**Scenario 3: Visualización del estado de la disputa**
- **Given:** Un comprador o vendedor ha abierto una disputa.
- **When:** Va a su panel de control.
- **Then:** Puede ver el estado actual de su disputa ("Abierto", "En Revisión", "Resuelto").

## Technical Notes (iniciales)
- Crear un modelo de datos para los casos de disputa, que debe estar asociado a una transacción, un comprador y un vendedor.
- El formulario para abrir una disputa debe permitir adjuntar archivos (imágenes, PDFs).
- Crear un panel de administración básico para que el equipo de soporte pueda ver y gestionar la cola de disputas.
- Las notificaciones por correo electrónico son clave para mantener a las partes informadas del proceso.

## Definition of Done
- [ ] Código implementado y funcionando para el formulario de apertura de disputas.
- [ ] Código implementado para el panel de administración de disputas.
- [ ] Tests unitarios para la lógica de creación y cambio de estado de las disputas (cobertura > 80%).
- [ ] Tests de integración para los endpoints de la API de disputas.
- [ ] Tests E2E (Playwright) que simulen la apertura de una disputa por un usuario y su gestión por un admin.
- [ ] Code review aprobado.
- [ ] Documentación de la API y del proceso de gestión de disputas actualizada.
- [ ] Desplegado en el entorno de staging.

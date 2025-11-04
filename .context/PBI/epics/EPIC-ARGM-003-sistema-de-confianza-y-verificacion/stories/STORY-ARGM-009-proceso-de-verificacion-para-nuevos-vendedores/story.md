---
id: STORY-ARGM-009
jira_id: null
epic_id: EPIC-ARGM-003
title: Como vendedor nuevo, quiero poder pasar por un proceso de verificación único para obtener un "Sello de Vendedor Verificado" y así generar más confianza en los compradores
priority: High
story_points: 10
assignee: null
status: To Do
---

## Description
Esta historia de usuario define el proceso para que un vendedor solicite y obtenga un "Sello de Vendedor Verificado". En el MVP, este será un proceso manual gestionado por un administrador para asegurar un alto nivel de confianza. El sello será un distintivo visual clave en la plataforma.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Solicitud de verificación**
- **Given:** Un usuario registrado que quiere vender ha iniciado sesión.
- **When:** Navega a su perfil y hace clic en "Solicitar Verificación", y sube los documentos requeridos (ej. foto de DNI, enlace a su perfil de eBay).
- **Then:** Su estado de verificación cambia a "Pendiente de Revisión" y un administrador recibe una notificación.

**Scenario 2: Aprobación de la verificación**
- **Given:** Un administrador está revisando una solicitud de verificación pendiente.
- **When:** El administrador revisa los documentos, considera que son legítimos y aprueba la solicitud.
- **Then:** El estado del vendedor cambia a "Verificado", el "Sello de Vendedor Verificado" aparece en su perfil y en sus anuncios, y el vendedor recibe un correo de notificación.

**Scenario 3: Rechazo de la verificación**
- **Given:** Un administrador está revisando una solicitud de verificación pendiente.
- **When:** El administrador considera que los documentos no son suficientes o son fraudulentos y rechaza la solicitud.
- **Then:** El estado del vendedor vuelve a "No Verificado", y recibe un correo explicando los motivos del rechazo y cómo volver a intentarlo.

## Technical Notes (iniciales)
- Crear un panel de administración simple para que el equipo de soporte pueda ver y gestionar las solicitudes de verificación.
- El almacenamiento de documentos de identidad debe ser extremadamente seguro y cumplir con las normativas de protección de datos (e.g., GDPR). Los documentos deben ser accesibles solo por personal autorizado y eliminados después de la verificación.
- El "Sello de Vendedor Verificado" debe ser un componente visual reutilizable que se pueda añadir fácilmente a diferentes partes de la interfaz.

## Definition of Done
- [ ] Código implementado y funcionando para el flujo de solicitud de verificación.
- [ ] Código implementado para el panel de administración de verificaciones.
- [ ] Tests unitarios para la lógica de cambio de estado de verificación (cobertura > 80%).
- [ ] Tests de integración para los endpoints de la API relacionados con la verificación.
- [ ] Tests E2E (Playwright) que simulen la solicitud por parte del usuario y la aprobación/rechazo por parte de un admin.
- [ ] Code review aprobado.
- [ ] Documentación de la API y del proceso de administración actualizada.
- [ ] Desplegado en el entorno de staging.

---
id: STORY-ARGM-004
jira_id: null
epic_id: EPIC-ARGM-001
title: Como usuario que ha olvidado su contraseña, quiero poder solicitar un restablecimiento de la misma a través de mi correo electrónico para recuperar el acceso a mi cuenta
priority: High
story_points: 5
assignee: null
status: To Do
---

## Description
Esta historia de usuario implementa un flujo de autoservicio para que los usuarios que han olvidado su contraseña puedan restablecerla de forma segura. Este es un proceso crítico para la retención de usuarios.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Solicitud de restablecimiento de contraseña exitosa**
- **Given:** Un usuario se encuentra en la página de "He olvidado mi contraseña".
- **When:** Ingresa la dirección de correo electrónico asociada a su cuenta y hace clic en "Enviar".
- **Then:** Se le muestra un mensaje de confirmación y recibe un correo electrónico con un enlace único para restablecer su contraseña.

**Scenario 2: Intento de restablecimiento con un correo no registrado**
- **Given:** Un usuario se encuentra en la página de "He olvidado mi contraseña".
- **When:** Ingresa una dirección de correo electrónico que no existe en la base de datos.
- **Then:** Se muestra un mensaje genérico de confirmación (para no revelar qué correos están registrados) y no se envía ningún correo.

**Scenario 3: Restablecimiento de contraseña exitoso**
- **Given:** Un usuario ha recibido un enlace de restablecimiento de contraseña.
- **When:** Hace clic en el enlace, es llevado a una página para introducir una nueva contraseña, la introduce y la confirma.
- **Then:** Su contraseña es actualizada, es redirigido a la página de inicio de sesión y puede iniciar sesión con su nueva contraseña.

**Scenario 4: Enlace de restablecimiento inválido o expirado**
- **Given:** Un usuario intenta usar un enlace de restablecimiento de contraseña.
- **When:** El enlace es inválido, ya ha sido utilizado o ha expirado.
- **Then:** Se le muestra un mensaje de error y se le sugiere que inicie el proceso de nuevo.

## Technical Notes (iniciales)
- Generar un token de restablecimiento único y con un tiempo de vida corto (e.g., 1 hora).
- El token debe invalidarse después de su uso.
- El correo electrónico debe ser enviado a través de un servicio transaccional fiable.
- La página de restablecimiento de contraseña debe ser accesible públicamente pero solo funcional con un token válido.

## Definition of Done
- [ ] Código implementado y funcionando para el flujo de recuperación de contraseña.
- [ ] Tests unitarios para la generación y validación de tokens (cobertura > 80%).
- [ ] Tests de integración que verifiquen el flujo completo, incluyendo el envío de correo (usando un mock del servicio de correo).
- [ ] Tests E2E (Playwright) que simulen el proceso completo desde la solicitud hasta el restablecimiento.
- [ ] Code review aprobado.
- [ ] Documentación de la API de recuperación de contraseña actualizada.
- [ ] Desplegado en el entorno de staging.

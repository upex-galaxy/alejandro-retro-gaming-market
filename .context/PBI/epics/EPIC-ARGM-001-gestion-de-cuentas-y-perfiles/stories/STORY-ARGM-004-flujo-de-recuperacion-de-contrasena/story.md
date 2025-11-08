# User Story: Flujo de recuperación de contraseña

**ID:** STORY-ARGM-004
**Título:** Flujo de recuperación de contraseña
**Épico:** EPIC-ARGM-001: Gestión de Cuentas y Perfiles
**Prioridad:** CRITICAL

## Descripción

Como usuario que ha olvidado mi contraseña, quiero poder solicitar un restablecimiento a través de mi correo electrónico para recuperar el acceso a mi cuenta.

## Criterios de Aceptación

*   Debe existir un enlace claro de "¿Olvidaste tu contraseña?" en la página de inicio de sesión.
*   Al hacer clic en el enlace, el usuario debe ser dirigido a una página donde pueda introducir su correo electrónico asociado a la cuenta.
*   Al enviar el correo electrónico, el sistema debe enviar un enlace único y temporal para restablecer la contraseña a esa dirección de correo.
*   El enlace de restablecimiento debe tener una caducidad (ej. 1 hora).
*   Si el correo electrónico no está registrado, el sistema debe mostrar un mensaje genérico para evitar la enumeración de usuarios (ej. "Si la dirección de correo electrónico está registrada, recibirás un enlace para restablecer tu contraseña.").
*   Al hacer clic en el enlace del correo, el usuario debe ser dirigido a una página donde pueda establecer una nueva contraseña.
*   La nueva contraseña debe cumplir con los requisitos de seguridad (mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial).
*   Después de restablecer la contraseña exitosamente, el usuario debe ser notificado y redirigido a la página de inicio de sesión.

## Dependencias

*   Servicio de envío de correos electrónicos.
*   Base de datos de usuarios.

## Notas Adicionales

*   Asegurar que los tokens de restablecimiento de contraseña sean seguros y de un solo uso.
*   Registrar y monitorear los intentos de restablecimiento de contraseña para detectar posibles abusos.
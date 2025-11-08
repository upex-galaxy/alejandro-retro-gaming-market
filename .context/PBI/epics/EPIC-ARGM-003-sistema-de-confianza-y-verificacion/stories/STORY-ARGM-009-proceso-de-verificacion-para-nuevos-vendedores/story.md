# User Story: Proceso de verificación para nuevos vendedores

**ID:** STORY-ARGM-009
**Título:** Proceso de verificación para nuevos vendedores
**Épico:** EPIC-ARGM-003: Sistema de Confianza y Verificación
**Prioridad:** HIGH

## Descripción

Como nuevo vendedor, quiero poder pasar por un proceso de verificación único (ej. validando mi identidad) para obtener un "Sello de Vendedor Verificado" y así generar más confianza en los compradores.

## Criterios de Aceptación

*   Los usuarios que deseen vender deben iniciar un proceso de verificación desde su perfil.
*   El proceso de verificación debe solicitar:
    *   Documento de identidad (DNI/Pasaporte) o información fiscal.
    *   Prueba de residencia (ej. factura de servicios).
    *   Posiblemente, una verificación de cuenta bancaria.
*   El sistema debe permitir la subida segura de documentos.
*   Una vez enviados los documentos, el estado del vendedor debe cambiar a "Pendiente de Verificación".
*   El equipo de administración debe poder revisar y aprobar/rechazar las solicitudes de verificación.
*   Al ser aprobado, el vendedor debe obtener un "Sello de Vendedor Verificado" visible en su perfil y en sus anuncios.
*   El vendedor debe ser notificado por correo electrónico sobre el estado de su verificación (aprobado/rechazado).
*   En caso de rechazo, se deben indicar los motivos y los pasos para volver a intentarlo.

## Dependencias

*   EPIC-ARGM-001: Gestión de Cuentas y Perfiles (para la gestión del perfil del usuario).

## Notas Adicionales

*   Considerar la integración con un servicio de verificación de identidad de terceros para automatizar el proceso.
*   Definir claramente los requisitos de los documentos y el tiempo de respuesta para la verificación.
# User Story: Sistema de disputa de transacciones

**ID:** STORY-ARGM-012
**Título:** Sistema de disputa de transacciones
**Épico:** EPIC-ARGM-003: Sistema de Confianza y Verificación
**Prioridad:** HIGH

## Descripción

Como comprador o vendedor, si surge un problema con una transacción, quiero poder abrir un caso de disputa para que el equipo de soporte de la plataforma pueda mediar y ayudarme a resolverlo.

## Criterios de Aceptación

*   Debe existir una opción clara para "Abrir Disputa" en el historial de transacciones o en la página de detalle de una transacción.
*   Al abrir una disputa, el usuario debe poder:
    *   Seleccionar el motivo de la disputa (ej. artículo no recibido, artículo no coincide con la descripción, problema con el pago).
    *   Proporcionar una descripción detallada del problema.
    *   Adjuntar pruebas (ej. fotos, capturas de pantalla, comunicaciones).
*   Una vez abierta, la disputa debe ser visible para ambas partes (comprador y vendedor) y para el equipo de soporte de la plataforma.
*   Debe haber un sistema de mensajería dentro del caso de disputa para que las partes y el soporte puedan comunicarse.
*   El equipo de soporte debe poder:
    *   Revisar toda la información y pruebas.
    *   Mediar entre las partes.
    *   Tomar una decisión final sobre la disputa (ej. reembolso, devolución, cierre sin acción).
*   Ambas partes deben ser notificadas por correo electrónico sobre el progreso y la resolución de la disputa.
*   El estado de la disputa debe ser visible en todo momento (ej. Abierta, En Revisión, Resuelta).

## Dependencias

*   EPIC-ARGM-002: Marketplace: Compra y Venta (para las transacciones).
*   EPIC-ARGM-001: Gestión de Cuentas y Perfiles (para la identificación de usuarios).

## Notas Adicionales

*   Definir políticas claras de resolución de disputas.
*   Capacitar al equipo de soporte para manejar disputas de manera justa y eficiente.
*   Considerar la automatización de ciertos tipos de disputas simples.
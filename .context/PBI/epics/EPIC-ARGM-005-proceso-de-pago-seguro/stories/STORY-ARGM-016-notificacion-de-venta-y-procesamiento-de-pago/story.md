# User Story: Notificación de venta y procesamiento de pago

**ID:** STORY-ARGM-016
**Título:** Notificación de venta y procesamiento de pago
**Épico:** EPIC-ARGM-005: Proceso de Pago Seguro
**Prioridad:** CRITICAL

## Descripción

Como vendedor, quiero recibir una notificación cuando uno de mis productos ha sido vendido y el pago ha sido procesado para poder proceder con el envío.

## Criterios de Aceptación

*   Cuando un comprador completa exitosamente el proceso de pago de uno de los productos del vendedor, el vendedor debe recibir una notificación.
*   La notificación debe incluir:
    *   Detalles del producto vendido (nombre, cantidad, precio).
    *   Información del comprador (nombre, dirección de envío).
    *   Confirmación de que el pago ha sido procesado y los fondos están pendientes/disponibles.
    *   Instrucciones claras sobre cómo proceder con el envío.
*   La notificación debe ser enviada por correo electrónico y/o a través de un sistema de notificaciones dentro de la plataforma (ej. panel de vendedor).
*   El estado del pedido debe actualizarse en el panel del vendedor a "Pagado - Pendiente de Envío".
*   El vendedor debe poder confirmar el envío del producto desde su panel, lo que actualizará el estado del pedido a "Enviado".

## Dependencias

*   STORY-ARGM-015: Flujo de pago con carrito de compra.
*   EPIC-ARGM-001: Gestión de Cuentas y Perfiles (para la identificación del vendedor).

## Notas Adicionales

*   Considerar la integración con servicios de envío para generar etiquetas y números de seguimiento automáticamente.
*   Implementar un sistema de mensajería para que comprador y vendedor puedan comunicarse sobre el envío.
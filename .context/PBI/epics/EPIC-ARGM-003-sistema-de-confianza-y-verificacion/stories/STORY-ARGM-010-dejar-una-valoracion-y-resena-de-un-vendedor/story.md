# User Story: Dejar una valoración y reseña de un vendedor

**ID:** STORY-ARGM-010
**Título:** Dejar una valoración y reseña de un vendedor
**Épico:** EPIC-ARGM-003: Sistema de Confianza y Verificación
**Prioridad:** HIGH

## Descripción

Como comprador, quiero poder dejar una valoración (de 1 a 5 estrellas) y una reseña para un vendedor después de una compra completada para compartir mi experiencia con la comunidad.

## Criterios de Aceptación

*   Después de que una transacción se marque como completada, el comprador debe recibir una notificación o tener una opción visible para valorar al vendedor.
*   El formulario de valoración debe permitir al comprador:
    *   Asignar una calificación de 1 a 5 estrellas.
    *   Escribir un comentario o reseña sobre su experiencia con el vendedor.
*   La valoración y reseña deben estar asociadas a la transacción específica.
*   El comprador solo puede dejar una valoración y reseña por transacción.
*   Una vez enviada, la valoración y reseña deben ser visibles en el perfil público del vendedor y en la página de detalle del producto (si aplica).
*   El sistema debe calcular y actualizar la reputación promedio del vendedor.
*   El comprador debe poder editar o eliminar su reseña dentro de un período de tiempo limitado (opcional, a definir).

## Dependencias

*   EPIC-ARGM-002: Marketplace: Compra y Venta (para la finalización de transacciones).
*   STORY-ARGM-003: Perfil de usuario público y privado (para mostrar la reputación).

## Notas Adicionales

*   Establecer directrices claras para el contenido de las reseñas para evitar abusos.
*   Considerar un sistema de moderación para las reseñas.
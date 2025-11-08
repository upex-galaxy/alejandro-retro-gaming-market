# User Story: Visualización de reseñas de productos y vendedores

**ID:** STORY-ARGM-014
**Título:** Visualización de reseñas de productos y vendedores
**Épico:** EPIC-ARGM-004: Comunidad y Descubrimiento
**Prioridad:** HIGH

## Descripción

Como comprador, quiero poder leer las reseñas de otros usuarios sobre un producto o un vendedor para evaluar la fiabilidad y calidad antes de comprar.

## Criterios de Aceptación

*   En la página de detalle de cada producto, debe haber una sección visible que muestre las reseñas asociadas a ese producto (si las hay).
*   En el perfil de cada vendedor, o en sus anuncios, debe ser visible su calificación promedio y un enlace a todas las reseñas que ha recibido.
*   Cada reseña debe mostrar:
    *   La puntuación (ej. 4 de 5 estrellas).
    *   El comentario del usuario.
    *   La fecha de la reseña.
    *   El nombre de usuario o alias del autor de la reseña.
    *   El producto al que se refiere la reseña (si es una reseña de producto).
*   Debe ser posible ordenar y/o filtrar las reseñas (ej. por calificación, por fecha).
*   Debe haber una indicación clara de la puntuación promedio general del producto o vendedor.

## Dependencias

*   EPIC-ARGM-002: Marketplace: Compra y Venta (para los productos y vendedores).
*   EPIC-ARGM-003: Sistema de Confianza y Verificación (para la creación de reseñas).

## Notas Adicionales

*   Considerar la opción de "¿Te fue útil esta reseña?" para que los usuarios valoren las reseñas.
*   Implementar un sistema de paginación para reseñas extensas.
# User Story: Gestión de anuncios por parte del vendedor

**ID:** STORY-ARGM-006
**Título:** Gestión de anuncios por parte del vendedor
**Épico:** EPIC-ARGM-002: Marketplace: Compra y Venta
**Prioridad:** CRITICAL

## Descripción

Como vendedor, quiero poder ver y gestionar mis anuncios activos, pudiendo editarlos o marcarlos como vendidos, para mantener mi inventario actualizado.

## Criterios de Aceptación

*   El vendedor debe tener un panel o sección donde pueda ver todos sus anuncios publicados.
*   Cada anuncio en la lista debe mostrar información clave (título, precio, estado, fecha de publicación).
*   El vendedor debe poder hacer clic en un anuncio para ver sus detalles completos.
*   Desde la vista de detalles o la lista, el vendedor debe poder:
    *   Editar cualquier campo del anuncio (título, descripción, precio, imágenes, estado, etc.).
    *   Marcar el anuncio como "Vendido" o "No disponible".
    *   Eliminar el anuncio (con una confirmación previa).
*   Los cambios realizados en un anuncio deben reflejarse inmediatamente en el marketplace.
*   El sistema debe notificar al vendedor sobre el éxito de las operaciones de edición, marcado como vendido o eliminación.

## Dependencias

*   EPIC-ARGM-001: Gestión de Cuentas y Perfiles (para la autenticación del vendedor).
*   STORY-ARGM-005: Creación de un nuevo anuncio de producto.

## Notas Adicionales

*   Implementar un sistema de búsqueda y filtrado dentro del panel de gestión de anuncios del vendedor.
*   Considerar la posibilidad de pausar anuncios temporalmente.
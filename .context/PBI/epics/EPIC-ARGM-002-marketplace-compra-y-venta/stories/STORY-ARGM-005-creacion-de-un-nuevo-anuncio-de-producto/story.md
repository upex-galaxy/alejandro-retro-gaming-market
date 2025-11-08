# User Story: Creación de un nuevo anuncio de producto

**ID:** STORY-ARGM-005
**Título:** Creación de un nuevo anuncio de producto
**Épico:** EPIC-ARGM-002: Marketplace: Compra y Venta
**Prioridad:** CRITICAL

## Descripción

Como vendedor, quiero poder crear un anuncio para una consola o juego retro, subiendo fotos, una descripción detallada, precio y estado del artículo, para poder poner mis productos a la venta.

## Criterios de Aceptación

*   El vendedor debe poder acceder a un formulario para crear un nuevo anuncio.
*   El formulario debe permitir al vendedor:
    *   Subir múltiples imágenes del producto.
    *   Introducir un título para el anuncio.
    *   Escribir una descripción detallada del producto.
    *   Seleccionar la categoría del producto (ej. Consola, Juego, Accesorio).
    *   Especificar la plataforma (ej. NES, SNES, PlayStation).
    *   Indicar el estado del producto (ej. Nuevo, Usado - Excelente, Usado - Buen estado, Usado - Aceptable).
    *   Establecer un precio de venta.
    *   Especificar opciones de envío.
*   Todas las imágenes deben ser validadas en cuanto a formato y tamaño.
*   La descripción debe permitir formato de texto enriquecido (ej. Markdown).
*   El precio debe ser un valor numérico válido.
*   Al enviar el formulario, el anuncio debe ser creado y visible en el perfil del vendedor y en el marketplace (una vez aprobado, si aplica).
*   El sistema debe notificar al vendedor sobre la publicación exitosa de su anuncio.

## Dependencias

*   EPIC-ARGM-001: Gestión de Cuentas y Perfiles (para la autenticación del vendedor).
*   Servicio de almacenamiento de imágenes.

## Notas Adicionales

*   Considerar un proceso de moderación para los anuncios antes de su publicación.
*   Implementar sugerencias de categorías y plataformas para mejorar la experiencia del usuario.
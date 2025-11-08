# User Story: Búsqueda y filtrado de productos

**ID:** STORY-ARGM-007
**Título:** Búsqueda y filtrado de productos
**Épico:** EPIC-ARGM-002: Marketplace: Compra y Venta
**Prioridad:** CRITICAL

## Descripción

Como comprador, quiero poder buscar y filtrar productos por nombre, consola, categoría o condición para encontrar fácilmente los artículos que me interesan.

## Criterios de Aceptación

*   Debe existir una barra de búsqueda visible en la página principal y en la página del marketplace.
*   La búsqueda debe permitir buscar por el título y la descripción de los anuncios.
*   Los resultados de la búsqueda deben mostrarse de forma clara y paginada.
*   Debe haber opciones de filtrado por:
    *   Categoría (ej. Consolas, Juegos, Accesorios).
    *   Plataforma (ej. NES, SNES, PlayStation, Xbox).
    *   Estado del producto (ej. Nuevo, Usado - Excelente, Usado - Buen estado, Usado - Aceptable).
    *   Rango de precios.
    *   Vendedor (opcional).
*   Los filtros deben ser combinables y aplicarse en tiempo real o con un botón de "Aplicar Filtros".
*   El sistema debe mostrar el número de resultados encontrados para la búsqueda y los filtros aplicados.
*   Si no hay resultados, se debe mostrar un mensaje indicándolo.

## Dependencias

*   STORY-ARGM-005: Creación de un nuevo anuncio de producto (para tener productos que buscar y filtrar).

## Notas Adicionales

*   Implementar un motor de búsqueda eficiente y rápido.
*   Considerar la autocompletado en la barra de búsqueda.
*   Permitir ordenar los resultados por relevancia, precio (ascendente/descendente), fecha de publicación.
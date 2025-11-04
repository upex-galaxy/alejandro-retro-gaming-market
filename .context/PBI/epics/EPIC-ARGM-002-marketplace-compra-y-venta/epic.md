---
id: EPIC-ARGM-002
jira_id: null
title: Marketplace Compra y Venta
priority: High
business_value: High
estimated_story_points: 24
---

## Description
Esta épica es el corazón del marketplace. Define las funcionalidades que permiten a los vendedores listar sus productos y a los compradores encontrarlos y tomar decisiones de compra informadas. Cubre todo el ciclo de vida de un anuncio, desde su creación hasta que un comprador lo encuentra.

## Scope
**In Scope:**
- Creación de anuncios de productos por parte de los vendedores.
- Gestión (ver, editar, marcar como vendido) de los anuncios existentes.
- Funcionalidad de búsqueda de productos por texto.
- Filtrado de productos por criterios clave (consola, categoría, estado).
- Vista de detalle completa de un producto.

**Out of Scope:**
- Sistema de subastas (solo precio fijo en el MVP).
- Anuncios destacados o promocionados.
- Guardar búsquedas o crear alertas.
- Comparación de productos.

## Acceptance Criteria (Epic-level)
- [ ] Un vendedor puede crear y publicar un anuncio para un artículo de gaming retro.
- [ ] Un vendedor puede gestionar sus anuncios activos.
- [ ] Un comprador puede buscar y encontrar productos de manera eficiente.
- [ ] Un comprador puede ver toda la información necesaria de un producto para decidir si comprarlo o no.

## Dependencies
- **Épicas dependientes:** EPIC-ARGM-001 (los usuarios deben poder registrarse e iniciar sesión para vender).
- **Recursos externos:** Ninguno.
- **Technical pre-requisites:** Base de datos para almacenar productos y anuncios.

## User Stories
- STORY-ARGM-005: Como vendedor, quiero poder crear un listado para una consola o juego retro, subiendo fotos, una descripción detallada, precio y estado del artículo, para poder poner mis productos a la venta. (8 pts)
- STORY-ARGM-006: Como vendedor, quiero poder ver y gestionar mis listados activos, pudiendo editarlos o marcarlos como vendidos, para mantener mi inventario actualizado. (5 pts)
- STORY-ARGM-007: Como comprador, quiero poder buscar y filtrar productos por nombre, consola, categoría o estado para encontrar fácilmente los artículos que me interesan. (5 pts)
- STORY-ARGM-008: Como comprador, quiero poder ver la página de detalle de un producto con toda la información relevante y el perfil del vendedor para tomar una decisión de compra informada. (6 pts)

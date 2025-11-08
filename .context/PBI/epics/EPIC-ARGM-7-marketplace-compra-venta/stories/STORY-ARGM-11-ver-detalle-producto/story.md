# Vista de Detalle del Producto

**Jira Key:** ARGM-11
**Epic:** EPIC-ARGM-7 (Marketplace: Compra y Venta)
**Priority:** High
**Story Points:** 5
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** buyer
**I want to** be able to see the detail page of a product with all the relevant information and the seller's profile
**So that** I can make an informed purchase decision.

---

## Description

La página de detalle del producto es crucial para que los compradores puedan evaluar un artículo antes de decidirse a comprar. Debe presentar de forma clara y atractiva toda la información relevante del producto, incluyendo fotos de alta calidad, una descripción completa, el precio, el estado y detalles sobre el vendedor.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Visualización completa del detalle del producto
- **Given:** Un comprador navega a la página de detalle de un producto.
- **When:** La página carga correctamente.
- **Then:** Se muestran el título, descripción, precio, estado, múltiples imágenes, y un enlace al perfil del vendedor.

### Scenario 2: Happy Path - Enlace al perfil del vendedor
- **Given:** Un comprador está en la página de detalle de un producto.
- **When:** Hace clic en el nombre o enlace del vendedor.
- **Then:** Es redirigido a la página de perfil público del vendedor.

### Scenario 3: Edge Case - Producto no encontrado
- **Given:** Un comprador intenta acceder a una URL de detalle de producto con un ID inexistente.
- **When:** La página intenta cargar.
- **Then:** El sistema muestra una página de error 404 o un mensaje indicando que el producto no fue encontrado.

---

## Technical Notes

### Frontend
- Crear un componente `ProductDetailPage` que reciba el ID del producto de la URL.
- Mostrar un carrusel de imágenes para las fotos del producto.
- Integrar un componente `SellerProfileLink` que muestre el nombre del vendedor y enlace a su perfil.

### Backend
- Crear un endpoint `GET /api/listings/:listingId` que devuelva todos los detalles de un producto, incluyendo la información pública del vendedor y las URLs de las imágenes.
- Manejar casos donde el `listingId` no existe.

### Database
- **Tablas:** `listings`, `listing_images`, `users` (para la información del vendedor).
- **Acción:** Lectura y join de tablas.

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para el endpoint de detalle de producto.
- [ ] Tests de componente para la página de detalle.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

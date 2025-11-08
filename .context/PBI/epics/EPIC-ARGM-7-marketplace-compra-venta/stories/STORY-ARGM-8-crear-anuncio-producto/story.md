# Creación de un Nuevo Anuncio de Producto

**Jira Key:** ARGM-8
**Epic:** EPIC-ARGM-7 (Marketplace: Compra y Venta)
**Priority:** High
**Story Points:** 8
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** seller
**I want to** be able to create a listing for a retro console or game, uploading photos, a detailed description, price, and condition of the item
**So that** I can put my products up for sale.

---

## Description

Esta funcionalidad es el punto de partida para que los vendedores puedan poblar el marketplace con sus productos. El formulario de creación de anuncios debe ser intuitivo y guiar al vendedor para que proporcione toda la información necesaria que un comprador esperaría encontrar.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Creación de anuncio exitosa
- **Given:** Un vendedor verificado ha iniciado sesión.
- **When:** Completa el formulario de "Nuevo Anuncio" con todos los campos obligatorios (título, descripción, precio, estado, al menos 3 fotos) y lo envía.
- **Then:** El anuncio se crea con el estado "Activo", es visible en el marketplace y el vendedor es redirigido a la página de su nuevo anuncio.

### Scenario 2: Error - Faltan campos obligatorios
- **Given:** Un vendedor está en el formulario de nuevo anuncio.
- **When:** Intenta enviar el formulario sin rellenar el precio.
- **Then:** El sistema muestra un mensaje de error junto al campo de precio y el formulario no se envía.

### Scenario 3: Error - Formato de imagen no válido
- **Given:** Un vendedor está subiendo fotos para su anuncio.
- **When:** Intenta subir un archivo que no es una imagen (ej. un PDF).
- **Then:** El sistema muestra un mensaje de error indicando que el formato de archivo no es compatible y no sube el archivo.

---

## Technical Notes

### Frontend
- Crear un componente `ListingForm` con todos los campos necesarios.
- Utilizar un componente de subida de archivos que permita previsualizar las imágenes.
- La subida de imágenes podría hacerse a un servicio de almacenamiento en la nube (como AWS S3 o Cloudinary) directamente desde el cliente para no sobrecargar el backend.

### Backend
- Crear un endpoint `POST /api/listings`.
- Validar todos los datos del anuncio.
- Asegurarse de que el usuario que crea el anuncio es un vendedor verificado.
- Guardar la información del anuncio en la tabla `listings` y las URLs de las imágenes en `listing_images`.

### Database
- **Tablas:** `listings`, `listing_images`.
- **Acción:** Inserción de nuevos registros.

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para el endpoint de creación de anuncios.
- [ ] Tests de componente para el formulario.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

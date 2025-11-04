# SRS: Contratos de API (MVP)

**Proyecto:** Alejandro Retro Gaming Market
**Documento:** Contratos de la Interfaz de Programación de Aplicaciones (API)
**Fecha:** 30 de octubre de 2025

---

## Introducción

Esta es la especificación de la API RESTful para el MVP de "Retro Hub". La URL base para todos los endpoints será `https://api.retrohub.com/v1`.

**Autenticación:** Los endpoints que requieren autenticación esperarán un JSON Web Token (JWT) en la cabecera `Authorization` con el formato `Bearer <token>`.

---

## 1.0 Autenticación y Usuarios (`/auth`, `/users`)

### `POST /auth/register`
- **Descripción:** Registra un nuevo usuario.
- **Autenticación:** No requerida.
- **Cuerpo de la Solicitud (`application/json`):**
  ```json
  {
    "username": "nuevo_usuario",
    "email": "usuario@email.com",
    "password": "contraseña_segura"
  }
  ```
- **Respuesta Exitosa (`201 Created`):**
  ```json
  {
    "userId": "uuid-1234-abcd",
    "username": "nuevo_usuario"
  }
  ```

### `POST /auth/login`
- **Descripción:** Autentica a un usuario y devuelve un token de acceso.
- **Autenticación:** No requerida.
- **Cuerpo de la Solicitud (`application/json`):**
  ```json
  {
    "email": "usuario@email.com",
    "password": "contraseña_segura"
  }
  ```
- **Respuesta Exitosa (`200 OK`):**
  ```json
  {
    "accessToken": "ey...",
    "userId": "uuid-1234-abcd"
  }
  ```

### `GET /users/{userId}`
- **Descripción:** Obtiene el perfil público de un usuario.
- **Autenticación:** No requerida.
- **Respuesta Exitosa (`200 OK`):**
  ```json
  {
    "userId": "uuid-1234-abcd",
    "username": "JavierColeccionista",
    "joinDate": "2025-10-30T10:00:00Z",
    "isVerifiedSeller": true,
    "sellerRating": 4.8
  }
  ```

---

## 2.0 Anuncios (`/listings`)

### `POST /listings`
- **Descripción:** Crea un nuevo anuncio de producto.
- **Autenticación:** Requerida (solo vendedores).
- **Cuerpo de la Solicitud (`application/json`):**
  ```json
  {
    "title": "Super Nintendo en perfecto estado",
    "description": "Restaurada y con cables originales.",
    "console": "SNES",
    "condition": "Restaurado",
    "price": 150.00,
    "imageUrls": ["url1.jpg", "url2.jpg"]
  }
  ```
- **Respuesta Exitosa (`201 Created`):**
  ```json
  {
    "listingId": "listing-uuid-5678",
    "status": "Activo"
  }
  ```

### `GET /listings`
- **Descripción:** Obtiene una lista de anuncios, con filtros.
- **Autenticación:** No requerida.
- **Parámetros de Query (ejemplos):** `?search=zelda&console=N64&minPrice=50&maxPrice=200`
- **Respuesta Exitosa (`200 OK`):**
  ```json
  {
    "results": [
      {
        "listingId": "listing-uuid-5678",
        "title": "Nintendo 64 con Zelda Ocarina of Time",
        "price": 120.00,
        "thumbnailUrl": "url_thumb.jpg",
        "seller": {
          "username": "VendedorPro",
          "isVerified": true
        }
      }
    ],
    "page": 1,
    "totalPages": 5
  }
  ```

### `GET /listings/{listingId}`
- **Descripción:** Obtiene los detalles completos de un solo anuncio.
- **Autenticación:** No requerida.
- **Respuesta Exitosa (`200 OK`):** (Contenido similar al `POST` pero con más detalles del vendedor).

---

## 3.0 Pedidos (`/orders`)

### `POST /orders`
- **Descripción:** Crea un pedido para comprar un artículo (inicia el checkout).
- **Autenticación:** Requerida.
- **Cuerpo de la Solicitud (`application/json`):**
  ```json
  {
    "listingId": "listing-uuid-5678",
    "shippingAddressId": "address-uuid-abcd"
  }
  ```
- **Respuesta Exitosa (`201 Created`):**
  ```json
  {
    "orderId": "order-uuid-9101",
    "status": "Pendiente de Pago",
    "totalAmount": 158.50, // Incluye envío
    "paymentGatewayUrl": "https://stripe.com/pay/..."
  }
  ```

---

## 4.0 Valoraciones (`/reviews`)

### `POST /reviews`
- **Descripción:** Envía una valoración para un pedido completado.
- **Autenticación:** Requerida (solo el comprador del pedido).
- **Cuerpo de la Solicitud (`application/json`):**
  ```json
  {
    "orderId": "order-uuid-9101",
    "rating": 5,
    "comment": "¡Todo perfecto! La consola llegó rápido y funciona de maravilla."
  }
  ```
- **Respuesta Exitosa (`201 Created`):**
  ```json
  {
    "reviewId": "review-uuid-1112"
  }
  ```
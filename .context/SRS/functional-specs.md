# SRS: Especificaciones Funcionales del MVP

**Proyecto:** Alejandro Retro Gaming Market
**Documento:** Especificaciones Funcionales (Software Requirements Specification)
**Fecha:** 30 de octubre de 2025

---

## 1.0 Gestión de Cuentas y Perfiles

### **F-1.1: Registro de Usuario**
- **Descripción:** Permite a un nuevo visitante crear una cuenta en la plataforma.
- **Requerimientos:**
    - El formulario de registro debe solicitar: Nombre de usuario, correo electrónico y contraseña.
    - El nombre de usuario debe ser único en la plataforma.
    - El correo electrónico debe ser único y tener un formato válido.
    - La contraseña debe tener un mínimo de 8 caracteres.
- **Criterios de Aceptación:**
    - **Dado** un visitante en la página de registro,
    - **Cuando** completa el formulario con datos válidos y únicos,
    - **Entonces** se crea una nueva cuenta de usuario, se le redirige a la página de inicio y se le envía un correo de bienvenida.

### **F-1.2: Perfil de Usuario**
- **Descripción:** Cada usuario tiene un perfil que muestra su información pública y gestiona sus datos privados.
- **Requerimientos:**
    - El perfil público debe mostrar: Nombre de usuario, fecha de registro, valoración media como vendedor/comprador y listados activos (si es vendedor).
    - La sección privada (solo visible por el propio usuario) debe permitir editar el correo electrónico y cambiar la contraseña.
- **Criterios de Aceptación:**
    - **Dado** un usuario que ha iniciado sesión,
    - **Cuando** visita el perfil de otro usuario,
    - **Entonces** solo ve la información pública.

### **F-1.3: Sistema de Valoración y Reputación**
- **Descripción:** Permite a los compradores valorar a los vendedores tras una compra completada.
- **Requerimientos:**
    - Tras la entrega confirmada de un pedido, el comprador recibe una notificación para valorar al vendedor.
    - La valoración consiste en una puntuación de 1 a 5 estrellas y un comentario opcional.
    - La valoración media del vendedor se muestra públicamente en su perfil y en sus anuncios.
- **Criterios de Aceptación:**
    - **Dado** un comprador cuyo pedido ha sido entregado,
    - **Cuando** envía una valoración de 4 estrellas,
    - **Entonces** la valoración se añade al perfil del vendedor y su puntuación media se recalcula.

## 2.0 Marketplace: Flujo de Venta

### **F-2.1: Creación de Anuncios (Listings)**
- **Descripción:** Permite a un vendedor verificado poner un artículo a la venta.
- **Requerimientos:**
    - El formulario de creación de anuncio debe incluir los siguientes campos obligatorios: Título, Consola, Estado (ej. "Original", "Restaurado", "Modificado"), Descripción, Precio, y al menos 3 imágenes.
    - El precio debe ser un valor numérico positivo.
    - El anuncio recién creado tendrá el estado "Activo".
- **Criterios de Aceptación:**
    - **Dado** un vendedor verificado,
    - **Cuando** completa y envía el formulario de creación de anuncio con todos los datos requeridos,
    - **Entonces** el anuncio se publica y es visible en el marketplace.

## 3.0 Marketplace: Flujo de Compra

### **F-3.1: Búsqueda y Filtros**
- **Descripción:** Permite a los usuarios buscar y filtrar productos en el marketplace.
- **Requerimientos:**
    - La barra de búsqueda debe buscar coincidencias en el título y la descripción de los anuncios.
    - Se deben poder aplicar los siguientes filtros: Categoría/Consola, Estado, Rango de Precios, y "Solo Vendedores Verificados".
- **Criterios de Aceptación:**
    - **Dado** un usuario en la página del marketplace,
    - **Cuando** busca "Zelda" y filtra por "Vendedores Verificados",
    - **Entonces** la página muestra únicamente los anuncios que contienen "Zelda" y pertenecen a vendedores con el sello de confianza.

### **F-3.2: Proceso de Pago (Checkout)**
- **Descripción:** Permite a un comprador adquirir un producto de forma segura.
- **Requerimientos:**
    - El flujo de checkout debe tener los siguientes pasos: 1. Dirección de envío, 2. Método de pago, 3. Confirmación.
    - Debe integrarse con una pasarela de pago (ej. Stripe) para procesar pagos con tarjeta de crédito/débito.
    - El coste total (producto + envío) debe mostrarse claramente.
    - Al confirmar la compra, el stock del producto se descuenta y el anuncio se marca como "Vendido".
- **Criterios de Aceptación:**
    - **Dado** un comprador en la página de un producto,
    - **Cuando** completa el proceso de checkout,
    - **Entonces** el pago se procesa, el vendedor recibe una notificación de venta y el comprador recibe un correo de confirmación del pedido.

## 4.0 Sistema de Confianza (MVP)

### **F-4.1: Verificación de Vendedores**
- **Descripción:** Proceso para otorgar un "Sello de Confianza" a los vendedores.
- **Requerimientos:**
    - Un usuario puede solicitar la verificación desde su perfil.
    - El proceso (gestionado manualmente por un admin en el MVP) requiere que el usuario envíe un documento de identidad y pruebas de su legitimidad (fotos de su colección, enlaces a perfiles en otros sitios, etc.).
    - Los vendedores verificados tendrán un distintivo visible en su perfil y anuncios.
- **Criterios de Aceptación:**
    - **Dado** un administrador revisando una solicitud de verificación,
    - **Cuando** aprueba la solicitud,
    - **Entonces** el perfil del vendedor muestra el "Sello de Confianza".

## 5.0 Descubrimiento

### **F-5.1: Guía para Novatos**
- **Descripción:** Un cuestionario interactivo para recomendar una consola a nuevos usuarios.
- **Requerimientos:**
    - El cuestionario constará de 3-4 preguntas de opción múltiple sobre géneros de juegos preferidos (ej. "¿Prefieres aventuras épicas, juegos de lucha o puzzles?").
    - Basado en las respuestas, el sistema mostrará una página de resultados con la consola recomendada, una breve descripción y un enlace para ver los anuncios de esa consola.
- **Criterios de Aceptación:**
    - **Dado** un usuario que elige "Aventuras épicas" en el cuestionario,
    - **Cuando** finaliza el cuestionario,
    - **Entonces** la plataforma le recomienda la "Super Nintendo" y le muestra un botón para "Ver consolas SNES".
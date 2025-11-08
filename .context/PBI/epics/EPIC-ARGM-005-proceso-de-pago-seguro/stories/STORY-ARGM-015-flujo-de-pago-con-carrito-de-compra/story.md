# User Story: Flujo de pago con carrito de compra

**ID:** STORY-ARGM-015
**Título:** Flujo de pago con carrito de compra
**Épico:** EPIC-ARGM-005: Proceso de Pago Seguro
**Prioridad:** CRITICAL

## Descripción

Como comprador, quiero poder añadir un producto a mi carrito de compra y proceder al pago de forma segura a través de una pasarela de pago integrada para completar mi pedido.

## Criterios de Aceptación

*   El usuario debe poder añadir productos al carrito de compra desde la página de detalle del producto.
*   El carrito de compra debe mostrar los productos seleccionados, sus cantidades, precios unitarios y el total.
*   El usuario debe poder ajustar las cantidades de los productos en el carrito o eliminarlos.
*   Debe existir un botón claro para "Proceder al Pago" en el carrito.
*   Al proceder al pago, el usuario debe ser dirigido a una página de checkout segura donde pueda:
    *   Revisar su pedido.
    *   Seleccionar o introducir una dirección de envío.
    *   Seleccionar un método de pago (tarjeta de crédito/débito, PayPal, etc.).
    *   Introducir los datos de pago de forma segura a través de una pasarela de pago integrada.
*   El sistema debe validar los datos de pago y procesar la transacción.
*   Tras un pago exitoso, el usuario debe recibir una confirmación de pedido y ser redirigido a una página de confirmación.
*   En caso de fallo en el pago, el usuario debe ser notificado con un mensaje claro y tener la opción de reintentar.

## Dependencias

*   EPIC-ARGM-002: Marketplace: Compra y Venta (para los productos).
*   EPIC-ARGM-001: Gestión de Cuentas y Perfiles (para la dirección de envío y métodos de pago guardados).

## Notas Adicionales

*   Integrar con pasarelas de pago PCI DSS compliant.
*   Implementar un sistema de gestión de inventario para asegurar la disponibilidad de los productos.
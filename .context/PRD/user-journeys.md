# PRD: Viajes de Usuario (User Journeys)

**Proyecto:** Alejandro Retro Gaming Market
**Documento:** Viajes de Usuario para el MVP
**Fecha:** 30 de octubre de 2025

---

Este documento describe los caminos que nuestras personas clave, Javier (Vendedor) y Sofía (Compradora), tomarán para alcanzar sus objetivos dentro de la plataforma "Retro Hub".

## Viaje 1: Javier vende una consola restaurada

**Persona:** Javier, el Coleccionista Veterano
**Objetivo:** Vender una consola Super Nintendo restaurada de forma segura y a un precio justo.

| Fase | Acción del Usuario (Javier) | Funcionalidad de la Plataforma | Sentimiento de Javier |
| :--- | :--- | :--- | :--- |
| **1. Registro y Verificación** | Se registra en Retro Hub y solicita la verificación como vendedor. Sube su identificación y fotos de su taller/colección. | - Formulario de registro simple.<br>- Flujo de "Solicitar Verificación" en el perfil.<br>- Panel de vendedor con estado "Pendiente de Verificación". | "Espero que el proceso de verificación sea rápido. Me gusta que se tomen en serio quién vende aquí." |
| **2. Creación del Anuncio** | Una vez verificado, hace clic en "Vender" y completa un formulario detallado para su SNES: sube fotos, describe el estado, la restauración realizada y fija un precio. | - Formulario de creación de listado con campos específicos para consolas (región, número de serie, modificaciones, etc.).<br>- Sistema de subida de imágenes. | "El formulario es detallado, pero eso es bueno. Me permite demostrar la calidad de mi trabajo y diferenciarme de los malos vendedores." |
| **3. Gestión de la Venta** | Recibe una notificación de que Sofía ha comprado su consola. La venta aparece en su panel de vendedor. | - Sistema de notificaciones (email/push).<br>- Panel de control de ventas con estados: "Vendido", "Enviado", "Entregado", "Pagado". | "¡Genial, una venta! El panel es claro y me dice exactamente qué tengo que hacer ahora." |
| **4. Envío del Producto** | Empaqueta la consola cuidadosamente, imprime la etiqueta de envío generada por la plataforma y marca el pedido como "Enviado" en su panel. | - Integración con la API del proveedor de logística para generar etiquetas.<br>- Botón para actualizar el estado del pedido. | "Tener la etiqueta de envío lista me ahorra mucho tiempo. Ahora el comprador sabe que su paquete está en camino." |
| **5. Recepción del Pago y Valoración** | Unos días después de la entrega, la plataforma libera el pago a su cuenta. Recibe una notificación de que Sofía ha dejado una valoración de 5 estrellas. | - El pago se retiene en *escrow* y se libera automáticamente tras la confirmación de entrega y un breve periodo de seguridad.<br>- Sistema de valoraciones y reputación. | "El pago llegó sin problemas. La buena valoración de Sofía me ayudará a vender más en el futuro. Esta plataforma funciona." |

---

## Viaje 2: Sofía descubre y compra su primera consola retro

**Persona:** Sofía, la Novata Curiosa
**Objetivo:** Encontrar y comprar la consola retro adecuada para ella de forma segura y sin sentirse abrumada.

| Fase | Acción del Usuario (Sofía) | Funcionalidad de la Plataforma | Sentimiento de Sofía |
| :--- | :--- | :--- | :--- |
| **1. Descubrimiento Guiado** | Llega a Retro Hub desde un video de YouTube. En la página de inicio, ve y hace clic en la "Guía para Novatos". Responde a un breve cuestionario sobre sus juegos modernos favoritos. | - Página de inicio atractiva con un claro Call-to-Action (CTA) para la guía.<br>- Cuestionario interactivo ("¿Qué tipo de juegos te gustan?").<br>- Página de resultados que recomienda una consola (ej. SNES) y explica por qué. | "¡Qué útil! No sabía por dónde empezar. Ahora sé que una SNES es lo que busco. Me siento más orientada." |
| **2. Exploración y Búsqueda** | Usa la barra de búsqueda y escribe "Super Nintendo". Filtra los resultados para ver solo consolas de vendedores con "Sello de Confianza". | - Barra de búsqueda prominente.<br>- Página de resultados con tarjetas de producto claras.<br>- Filtros de búsqueda (por vendedor verificado, estado del producto, precio, etc.). | "Hay muchas opciones, pero los filtros me ayudan a reducir la búsqueda a lo que me da más seguridad." |
| **3. Evaluación del Producto** | Hace clic en el anuncio de Javier. Revisa las fotos en alta resolución, lee la descripción detallada de la restauración y comprueba las valoraciones de Javier como vendedor. | - Página de detalle del producto con galería de imágenes, descripción, precio y detalles del vendedor.<br>- Perfil público del vendedor con su historial de valoraciones y otros artículos a la venta. | "Las fotos son muy claras y la descripción me dice todo lo que necesito saber. Este vendedor parece muy profesional y confiable." |
| **4. Proceso de Compra** | Se siente segura y hace clic en "Comprar Ahora". Introduce sus datos de envío y paga con su tarjeta de crédito a través de un formulario seguro. | - Flujo de checkout sencillo y en pocos pasos.<br>- Integración con pasarela de pago segura (Stripe/PayPal).<br>- Resumen claro del pedido antes de la confirmación final. | "El proceso de pago es como el de cualquier tienda online moderna. Me siento segura introduciendo mis datos." |
| **5. Post-Compra y Valoración** | Recibe su consola, la prueba y ¡funciona perfectamente! Unos días después, la plataforma le pide que valore su experiencia. Deja una reseña de 5 estrellas para Javier. | - Notificaciones por email sobre el estado del envío.<br>- Recordatorio para dejar una valoración.<br>- Formulario simple para puntuar y escribir una reseña. | "¡La consola es increíble! Todo fue perfecto. Dejaré una buena reseña para que otros sepan que este vendedor es de fiar." |
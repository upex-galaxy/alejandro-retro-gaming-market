# SRS: Especificaciones No Funcionales del MVP

**Proyecto:** Alejandro Retro Gaming Market
**Documento:** Especificaciones No Funcionales (Software Requirements Specification)
**Fecha:** 30 de octubre de 2025

---

Este documento define los atributos de calidad, restricciones y características operativas del sistema. Describe *cómo* debe ser el sistema, en lugar de *qué* debe hacer.

### 1.0 Usabilidad

- **NFR-1.1 (Intuitivo):** El diseño de la interfaz debe ser limpio, moderno y autoexplicativo. Un usuario sin experiencia previa debe poder completar los viajes de usuario principales (compra y venta) sin necesidad de un tutorial.
- **NFR-1.2 (Eficiencia):** Las tareas críticas deben requerir un número mínimo de clics. El proceso de checkout no debe exceder los 3 pasos desde la página del producto.
- **NFR-1.3 (Accesibilidad):** La plataforma web debe cumplir con las directrices de accesibilidad WCAG 2.1 Nivel AA, asegurando que sea usable por personas con discapacidades (ej. lectores de pantalla, navegación por teclado).
- **NFR-1.4 (Idioma):** Todo el contenido de la interfaz para el MVP estará en español.

### 2.0 Rendimiento

- **NFR-2.1 (Tiempo de Carga):** El LCP (Largest Contentful Paint) para las páginas clave (inicio, página de producto, resultados de búsqueda) debe ser inferior a 2.5 segundos en una conexión de banda ancha estándar.
- **NFR-2.2 (Respuesta del Servidor):** El tiempo de respuesta del backend (API) para el 95% de las solicitudes debe ser inferior a 500 milisegundos.
- **NFR-2.3 (Carga Concurrente):** El sistema debe poder soportar una carga inicial de 1,000 usuarios concurrentes sin una degradación significativa del rendimiento.

### 3.0 Seguridad

- **NFR-3.1 (Comunicaciones Cifradas):** Todo el tráfico entre el cliente y el servidor debe estar cifrado mediante HTTPS (TLS 1.2 o superior).
- **NFR-3.2 (Almacenamiento de Contraseñas):** Las contraseñas de los usuarios nunca deben almacenarse en texto plano. Deben ser "hasheadas" y "salteadas" utilizando un algoritmo robusto como bcrypt.
- **NFR-3.3 (Protección de Datos):** Se deben implementar medidas para proteger la plataforma contra las vulnerabilidades más comunes del OWASP Top 10, incluyendo inyección de SQL, Cross-Site Scripting (XSS) y Cross-Site Request Forgery (CSRF).
- **NFR-3.4 (Gestión de Pagos):** La plataforma no almacenará directamente los datos de las tarjetas de crédito. Toda la información de pago será gestionada por una pasarela de pago externa que cumpla con el estándar PCI DSS (ej. Stripe).

### 4.0 Escalabilidad

- **NFR-4.1 (Arquitectura Escalable):** La arquitectura del sistema (especialmente el backend) debe diseñarse para escalar horizontalmente. Esto significa que, a medida que aumente la carga, se puedan añadir más servidores para distribuir el trabajo, en lugar de depender de un único servidor más potente.
- **NFR-4.2 (Base de Datos):** La base de datos debe ser capaz de manejar el crecimiento de datos proyectado para el primer año (aprox. 10,000 usuarios y 50,000 listados) sin requerir un rediseño.

### 5.0 Disponibilidad y Fiabilidad

- **NFR-5.1 (Disponibilidad):** El sistema debe tener un objetivo de disponibilidad (uptime) del 99.5% para el MVP.
- **NFR-5.2 (Copias de Seguridad):** Se deben realizar copias de seguridad automáticas y completas de la base de datos principal al menos una vez al día. El proceso de restauración debe estar documentado y probado.
- **NFR-5.3 (Manejo de Errores):** El sistema debe manejar los errores de forma elegante, mostrando mensajes claros al usuario en lugar de páginas de error genéricas del servidor (ej. "Error 500").

### 6.0 Mantenibilidad

- **NFR-6.1 (Calidad del Código):** El código fuente debe adherirse a guías de estilo consistentes (ej. Prettier, ESLint para JavaScript/TypeScript) y estar razonablemente comentado, especialmente en las áreas de lógica de negocio compleja.
- **NFR-6.2 (Modularidad):** La arquitectura debe ser modular, permitiendo que diferentes partes del sistema (ej. gestión de usuarios, marketplace, notificaciones) se puedan actualizar de forma independiente sin afectar al resto de la aplicación.

### 7.0 Compatibilidad

- **NFR-7.1 (Navegadores):** La aplicación web debe ser completamente funcional y visualmente correcta en las dos últimas versiones estables de los principales navegadores: Google Chrome, Mozilla Firefox, Apple Safari y Microsoft Edge.
- **NFR-7.2 (Dispositivos):** El diseño debe ser *responsive*, adaptándose y siendo completamente usable en los tres tamaños de pantalla principales: escritorio, tableta y móvil.
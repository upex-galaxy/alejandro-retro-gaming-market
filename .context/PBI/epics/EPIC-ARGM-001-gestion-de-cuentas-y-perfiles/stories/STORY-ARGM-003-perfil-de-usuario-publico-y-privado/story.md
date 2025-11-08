# User Story: Perfil de usuario público y privado

**ID:** STORY-ARGM-003
**Título:** Perfil de usuario público y privado
**Épico:** EPIC-ARGM-001: Gestión de Cuentas y Perfiles
**Prioridad:** HIGH

## Descripción

Como usuario registrado, quiero tener un perfil público donde pueda ver mi reputación, mis artículos en venta (si soy vendedor) y mis compras (si soy comprador) para generar confianza en la comunidad.

## Criterios de Aceptación

*   Cada usuario debe tener un perfil accesible a otros usuarios (público) y una sección de gestión de perfil solo visible para él (privado).
*   El perfil público debe mostrar:
    *   Nombre de usuario/Alias.
    *   Fecha de registro.
    *   Reputación/Valoración promedio (estrellas).
    *   Número de transacciones completadas.
    *   Lista de artículos actualmente en venta (si es vendedor).
    *   Reseñas recibidas de otros usuarios.
*   El perfil privado (accesible solo por el usuario logueado) debe permitir:
    *   Editar información personal (nombre, dirección, etc.).
    *   Cambiar contraseña.
    *   Gestionar métodos de pago (añadir/eliminar).
    *   Ver historial de compras y ventas detallado.
*   El usuario debe poder configurar qué información de su perfil es pública y cuál es privada (ej. ocultar número de transacciones).
*   La información sensible (dirección, métodos de pago) nunca debe ser visible públicamente.

## Dependencias

*   Base de datos de usuarios.
*   Sistema de reputación y valoraciones.
*   Funcionalidades de compra y venta para listar artículos.

## Notas Adicionales

*   Diseñar una interfaz de usuario clara y fácil de usar para la gestión del perfil.
*   Asegurar la privacidad y seguridad de los datos personales del usuario.
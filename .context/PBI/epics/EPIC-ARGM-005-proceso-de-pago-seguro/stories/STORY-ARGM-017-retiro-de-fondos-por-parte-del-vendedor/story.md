# User Story: Retiro de fondos por parte del vendedor

**ID:** STORY-ARGM-017
**Título:** Retiro de fondos por parte del vendedor
**Épico:** EPIC-ARGM-005: Proceso de Pago Seguro
**Prioridad:** HIGH

## Descripción

Como vendedor, quiero que los fondos de mis ventas se acumulen en mi cuenta de la plataforma y poder retirarlos a mi cuenta bancaria de forma segura.

## Criterios de Aceptación

*   El vendedor debe tener una sección en su panel donde pueda ver el saldo actual de sus fondos disponibles para retiro.
*   Debe existir una opción clara para "Retirar Fondos".
*   Antes de realizar el primer retiro, el vendedor debe poder configurar y verificar su cuenta bancaria (ej. mediante microdepósitos).
*   El proceso de retiro debe solicitar:
    *   La cantidad a retirar (no puede exceder el saldo disponible).
    *   La cuenta bancaria de destino (previamente configurada).
*   El sistema debe procesar la solicitud de retiro y transferir los fondos a la cuenta bancaria del vendedor.
*   El vendedor debe recibir una notificación por correo electrónico sobre el estado de su solicitud de retiro (solicitado, en proceso, completado).
*   Debe haber un historial de retiros visible para el vendedor.
*   El sistema debe aplicar las comisiones o tarifas de retiro correspondientes, si las hay, y mostrarlas claramente al vendedor.

## Dependencias

*   EPIC-ARGM-001: Gestión de Cuentas y Perfiles (para la identificación del vendedor y gestión de datos bancarios).
*   STORY-ARGM-016: Notificación de venta y procesamiento de pago (para la acumulación de fondos).

## Notas Adicionales

*   Implementar medidas de seguridad robustas para proteger las transacciones financieras y los datos bancarios.
*   Definir los plazos de procesamiento de los retiros y las posibles tarifas.
*   Considerar límites mínimos y máximos para los retiros.
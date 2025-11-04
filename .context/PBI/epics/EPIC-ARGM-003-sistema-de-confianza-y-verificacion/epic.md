---
id: EPIC-ARGM-003
jira_id: null
title: Sistema de Confianza y Verificación
priority: High
business_value: High
estimated_story_points: 28
---

## Description
Esta épica es fundamental para la propuesta de valor principal del marketplace: la confianza. Cubre las funcionalidades que ayudan a asegurar que los vendedores son legítimos y que las transacciones se realizan de forma justa y transparente. Incluye la verificación de vendedores, el sistema de valoraciones y un mecanismo para resolver disputas.

## Scope
**In Scope:**
- Un proceso de verificación para que los nuevos vendedores obtengan un "Sello de Vendedor Verificado".
- La capacidad de los compradores para dejar valoraciones y reseñas a los vendedores después de una compra.
- La visualización pública de las valoraciones y reseñas de los vendedores.
- Un sistema básico de mediación de disputas gestionado por el equipo de soporte.

**Out of Scope:**
- Verificación automática de identidad mediante servicios de terceros.
- Sistema de reputación avanzado con insignias o niveles.
- Resolución de disputas automatizada por IA.

## Acceptance Criteria (Epic-level)
- [ ] Los vendedores pueden ser verificados para aumentar la confianza del comprador.
- [ ] Los compradores pueden compartir sus experiencias a través de valoraciones y reseñas.
- [ ] La reputación de un vendedor es visible para todos los usuarios.
- [ ] Existe un proceso claro para que compradores y vendedores resuelvan problemas con las transacciones.

## Dependencies
- **Épicas dependientes:** EPIC-ARGM-001 (los usuarios deben tener perfiles), EPIC-ARGM-005 (las valoraciones se basan en transacciones completadas).
- **Recursos externos:** Ninguno para el MVP (la verificación y las disputas son manuales).
- **Technical pre-requisites:** Base de datos para almacenar el estado de verificación, las valoraciones y los casos de disputa.

## User Stories
- STORY-ARGM-009: Como vendedor nuevo, quiero poder pasar por un proceso de verificación único para obtener un "Sello de Vendedor Verificado" y así generar más confianza en los compradores. (10 pts)
- STORY-ARGM-010: Como comprador, quiero poder dejar una valoración (de 1 a 5 estrellas) y una reseña a un vendedor después de una compra completada para compartir mi experiencia con la comunidad. (8 pts)
- STORY-ARGM-011: Como vendedor, quiero poder ver las valoraciones y reseñas que he recibido para construir mi reputación en la plataforma. (5 pts)
- STORY-ARGM-012: Como comprador o vendedor, si surge un problema con una transacción, quiero poder abrir un caso de disputa para que el equipo de soporte de la plataforma medie y me ayude a resolverlo. (5 pts)

---
id: EPIC-ARGM-001
jira_id: null
title: Gestión de Cuentas y Perfiles
priority: High
business_value: High
estimated_story_points: 18
---

## Description
Esta épica cubre todas las funcionalidades relacionadas con la creación, gestión y seguridad de las cuentas de usuario. Es la puerta de entrada para que los usuarios interactúen con la plataforma, ya sea como compradores o vendedores.

## Scope
**In Scope:**
- Registro de nuevos usuarios a través de correo electrónico.
- Inicio y cierre de sesión seguro.
- Perfil de usuario con información pública y privada.
- Flujo de recuperación de contraseña.

**Out of Scope:**
- Registro o inicio de sesión con redes sociales (Google, Facebook, etc.).
- Autenticación de dos factores (2FA).
- Edición avanzada de perfiles (biografía, foto de portada, etc.).

## Acceptance Criteria (Epic-level)
- [ ] Un visitante puede crear una cuenta y convertirse en un usuario registrado.
- [ ] Un usuario registrado puede iniciar y cerrar sesión de forma segura.
- [ ] Cada usuario tiene un perfil que muestra su información relevante a la comunidad.
- [ ] Un usuario que ha olvidado su contraseña puede recuperarla de forma autónoma.

## Dependencies
- **Épicas dependientes:** Ninguna. Esta es una épica fundamental.
- **Recursos externos:** Servicio de envío de correo electrónico (para bienvenida y recuperación de contraseña).
- **Technical pre-requisites:** Base de datos para almacenar la información de los usuarios.

## User Stories
- STORY-ARGM-001: Como nuevo usuario, quiero poder registrarme en la plataforma con mi correo electrónico y una contraseña para poder acceder a las funcionalidades de compra y venta. (3 pts)
- STORY-ARGM-002: Como usuario registrado, quiero poder iniciar y cerrar sesión en mi cuenta de forma segura para gestionar mi actividad en la plataforma. (2 pts)
- STORY-ARGM-003: Como usuario registrado, quiero tener un perfil público donde pueda ver mi reputación, mis artículos en venta y mis compras para construir confianza en la comunidad. (8 pts)
- STORY-ARGM-004: Como usuario que ha olvidado su contraseña, quiero poder solicitar un restablecimiento de la misma a través de mi correo electrónico para recuperar el acceso a mi cuenta. (5 pts)

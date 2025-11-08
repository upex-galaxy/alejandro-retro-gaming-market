# Inicio y Cierre de Sesión de Usuario

**Jira Key:** ARGM-4
**Epic:** EPIC-ARGM-2 (Gestión de Cuentas y Perfiles)
**Priority:** High
**Story Points:** 3
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** usuario registrado
**I want to** poder iniciar y cerrar sesión en mi cuenta de forma segura
**So that** gestionar mi actividad en la plataforma.

---

## Description

Esta funcionalidad permite a los usuarios registrados acceder a su cuenta para utilizar las funciones personalizadas de la plataforma y cerrar su sesión para proteger su cuenta cuando terminan, especialmente en dispositivos compartidos.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Inicio de sesión exitoso
- **Given:** Un usuario registrado que no ha iniciado sesión.
- **When:** Ingresa su correo electrónico y contraseña correctos en el formulario de login.
- **Then:** El sistema lo autentica, lo redirige al dashboard y la UI muestra su estado como "conectado".

### Scenario 2: Error - Credenciales incorrectas
- **Given:** Un usuario en la página de login.
- **When:** Ingresa un correo electrónico o contraseña incorrectos.
- **Then:** El sistema muestra un mensaje de error general "Correo o contraseña incorrectos" y no le permite el acceso.

### Scenario 3: Happy Path - Cierre de sesión
- **Given:** Un usuario que ha iniciado sesión.
- **When:** Hace clic en el botón "Cerrar Sesión".
- **Then:** El sistema cierra su sesión, lo redirige a la página de inicio y la UI muestra el estado como "desconectado".

---

## Technical Notes

### Frontend
- Crear un componente `LoginForm`.
- Almacenar el token JWT recibido del backend de forma segura (ej. en una cookie httpOnly).
- Crear un `AuthContext` para gestionar el estado de autenticación globalmente en la aplicación.
- El botón de "Cerrar Sesión" debe limpiar el token y el estado de autenticación.

### Backend
- Crear un endpoint `POST /api/auth/login`.
- Validar que el usuario exista y que la contraseña proporcionada coincida con el hash almacenado.
- Si las credenciales son correctas, generar y devolver un nuevo token JWT.

### Database
- **Tabla:** `users`
- **Acción:** Lectura para verificar credenciales.

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para el endpoint de login.
- [ ] Tests de componente para el formulario de login.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

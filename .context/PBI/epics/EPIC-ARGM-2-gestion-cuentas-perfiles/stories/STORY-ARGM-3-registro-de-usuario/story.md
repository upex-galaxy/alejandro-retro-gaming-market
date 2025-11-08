# Registro de Usuario con Correo Electrónico

**Jira Key:** ARGM-3
**Epic:** EPIC-ARGM-2 (Gestión de Cuentas y Perfiles)
**Priority:** High
**Story Points:** 5
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** nuevo usuario
**I want to** poder registrarme en la plataforma con mi correo electrónico y una contraseña
**So that** poder acceder a las funcionalidades de compra y venta.

---

## Description

Este es el primer punto de contacto para un nuevo usuario. El proceso debe ser simple, rápido y seguro. Se solicitarán los datos mínimos necesarios para crear una cuenta, y se realizarán validaciones para asegurar la integridad de los datos y la seguridad de la cuenta.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Registro exitoso
- **Given:** Un visitante no registrado está en la página de registro.
- **When:** Ingresa un nombre de usuario único, un correo electrónico válido y una contraseña segura (mín. 8 caracteres).
- **Then:** El sistema crea la cuenta, inicia sesión automáticamente y lo redirige al dashboard principal mostrando un mensaje de bienvenida.

### Scenario 2: Error - Correo electrónico ya en uso
- **Given:** Un visitante está en la página de registro.
- **When:** Ingresa un correo electrónico que ya existe en la base de datos.
- **Then:** El sistema muestra un mensaje de error indicando "El correo electrónico ya está en uso" y no crea la cuenta.

### Scenario 3: Error - Contraseña insegura
- **Given:** Un visitante está en la página de registro.
- **When:** Ingresa una contraseña con menos de 8 caracteres.
- **Then:** El sistema muestra un mensaje de error debajo del campo de contraseña indicando "La contraseña debe tener al menos 8 caracteres" y no crea la cuenta.

---

## Technical Notes

### Frontend
- Crear un nuevo componente `RegisterForm` en React.
- Usar una librería como `formik` para la gestión del formulario y `yup` para las validaciones.
- Realizar una llamada a la API del backend al enviar el formulario.

### Backend
- Crear un nuevo endpoint `POST /api/auth/register`.
- Validar los datos de entrada (username, email, password).
- Hashear la contraseña usando `bcrypt` antes de guardarla.
- Guardar el nuevo usuario en la tabla `users` de la base de datos.
- Generar un token JWT y devolverlo al cliente para el inicio de sesión automático.

### Database
- **Tabla:** `users`
- **Campos afectados:** `username`, `email`, `password_hash`

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para el endpoint del backend (> 80% coverage).
- [ ] Tests de componente para el formulario de registro en el frontend.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

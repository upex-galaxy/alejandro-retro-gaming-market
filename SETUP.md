# Guía de Setup - Retro Hub

Esta guía te ayudará a configurar y ejecutar el proyecto en tu entorno de desarrollo local.

## 1. Prerrequisitos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- **Node.js:** Versión 18.x o superior.
- **bun:** Este proyecto usa `bun` como gestor de paquetes y ejecutor de tareas. Puedes instalarlo desde [https://bun.sh/](https://bun.sh/).

## 2. Instalación

1.  **Clona el repositorio (si aún no lo has hecho):**
    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd alejandro-retro-gaming-market
    ```

2.  **Instala las dependencias:**
    Usa `bun` para instalar todos los paquetes necesarios.
    ```bash
    bun install
    ```

## 3. Configuración de Variables de Entorno

1.  **Crea tu archivo de entorno local:**
    Copia el archivo de ejemplo para crear tu propia configuración local.
    ```bash
    cp .env.local.example .env.local
    ```

2.  **Edita el archivo `.env.local`:**
    Abre el archivo `.env.local` en tu editor de código y rellena las variables con tus propias credenciales (por ejemplo, las claves de tu proyecto de Supabase).

    ```env
    # Ejemplo de .env.local
    NEXT_PUBLIC_SUPABASE_URL="TU_URL_DE_SUPABASE"
    NEXT_PUBLIC_SUPABASE_ANON_KEY="TU_CLAVE_ANON_DE_SUPABASE"
    ```

## 4. Ejecutar el Servidor de Desarrollo

Una vez que hayas instalado las dependencias y configurado tus variables de entorno, puedes iniciar el servidor de desarrollo.

```bash
bun run dev
```

Esto iniciará la aplicación en modo de desarrollo. Por lo general, estará disponible en [http://localhost:3000](http://localhost:3000).

¡Y eso es todo! Ahora tienes el proyecto "Retro Hub" ejecutándose localmente.

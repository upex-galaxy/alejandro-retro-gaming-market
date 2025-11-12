# Design System - Retro Hub

**Generado:** Fase 2.5 - Frontend Scaffolding
**Fecha:** 12 de noviembre de 2025
**Estilo Visual:** Startup/Playful

---

## 🎨 Paleta de Colores

### Colores Principales

| Color | Hex | Uso |
|-------|-----|-----|
| **Primary** | `#F97316` | Botones primarios, links, focus states, elementos principales |
| **Secondary** | `#4B5563` | Botones secundarios, elementos de apoyo |
| **Accent** | `#FCD34D` | Highlights, badges, elementos que necesitan atención |

### Colores de Sistema

| Color | Hex | Uso |
|-------|-----|-----|
| **Background** | `#F9FAFB` | Fondo principal de la aplicación |
| **Card** | `#FFFFFF` | Fondo de tarjetas, modales y popovers |
| **Border** | `#E5E7EB` | Bordes de inputs, tarjetas y separadores |
| **Text** | `#1F2937` | Texto principal para máxima legibilidad |
| **Muted** | `#6B7280` | Texto secundario, descripciones, placeholders |

### Colores Semánticos

| Color | Hex | Uso |
|-------|-----|-----|
| **Destructive** | `#EF4444` | Botones de peligro, mensajes de error, alertas |
| **Ring** | `#F97316` | Anillo de foco en elementos interactivos (inputs, botones) |

**Acceso en código:**

```tsx
// Clases de Tailwind
<button className="bg-primary text-primary-foreground">Mi Botón</button>
<input className="border-border focus:ring-ring" />

// Variables CSS (para uso en CSS personalizado)
.mi-clase-custom {
  color: hsl(var(--primary));
}
```

---

## 🧱 Componentes UI

### Button

**Ubicación:** `src/components/ui/button.tsx`

**Variantes disponibles:**

| Variante | Uso |
|----------|-----|
| `default` (primary) | La acción principal y más importante en una vista. |
| `secondary` | Acciones secundarias que no compiten con la principal. |
| `outline` | Acciones terciarias, como "Ver más" o "Cancelar". |
| `ghost` | Acciones sutiles, a menudo usadas en menús o para iconos. |
| `destructive` | Acciones peligrosas o irreversibles (ej. "Eliminar"). |
| `link` | Para links que deben parecer texto pero tener comportamiento de botón. |

**Tamaños:** `default`, `sm` (pequeño), `lg` (grande), `icon` (para botones con solo un icono).

**Ejemplo de uso:**

```tsx
import { Button } from '@/components/ui/button'

// Botón primario
<Button>Guardar Cambios</Button>

// Botón secundario
<Button variant="secondary">Cancelar</Button>

// Botón de peligro grande
<Button variant="destructive" size="lg">Eliminar Cuenta</Button>
```

---

### Card

**Ubicación:** `src/components/ui/card.tsx`

**Sub-componentes:**
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

**Ejemplo de uso:**

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle>Super Nintendo</CardTitle>
    <CardDescription>Vendido por JavierR</CardDescription>
  </CardHeader>
  <CardContent>
    <p>$180.00</p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Ver Artículo</Button>
  </CardFooter>
</Card>
```

---

### Formularios (Input & Label)

**Ubicación:** `src/components/ui/input.tsx`, `src/components/ui/label.tsx`

**Ejemplo de uso:**

```tsx
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

<div className="grid gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="mario@retrohub.com" />
</div>
```

---

[Se han creado más componentes como `Avatar`, `DropdownMenu`, `Sheet`, `Tabs`, y `Separator`. Su uso se puede ver en las páginas de demostración y su código está en `src/components/ui/`.]

---

## 📐 Layout

### Estructura Elegida: Sidebar Plegable + Top Navbar

**Razón:** Tu MVP tiene suficientes secciones para beneficiarse de una navegación lateral, y el diseño plegable ofrece una experiencia moderna y flexible que se adapta bien al estilo "Startup/Playful".

**Componentes:**
- `src/components/layout/navbar.tsx` - Barra superior.
- `src/components/layout/sidebar.tsx` - Navegación lateral.
- `src/app/(main)/layout.tsx` - Plantilla que une ambos componentes.

---

## ✨ Estilo Visual: Startup/Playful

**Características:**
- **Espaciado:** Generoso para una sensación limpia y aireada.
- **Bordes:** Notablemente redondeados (`rounded-lg`/`rounded-xl`) para un look amigable.
- **Sombras:** Suaves y sutiles para dar profundidad sin sobrecargar.
- **Tipografía:** `Inter`, una fuente sans-serif moderna y muy legible.

---

## 📖 Guía de Uso

### ✅ Qué Hacer (DOs)

1.  **Reutiliza componentes:** Siempre que necesites un botón, una tarjeta, etc., importa y usa los componentes de `src/components/ui`.
2.  **Usa la paleta de Tailwind:** Utiliza clases como `bg-primary`, `text-accent`, `border-border`.
3.  **Mantén la consistencia:** Usa los mismos tamaños, espaciados y variantes en situaciones similares.

### ❌ Qué NO Hacer (DON'Ts)

1.  **No uses colores "hardcodeados":** Evita `style={{ color: '#F97316' }}`. Usa las clases de Tailwind.
2.  **No crees componentes duplicados:** Si un botón se ve diferente, considera si debería ser una nueva `variant` del `Button` existente.
3.  **No rompas el ritmo visual:** Evita usar espaciados o tamaños de fuente inconsistentes.

---

Este design system es tu fuente única de verdad para el diseño visual del proyecto. Mantenlo consistente durante todo el desarrollo para asegurar un producto final pulido y profesional.

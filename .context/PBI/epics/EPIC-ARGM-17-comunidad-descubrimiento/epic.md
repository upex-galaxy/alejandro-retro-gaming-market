# Comunidad y Descubrimiento

**Jira Key:** ARGM-17
**Status:** To Do
**Priority:** MEDIUM
**Phase:** Core Features (Sprint 3-4)

---

## Epic Description

Esta épica se enfoca en mejorar la experiencia del usuario a través de herramientas que faciliten el descubrimiento de productos y la interacción con la comunidad. Incluye una guía interactiva para nuevos compradores y la visualización de reseñas de productos y vendedores, lo que ayuda a los usuarios a tomar decisiones informadas y a sentirse parte de una comunidad.

**Business Value:**
Mejora la retención de usuarios al hacer la plataforma más atractiva y fácil de usar para los recién llegados. Fomenta la participación y la confianza al destacar las experiencias de otros usuarios, lo que puede llevar a un aumento en las transacciones y la lealtad a la marca.

---

## User Stories

1. **ARGM-18** - As a novice buyer (Sofía), I want to access an interactive "Beginner's Guide" that asks me questions about my tastes in modern games to recommend an ideal retro console to start with.
2. **ARGM-19** - As a buyer, I want to be able to read other users' reviews of a product or a seller to evaluate reliability and quality before buying.

**NOTA:** Los IDs serán actualizados cuando se creen las stories en Jira.

---

## Scope

### In Scope
- Guía interactiva para compradores novatos con recomendaciones de consolas.
- Visualización de reseñas de productos (si se implementan en el futuro) y de vendedores (ya implementado en EPIC-ARGM-12).

### Out of Scope (Future)
- Foros de discusión.
- Mensajería directa entre usuarios.
- Sistema de seguimiento de usuarios o "favoritos".

---

## Acceptance Criteria (Epic Level)

1. ✅ Un comprador novato puede usar la guía interactiva y recibir una recomendación de consola.
2. ✅ Los usuarios pueden leer reseñas de vendedores y productos (si aplica) para tomar decisiones de compra.

---

## Related Functional Requirements

- **F-5.1:** Guía para Novatos

See: `.context/SRS/functional-specs.md`

---

## Technical Considerations

### Backend
- Lógica para la guía interactiva (ej. un motor de reglas simple).
- Endpoint para obtener recomendaciones de consolas basadas en las respuestas del usuario.

### Database Schema
**Tables:**
- `console_recommendations` (id, question_id, answer_id, recommended_console_id)

---

## Dependencies

### Internal Dependencies
- EPIC-ARGM-2: Gestión de Cuentas y Perfiles (para identificar al usuario).
- EPIC-ARGM-7: Marketplace: Compra y Venta (para enlazar a productos recomendados).
- EPIC-ARGM-12: Sistema de Confianza y Verificación (para mostrar reseñas de vendedores).

### Blocks
- Ninguna.

---

## Success Metrics

### Functional Metrics
- Tasa de finalización de la guía para novatos > 70%.
- Tiempo de carga de la guía < 2 segundos.

### Business Metrics
- Aumento del 5% en la conversión de nuevos usuarios que usan la guía.
- Aumento del 10% en la interacción con reseñas.

---

## Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| Recomendaciones irrelevantes | Medium | Medium | Realizar pruebas de usuario exhaustivas. Permitir feedback sobre las recomendaciones. |
| Baja adopción de la guía | Low | Medium | Promocionar la guía en la página de inicio y en el proceso de onboarding. |

---

## Related Documentation

- **PRD:** `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md`

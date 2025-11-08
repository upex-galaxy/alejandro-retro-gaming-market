# Sistema de Confianza y Verificación

**Jira Key:** ARGM-12
**Status:** To Do
**Priority:** HIGH
**Phase:** Core Features (Sprint 3-4)

---

## Epic Description

Esta épica se centra en construir un entorno seguro y fiable para los usuarios del marketplace. Incluye mecanismos para verificar la identidad de los vendedores, permitir a los compradores valorar sus experiencias y establecer un sistema de resolución de disputas. El objetivo es fomentar la confianza entre los participantes y asegurar transacciones justas.

**Business Value:**
La confianza es la moneda de cambio en cualquier marketplace. Un sistema robusto de confianza y verificación reduce el riesgo de fraude, mejora la satisfacción del usuario y fomenta la repetición de compras y ventas, lo que es vital para el crecimiento y la sostenibilidad de la plataforma.

---

## User Stories

1. **ARGM-13** - As a new seller, I want to be able to go through a unique verification process (e.g. validating my identity) to obtain a "Verified Seller Seal" and thus generate more trust in buyers.
2. **ARGM-14** - As a buyer, I want to be able to leave a rating (from 1 to 5 stars) and a review for a seller after a completed purchase to share my experience with the community.
3. **ARGM-15** - As a seller, I want to be able to see the ratings and reviews I have received to build my reputation on the platform.
4. **ARGM-16** - As a buyer or seller, if a problem arises with a transaction, I want to be able to open a dispute case so that the platform's support team can mediate and help me resolve it.

**NOTA:** Los IDs serán actualizados cuando se creen las stories en Jira.

---

## Scope

### In Scope
- Proceso de solicitud de verificación de vendedor (manual en MVP).
- Visualización del "Sello de Vendedor Verificado".
- Sistema de valoración por estrellas y reseñas de texto para vendedores.
- Visualización de valoraciones y reseñas en el perfil del vendedor.
- Apertura de casos de disputa por transacción.

### Out of Scope (Future)
- Verificación automática de vendedores (ej. integración con servicios de identidad).
- Valoraciones de productos.
- Sistema de insignias o logros para usuarios.
- Chat en tiempo real para disputas.

---

## Acceptance Criteria (Epic Level)

1. ✅ Un vendedor puede solicitar y obtener el sello de verificación.
2. ✅ Un comprador puede dejar una valoración y reseña a un vendedor tras una compra.
3. ✅ Las valoraciones y reseñas son visibles públicamente en el perfil del vendedor.
4. ✅ Los usuarios pueden iniciar un proceso de disputa para una transacción.

---

## Related Functional Requirements

- **F-1.3:** Sistema de Valoración y Reputación
- **F-4.1:** Verificación de Vendedores

See: `.context/SRS/functional-specs.md`

---

## Technical Considerations

### Backend
- Endpoints para gestionar solicitudes de verificación.
- Endpoints para crear y recuperar valoraciones y reseñas.
- Endpoints para la gestión de disputas (creación, actualización de estado).

### Database Schema
**Tables:**
- `seller_verifications` (id, user_id, status, requested_at, approved_at)
- `ratings` (id, transaction_id, seller_id, buyer_id, stars, comment, created_at)
- `disputes` (id, transaction_id, reporter_id, status, description, created_at)

---

## Dependencies

### Internal Dependencies
- EPIC-ARGM-2: Gestión de Cuentas y Perfiles (usuarios deben existir).
- EPIC-ARGM-7: Marketplace: Compra y Venta (necesita transacciones para valorar).

### Blocks
- Ninguna épica está bloqueada directamente por esta en el MVP, pero es crucial para la confianza.

---

## Success Metrics

### Functional Metrics
- Tasa de solicitudes de verificación procesadas en < 48h > 90%.
- Tasa de disputas resueltas en < 7 días > 80%.

### Business Metrics
- Puntuación media de satisfacción de transacciones > 4.0/5.0.
- Reducción de quejas por fraude en un 20% tras la implementación.

---

## Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| Proceso de verificación manual lento | Medium | High | Establecer SLAs claros para la revisión. Priorizar solicitudes de vendedores con alta actividad. |
| Reseñas falsas o maliciosas | Medium | Medium | Implementar moderación de reseñas. Permitir a los vendedores responder a las reseñas. |

---

## Related Documentation

- **PRD:** `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md`

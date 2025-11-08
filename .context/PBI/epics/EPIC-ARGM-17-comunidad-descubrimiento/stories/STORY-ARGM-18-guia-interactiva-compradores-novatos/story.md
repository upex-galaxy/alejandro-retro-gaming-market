# Guía Interactiva para Compradores Novatos

**Jira Key:** ARGM-18
**Epic:** EPIC-ARGM-17 (Comunidad y Descubrimiento)
**Priority:** Medium
**Story Points:** 5
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** novice buyer (Sofía)
**I want to** access an interactive "Beginner's Guide" that asks me questions about my tastes in modern games
**So that** it can recommend an ideal retro console to start with.

---

## Description

Muchos usuarios nuevos en el mundo de los videojuegos retro pueden sentirse abrumados. Esta guía interactiva busca simplificar el proceso de elección de una primera consola, haciendo preguntas sencillas sobre sus preferencias actuales y ofreciendo una recomendación personalizada. Esto mejora la experiencia de onboarding y ayuda a los usuarios a encontrar productos relevantes.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Happy Path - Recomendación exitosa
- **Given:** Un comprador novato accede a la "Guía para Novatos".
- **When:** Responde a todas las preguntas sobre sus gustos (ej. género de juegos, tipo de experiencia).
- **Then:** La guía le presenta una recomendación de consola retro, una breve descripción y un botón para "Ver anuncios de [Consola Recomendada]".

### Scenario 2: Edge Case - Respuestas ambiguas
- **Given:** Un comprador novato responde a las preguntas de la guía.
- **When:** Sus respuestas no se alinean claramente con una única recomendación.
- **Then:** La guía le ofrece 2-3 recomendaciones de consolas, explicando brevemente por qué cada una podría ser adecuada.

### Scenario 3: Happy Path - Reintentar la guía
- **Given:** Un comprador ha completado la guía y recibido una recomendación.
- **When:** Hace clic en "Volver a empezar la guía".
- **Then:** La guía se reinicia, permitiéndole explorar otras opciones.

---

## Technical Notes

### Frontend
- Crear un componente `BeginnerGuide` que gestione el flujo de preguntas y respuestas.
- Utilizar un sistema de estado para almacenar las respuestas del usuario y mostrar la pregunta siguiente.
- Al final, mostrar el componente `RecommendationDisplay`.

### Backend
- Crear un endpoint `GET /api/recommendations/consoles` que reciba las respuestas del usuario como parámetros.
- Implementar la lógica de recomendación basada en un conjunto de reglas predefinidas o un algoritmo simple.

### Database
- **Tablas:** `guide_questions`, `guide_answers`, `console_recommendations`.
- **Acción:** Lectura de reglas de recomendación.

---

## Definition of Done

- [ ] Código implementado y funcionando.
- [ ] Tests unitarios para la lógica de recomendación del backend.
- [ ] Tests de componente para la guía interactiva.
- [ ] Code review aprobado.
- [ ] Desplegado en el entorno de staging.
- [ ] Criterios de aceptación validados por QA.

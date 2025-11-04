---
id: STORY-ARGM-013
jira_id: null
epic_id: EPIC-ARGM-004
title: Como compradora novata (Sofía), quiero acceder a una "Guía para Novatos" interactiva que me haga preguntas sobre mis gustos en juegos modernos para recomendarme una consola retro ideal para empezar
priority: Medium
story_points: 6
assignee: null
status: To Do
---

## Description
Esta historia de usuario se dirige a uno de nuestros personas clave: el "Retro Newbie". La "Guía para Novatos" es una herramienta de descubrimiento diseñada para reducir la barrera de entrada al gaming retro. A través de un simple cuestionario, la plataforma ofrecerá una recomendación personalizada, guiando al nuevo usuario en su primera compra.

## Acceptance Criteria (Gherkin format)

**Scenario 1: Completar la guía y recibir una recomendación**
- **Given:** Una usuaria novata está en la página de inicio.
- **When:** Hace clic en la "Guía para Novatos" y responde a una serie de preguntas sobre sus géneros de juego favoritos (ej. "¿Qué tipo de juegos disfrutas más en las consolas modernas?").
- **Then:** Se le presenta una página de resultados con una consola recomendada (ej. "¡Te recomendamos la Super Nintendo!"), una breve descripción de por qué es una buena elección para ella, y un botón para ver los anuncios de esa consola.

**Scenario 2: Lógica de recomendación simple**
- **Given:** La lógica de la guía está programada.
- **When:** Un usuario elige "Juegos de rol (RPG) con grandes historias".
- **Then:** El sistema le recomienda la "PlayStation 1", conocida por su extenso catálogo de RPGs.

**Scenario 3: Acceso fácil a la guía**
- **Given:** Un usuario está navegando por la plataforma.
- **When:** Mira en la página de inicio o en la barra de navegación.
- **Then:** Encuentra un enlace o banner claramente visible que le invita a probar la "Guía para Novatos".

## Technical Notes (iniciales)
- La lógica del cuestionario puede ser implementada completamente en el frontend para el MVP.
- Las preguntas y la lógica de recomendación deben ser fácilmente configurables para poder ajustarlas en el futuro.
- La página de resultados debe ser atractiva visualmente y el llamado a la acción (ver productos) debe ser muy claro.
- No es necesario un sistema de recomendación complejo basado en IA para el MVP; un árbol de decisiones simple es suficiente.

## Definition of Done
- [ ] Código implementado y funcionando para el cuestionario interactivo.
- [ ] Tests unitarios para la lógica de recomendación (cobertura > 80%).
- [ ] No se requieren tests de integración complejos si la lógica está en el frontend.
- [ ] Tests E2E (Playwright) que simulen el flujo completo del cuestionario y la visualización de la recomendación.
- [ ] Code review aprobado.
- [ ] La guía está visible y accesible desde la página de inicio.
- [ ] Desplegado en el entorno de staging.

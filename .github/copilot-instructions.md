# Glyph — GitHub Copilot Instructions

## 1. Project Identity

**Project Name:** Glyph

**Project Type:** AI Agent Persona Terminal

Glyph is a web application designed as a home for an AI agent with its own identity, personality, and behavior.

Glyph is not intended to be a generic AI chatbot.

The core product experience is interacting with the Glyph AI agent.

The application combines:

* AI agent interaction
* AI persona
* Crypto identity
* Optional wallet integration
* Community-oriented features

The primary user journey is:

```text
Landing Page
    ↓
Meet Glyph
    ↓
Chat with Glyph
    ↓
Experience the AI Persona
    ↓
Optional Wallet Connection
    ↓
Crypto / Holder Features
```

---

# 2. Important Product Decisions

These decisions are fundamental to the project and must not be changed without explicit instruction.

### AI Chat Does Not Require a Wallet

Users MUST be able to interact with Glyph without connecting a wallet.

Wallet connection is optional.

Do NOT:

* Redirect anonymous users to wallet connection before chatting.
* Block `/chat` behind wallet authentication.
* Require wallet connection for basic AI functionality.
* Assume that every user has a crypto wallet.

Wallet functionality should only be required for features that genuinely need wallet identity or token ownership.

---

# 3. Core Product

## AI Chat

AI chat is the primary feature of Glyph.

Users should be able to:

* Open the chat interface.
* Send messages.
* Receive AI responses.
* Interact with Glyph's personality.
* Start chatting without connecting a wallet.

The AI should feel like an agent with an identity, not a generic assistant.

---

# 4. AI Persona

Glyph has a distinct AI persona.

Persona-related configuration should be centralized and separated from UI components.

Do NOT hardcode personality instructions across multiple React components.

Prefer a structure such as:

```text
src/
├── lib/
│   └── ai/
│       ├── persona.ts
│       └── ...
```

The exact structure may evolve, but persona logic should remain separate from presentation.

When generating AI-related code:

* Preserve the established persona.
* Do not turn Glyph into a generic assistant.
* Keep persona configuration maintainable.
* Avoid duplicating system prompts.
* Keep API communication separate from UI when practical.

---

# 5. Tech Stack

The project uses:

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* OpenRouter API
* PostgreSQL
* Phantom wallet
* Vercel

Use the existing dependencies in the project before suggesting new dependencies.

Do NOT install a package simply because it makes a small task easier.

---

# 6. Framework Rules

## Next.js

Use the Next.js App Router.

Prefer:

```text
src/app/
```

for application routes.

Use Server Components by default.

Only use:

```tsx
"use client";
```

when the component actually requires client-side functionality such as:

* useState
* useEffect
* browser APIs
* event-driven interactive state
* wallet interaction
* client-side hooks

Do not add `"use client"` unnecessarily.

---

# 7. TypeScript Rules

Use TypeScript consistently.

Prefer explicit types for:

* Props
* API responses
* Database-related data
* Component state when inference is insufficient
* Function parameters and return values when useful

Avoid:

```tsx
any
```

unless there is a strong technical reason.

Do not use `any` as a shortcut to bypass TypeScript errors.

---

# 8. Component Rules

Before creating a new component:

1. Check whether an existing component already solves the problem.
2. Reuse existing components when appropriate.
3. Follow existing naming conventions.
4. Keep components focused.
5. Avoid unnecessary abstraction.

Do not create multiple components for trivial markup unless the component is likely to be reused.

Prefer:

```text
src/components/
```

for reusable UI components.

Page-specific components can remain close to the page when appropriate.

---

# 9. shadcn/ui

The project uses shadcn/ui.

Prefer existing shadcn components when they match the required UI.

Do not recreate a shadcn component from scratch without a reason.

Before adding a new UI dependency:

1. Check existing shadcn components.
2. Check existing project components.
3. Check whether Tailwind utilities are sufficient.

Keep the UI consistent with the existing design system.

---

# 10. Tailwind CSS

Use Tailwind CSS for styling.

Prefer existing design tokens and utilities over large amounts of custom CSS.

For example:

```tsx
bg-background
text-foreground
text-muted-foreground
border-border
```

when the project design system supports them.

Avoid excessive arbitrary values unless they provide a clear visual benefit.

Do not introduce large custom CSS files for simple component styling.

---

# 11. Design Direction

Glyph should feel:

* Dark
* Minimal
* Futuristic
* Technical
* Premium
* AI-native
* Crypto-native

The interface should feel closer to an **AI terminal** than a traditional SaaS dashboard.

The design should prioritize:

* Strong typography
* Generous spacing
* Subtle borders
* Dark surfaces
* Controlled glow
* Minimal animation
* Clear hierarchy

Avoid:

* Excessive gradients
* Excessive glassmorphism
* Excessive neon
* Excessive animations
* Bright rainbow colors
* Generic SaaS layouts
* Unnecessary cards
* Visual clutter

Do not add visual effects merely because they are technically possible.

---

# 12. Landing Page

The landing page should follow this general structure:

```text
Header
    ↓
Hero
    ↓
Features
    ↓
How It Works
    ↓
About / Persona
    ↓
Call To Action
    ↓
Footer
```

## Header

The header should contain:

* Glyph logo
* Glyph name
* Navigation
* Chat with Glyph CTA
* Connect Wallet action

The main AI action should be easy to discover.

Recommended navigation:

```text
Glyph
Features
How It Works
About
Chat with Glyph
Connect Wallet
```

`Features`, `How It Works`, and `About` can initially point to sections on the landing page.

The AI chat should use:

```text
/chat
```

The wallet connection should NOT be required to access `/chat`.

---

# 13. Landing Page Sections

## Hero

The hero should immediately communicate:

1. What Glyph is.
2. That Glyph is an AI agent.
3. That Glyph has a personality.
4. That users can interact with Glyph.

The primary CTA should lead to:

```text
/chat
```

The hero should not require wallet connection.

---

## Features

Features should explain the product's main capabilities.

Potential features:

* AI Persona
* Always Available
* Crypto Native
* Community Aware

Features should communicate actual product capabilities.

Do not invent features that have not been implemented unless the user explicitly asks for concept/mockup content.

---

## How It Works

Explain the user journey:

```text
1. Meet Glyph
2. Start chatting
3. Connect wallet optionally
4. Unlock additional ecosystem features
```

Do not imply that wallet connection is mandatory for AI chat.

---

## About

Explain:

* What Glyph is.
* Why Glyph exists.
* What makes Glyph different from a generic chatbot.
* The role of the AI persona.

---

# 14. Wallet Integration

Wallet functionality is an optional layer.

The wallet should primarily provide:

* Wallet identity
* Holder verification
* Token-related functionality
* Community-specific functionality
* Personalized experiences

Do not tightly couple wallet state with the entire application.

For example, avoid architecture where:

```text
Wallet connected
      ↓
Entire application becomes usable
```

Prefer:

```text
Application
├── Public AI Experience
│
└── Optional Wallet Features
```

---

# 15. API and Security

Never expose secret API keys to the browser.

Environment variables should be used for secrets.

Example:

```env
OPENROUTER_API_KEY=
DATABASE_URL=
```

Do not place secret keys in:

```text
NEXT_PUBLIC_*
```

Do not hardcode API keys.

AI API requests should be handled through an appropriate server-side boundary.

---

# 16. Database

PostgreSQL is the planned database.

When database functionality is introduced:

* Keep database access separated from UI.
* Do not query the database directly from presentation components.
* Validate external/user input.
* Avoid exposing sensitive database data to the client.
* Keep database logic reusable.

---

# 17. Routing

Current primary routes:

```text
/
    Landing page

/chat
    AI chat interface
```

Future routes may include:

```text
/dashboard
/settings
```

but do not create them unless they are actually required.

Do not create routes simply for the sake of organization.

---

# 18. Responsive Design

Every UI component should work on:

* Mobile
* Tablet
* Desktop

Do not design only for desktop.

Use Tailwind responsive utilities where appropriate:

```text
sm:
md:
lg:
xl:
```

Avoid fixed widths that can break smaller screens.

---

# 19. Accessibility

Generated UI should consider accessibility.

Use:

* Semantic HTML
* Proper buttons for actions
* Proper links for navigation
* Meaningful `alt` text
* Keyboard-accessible interactions
* Visible focus states where appropriate

Do not use a `<div>` as a button when a `<button>` is appropriate.

Do not use a `<button>` for navigation when a `<Link>` is appropriate.

---

# 20. Code Generation Behavior

When asked to generate code:

### First

Understand the existing project structure.

Do not immediately create a new architecture.

### Second

Check existing components and utilities.

Reuse them when possible.

### Third

Make the smallest reasonable change that solves the request.

Do not rewrite unrelated code.

### Fourth

Follow the existing coding style.

Do not introduce a completely different coding pattern without a reason.

### Fifth

Keep the generated code production-oriented.

Avoid placeholder architecture disguised as finished implementation.

---

# 21. When Modifying Existing Code

Preserve existing behavior unless the user explicitly requests a behavior change.

For example, if asked:

```text
Add a hover animation to this button.
```

Only modify what is necessary for the hover animation.

Do NOT:

* Rewrite the entire component.
* Change the routing.
* Replace the button library.
* Change unrelated styling.
* Add unnecessary dependencies.

---

# 22. Avoid Overengineering

Glyph is an MVP.

Prefer simple solutions.

Do not introduce:

* Complex state management
* Large abstractions
* Microservices
* Unnecessary design patterns
* Multiple libraries for the same problem
* Complex folder structures

unless the project actually requires them.

Simple and maintainable is preferred over clever.

---

# 23. Dependencies

Before recommending or installing a dependency:

1. Check `package.json`.
2. Determine whether the functionality already exists.
3. Check whether native Next.js/React functionality can solve it.
4. Check whether Tailwind or shadcn/ui can solve it.
5. Only then consider adding a dependency.

Do not add dependencies for trivial functionality.

---

# 24. Error Handling

Do not silently ignore errors.

For API calls:

* Handle failed requests.
* Provide useful error states.
* Avoid exposing sensitive implementation details.
* Keep error messages understandable to users.

For forms:

* Validate input.
* Show appropriate feedback.
* Prevent invalid submissions.

---

# 25. Performance

Avoid unnecessary:

* Client Components
* Re-renders
* API requests
* Large dependencies
* Images without optimization

Use Next.js `Image` for local/remote images when appropriate.

Do not add performance optimizations prematurely.

Optimize real bottlenecks rather than theoretical ones.

---

# 26. Documentation

Major architectural or product decisions should be documented.

Important documentation lives in:

```text
README.md
docs/
.github/copilot-instructions.md
```

When a major product decision changes, update the relevant documentation.

The following decision is especially important:

> Basic AI chat does not require wallet connection.

Do not contradict this rule unless explicitly instructed.

---

# 27. Current Development Phase

Glyph is currently in the MVP foundation stage.

Current priority:

```text
1. Landing Page
2. AI Chat UI
3. AI Persona
4. OpenRouter Integration
5. Wallet Integration
6. Holder / Token Features
```

Do not prioritize Web3 functionality over the core AI experience unless explicitly requested.

---

# 28. Current Roadmap

## Phase 1 — Foundation

* [x] Project initialization
* [x] Next.js setup
* [x] TypeScript
* [x] Tailwind CSS
* [x] Dark UI direction
* [x] Glyph branding
* [ ] Landing page

## Phase 2 — AI Agent

* [ ] Chat UI
* [ ] Persona configuration
* [ ] OpenRouter integration
* [ ] Conversation handling
* [ ] Conversation history

## Phase 3 — Web3

* [ ] Wallet connection
* [ ] Wallet state
* [ ] Holder verification
* [ ] Token integration

## Phase 4 — Community

* [ ] Community-specific interactions
* [ ] Holder features
* [ ] Personalized experiences
* [ ] Ecosystem integrations

---

# 29. Golden Rules

When generating code for Glyph, always remember:

1. **Glyph is an AI agent, not a generic chatbot.**
2. **AI chat is the core product.**
3. **Wallet connection is optional for basic AI chat.**
4. **Use Next.js App Router.**
5. **Use TypeScript.**
6. **Use Tailwind CSS.**
7. **Use shadcn/ui when appropriate.**
8. **Reuse existing components before creating new ones.**
9. **Do not add unnecessary dependencies.**
10. **Do not rewrite unrelated code.**
11. **Prefer simple architecture.**
12. **Keep persona logic separate from UI.**
13. **Keep secrets server-side.**
14. **Design mobile-first and responsively.**
15. **Maintain the dark, minimal, futuristic Glyph identity.**
16. **When uncertain, inspect the existing code before inventing a new pattern.**

---

# 30. Priority of Instructions

When generating code, prioritize:

```text
Existing project architecture
        ↓
Existing components / utilities
        ↓
This document
        ↓
User's explicit request
        ↓
Generic best practices
```

If the user's explicit request conflicts with this document, follow the user's explicit request.

However, do not make unrelated architectural changes.

The goal is to keep Glyph coherent, maintainable, and consistent as the project grows.

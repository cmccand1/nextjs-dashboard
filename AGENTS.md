# Project Context

- **App**: nextjs-dashboard
- **Goal**: A starter Next.js App Router course
- **Stack**: Next.js (App Router), Tailwind, Node, Prisma, Postgress

## Codebase Map

- `/app`: Application code including routes, components, and logic.
    - `/app/dashboard`: Dashboard routes, including `/customers` and `/invoices`.
    - `/app/lib`: Core logic, including data fetching, server actions, and utilities.
    - `/app/ui`: UI components used across the application.
- `/prisma`: Database schema definition (`schema.prisma`).
- `/public`: Static assets such as images and icons.
- `/agent_docs`: Agent Knowledge Base (Guides and workflows).

## Agent Knowledge Base (Context Loading)

Before starting a task, you **MUST** read the relevant guide below to load the correct workflow
commands and context:

- **Task: Building or Running the project**
  -> Read `/agent_docs/building_and_running_the_project.md`
  _(Contains: build/run commands, etc.)_

- **Task: Working with Git**
  -> Read `/agent_docs/git_workflow.md`
  _(Contains: conventional commit types, commit formatting rules)_

- **Task: Writing or Running Tests**
  -> Read `/agent_docs/testing_workflow.md`
  _(Contains: test commands, suite structure, mocking strategy, etc.)_

- **Task: Database or Schema Changes**
  -> Read `/agent_docs/database_workflow.md`
  _(Contains: prisma commands, migration workflows)_

- **Task: Code Style or Formatting**
  -> Read `/agent_docs/coding_style_guidelines.md`
  _(Contains: prettier commands, formatting rules, linting)_

- **Task: UI/Component Work**
  -> Read `/agent_docs/ui_design_guidelines.md`
  _(Contains: component patterns, fonts, Tailwind conventions, design rules)_

- **Task: Deployment or CI/CD**
  -> Read `/agent_docs/deployment.md`
  _(Contains: env var requirements)_

## Core Rules

1. **Load Context First**: Do not guess commands. Read the specific workflow file above before running code.
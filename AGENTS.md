# Project Context

- **App**: nextjs-dashboard
- **Goal**: A starter Next.js App Router course
- **Stack**: Next.js, Tailwind, Node, Prisma, Postgress

## Codebase Map

- `/app`: Frontend routes
- `/lib`: Shared utilities
- `/agent_docs`: **Agent Knowledge Base** (See below)

## Agent Knowledge Base (Context Loading)

Before starting a task, you **MUST** read the relevant guide below to load the correct workflow
commands and context:

- **Task: Building or Running the project**
  -> Read `/agent_docs/building_and_running_the_project.md`
  *(Contains: build/run commands, etc.)*

- **Task: Working with Git**
  -> Read `/agent_docs/git_workflow.md`
  *(Contains: conventional commit types, commit formatting rules)*

- **Task: Writing or Running Tests**
  -> Read `/agent_docs/testing_workflow.md`
  *(Contains: test commands, suite structure, mocking strategy, etc.)*

- **Task: Database or Schema Changes**
  -> Read `/agent_docs/database_workflow.md`
  *(Contains: prisma commands, migration workflows)*

- **Task: Code Style or Formatting**
  -> Read `/agent_docs/formatting_workflow.md`
  *(Contains: prettier commands, formatting rules)*

- **Task: UI/Component Work**
  -> Read `/agent_docs/ui_guidelines.md`
  *(Contains: component library usage, CSS patterns, storybook commands)*

- **Task: Deployment or CI/CD**
  -> Read `/agent_docs/deployment.md`
  *(Contains: env var requirements)*

## Core Rules

1. **Load Context First**: Do not guess commands. Read the specific workflow file above before running code.
2. **Trust the Tools**: Do not discuss style. If a linter exists, use it to fix errors.
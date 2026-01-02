# Git Workflow

## Commit Message Format

All commit messages must follow the **Conventional Commits** specification.
**Format**: `<type>(scope): <description>`

- **Imperative mood**: "add" not "added", "fix" not "fixed".
- **Lowercase**: Do not capitalize the first letter of the description.
- **No period**: Do not end the description with a period.

## Scopes

The scope must indicate the section of the codebase being modified.

- **Directory-Based**: Use the top-level folder or module name (e.g., `client`, `server`, `ui`, `api`).
- **Feature-Based**: If the change is specific to a domain feature (e.g., `auth`, `cart`, `profile`), use that.
- **Global**: Use `root` or `repo` for changes to root config files (like `.gitignore`).
- **Formatting**: Scopes must be lowercase and kebab-case.

## Allowed Types

You must strictly select one of the following types based on the nature of the change:

- **feat**: A new feature for the user, not a new feature for build script.
- **fix**: A bug fix for the user, not a fix to a build script.
- **perf**: A code change that improves performance.
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- **test**: Adding missing tests or correcting existing tests.
- **docs**: Documentation only changes.
- **build**: Changes that affect the build system or external dependencies.
- **ci**: Changes to CI configuration files and scripts.

## Breaking Changes

If a commit introduces a breaking change, add a `BREAKING CHANGE:` footer or append `!` after the type/scope.

**Example**: `feat(auth)!: remove legacy login endpoint`
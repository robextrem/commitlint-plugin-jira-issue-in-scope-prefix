# JIRA Issue in Scope (Customizable Prefix Edition)

This project is a fork of [swisscat/commitlint-plugin-jira-issue-in-scope](https://github.com/swisscat/commitlint-plugin-jira-issue-in-scope), a plugin extension for [commitlint](https://github.com/conventional-changelog/commitlint). It extends the functionality to support dynamic JIRA issue prefixes while maintaining compatibility with the original implementation.

If you want to learn more about structured and convention-driven commit messages, see [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Features

This fork adds support for:
- **Dynamic JIRA Prefixes**: Enforce specific prefixes for JIRA issue keys (e.g., `IBN-123`).
- **Fallback to Original Behavior**: If no prefix is specified, the rule will validate issue numbers using the original regex pattern.

## Rules

This plugin adds the following rule:
+ `jira-issue-in-scope`:
  + Ensures that the `scope` is defined and formatted as a JIRA issue number.
  + When a prefix is provided, the issue key must match the specified prefix.
  + Example formats:
    - With prefix: `feat(IBN-123): Add feature`
    - Without prefix: `feat(ABC-123): Add feature`

## Sample Configuration

```js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    plugins: ['jira-issue-in-scope'],
    rules: {
        // With a custom prefix
        'jira-issue-in-scope': [2, 'always', 'IBN'],

        // Without a custom prefix (fallback to original regex)
        // 'jira-issue-in-scope': [2, 'always']
    }
};

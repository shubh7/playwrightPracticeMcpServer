# playwrightPracticeMcpServer

This project is an end-to-end automation framework using Playwright and TypeScript. It is designed for UI testing of web applications, with a focus on best practices such as the Page Object Model, environment-based configuration, and CI/CD integration.

## Features
- Automated browser testing with Playwright (Chromium, Chrome, Firefox, WebKit)
- Page Object Model for maintainable and reusable test code
- Environment variable support via `.env` files
- Test scenarios for login, product filtering, and cart functionality (e.g., https://www.saucedemo.com/)
- Linting and code quality tools
- CI/CD pipeline ready (Azure Pipelines)

## Project Structure
- `pages/` — Page Object Model classes for each page/component
- `tests/` — Test specs for various scenarios
- `configs/` — Environment configuration files
- `playwright.config.ts` — Playwright and test runner configuration

## Example Scenarios
- Login with valid credentials
- Filter and verify products
- Add products to cart and verify cart contents

## Playwright MCP Server
This project is enabled for Playwright Model Context Protocol (MCP) server integration. MCP allows advanced automation, remote browser control, and enhanced debugging capabilities. You can use the MCP server to:
- Run Playwright tests remotely or in distributed environments
- Integrate with cloud-based test execution platforms
- Enable advanced debugging and inspection features

### How to Enable MCP Server in VS Code
1. Open your workspace in VS Code.
2. Go to `.vscode/settings.json` (create the file if it doesn't exist).
3. Add the following configuration:
   ```json
   {
     "chat.mcp.enabled": true,
     "mcp": {
       "servers": {
         "playwright": {
           "command": "npx",
           "args": ["@playwright/mcp@latest"]
         }
       }
     }
   }
   ```
4. Save the file. The MCP server will now be enabled for your workspace, allowing advanced Playwright features and remote control.

To start the MCP server manually or for more advanced usage, refer to the Playwright documentation or your custom scripts. Ensure your pipeline and local environment are configured for MCP if you require remote or distributed test execution.

## Getting Started
1. Install dependencies: `pnpm install`
2. Set up environment variables in `configs/test.env`
3. Run tests: `pnpm exec playwright test --project=chromium`
4. For slow mode (visual debugging), configure `slowMo` in `playwright.config.ts`

## CI/CD
- Azure Pipeline configuration is included for automated test execution and reporting.

---

For more details, see the test specs and page objects in the repository.
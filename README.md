# Multiwoven Docs

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) version >= 12.13.0 or above (which can be checked by running `node -v`).
- [Yarn](https://yarnpkg.com/) version >= 1.5 (which can be checked by running `yarn --version`).

### Setup

1. **Fork the repository**: Click on the 'Fork' button at the top right corner of this page.
2. **Clone your fork**: Run `git clone git@github.com:Multiwoven/docs.git`
3. **Navigate to the directory**: `cd docs`
4. **Install dependencies**: Run `yarn install`
5. **Start the development server**: Run `yarn start`

This will start a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Contributing

We welcome all contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to the project.

### Creating a New Document

1. **Add a new markdown file** in the `docs` directory.
2. **Add your document's ID** to the sidebar in `sidebars.js`.
3. **Write your content**: Use Markdown to format your document.

### Submitting a Pull Request

1. **Push your changes** to your fork.
2. **Create a pull request**: Describe the changes you've made and submit it to our repository.

## Publishing

The site is published automatically through our CI/CD pipeline whenever changes are merged into the `main` branch.

## Support

If you need help or have questions, feel free to reach out to us:
- [GitHub Issues](link-to-your-repo-issues)
- [Discord/Slack Channel](link-to-your-chat-channel)
- [Email](hello@multiwoven.com)

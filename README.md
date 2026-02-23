# minions-blogs

**Blog definitions, settings, brand voice, and target audience profiles**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-blogs/sdk minions-sdk

# Python
pip install minions-blogs

# CLI (global)
npm install -g @minions-blogs/cli
```

---

## CLI

```bash
# Show help
blogs --help
```

---

## Python SDK

```python
from minions_blogs import create_client

client = create_client()
```

---

## Project Structure

```
minions-blogs/
  packages/
    core/           # TypeScript core library (@minions-blogs/sdk on npm)
    python/         # Python SDK (minions-blogs on PyPI)
    cli/            # CLI tool (@minions-blogs/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [blogs.minions.help](https://blogs.minions.help)
- Blog: [blogs.minions.blog](https://blogs.minions.blog)
- App: [blogs.minions.wtf](https://blogs.minions.wtf)

---

## License

[MIT](LICENSE)

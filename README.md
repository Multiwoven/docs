<div align="center">
  <a href="https://multiwoven.com?utm_source=github" target="_blank">
    <img alt="Multiwoven Logo" src="https://framerusercontent.com/images/QI2W5kDjl2HGKnAISsV9WVxcR0I.png?scale-down-to=512" width="280"/>
  </a>
</div>

<br/>

<h2 align="center">The open-source reverse ETL platform for data teams</h2>

<div align="center">Your ultimate solution for seamless data sync from warehouse to any application.</div>

<p align="center">
    <br />
    <a href="https://docs.multiwoven.com" rel=""><strong>Explore the docs »</strong></a>
    <br />

  <br/>
    <a href="https://github.com/Multiwoven/multiwoven/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/Multiwoven/multiwoven/issues/new">Request Feature</a>
    ·
  <a href="https://discord.multiwoven.com">Join Our Discord</a>
    ·
    <a href="https://roadmap.multiwoven.com">Roadmap</a>
    ·
    <a href="https://twitter.com/multiwoven">X</a>
    ·
    <a href="https://multiwoven.com">Slack Community</a>
  </p>

### 🤝 Docs Contribution

First, install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) locally. To install, use the following command

```
npm i -g mintlify
```

__Note__: Please install Node.js (version 18 or higher) before proceeding.

Run the following command at the root of your documentation (where mint.json is)

```
mintlify dev
```

### 😎 Publishing Changes

All changes to the docs should be submitted against the `develop` branch.

PRs from `develop` to `main` will be deployed to production automatically after merge.

#### Troubleshooting

- Mintlify dev isn't running - Run `mintlify install` it'll re-install dependencies.
- Page loads as a 404 - Make sure you are running in a folder with `mint.json`

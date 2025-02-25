# storyblok_sample playground

A playground for experimenting with potential technologies used in the Storyblok Sample stack. This stack uses Yarn 4 (no workspaces) and includes basic Docker setup. This is in no way a baseline, but a just place to experiment with new technologies.

## Getting started

Signup with Storyblok and create a new space. It will create a '/home' page by default.

Fetch your Storyblok story ID. Create a new file in `client/.env.development`:
```bash
STORYBOOK_TOKEN=yourstorybloktoken
```

You can now run the whole stack with.
```bash
docker compose up
```

### client

This is a Next.js 18 project that uses Storyblok as a CMS using the pages router, configured with Tailwind and SCSS (if needed). There are also good examples of using the app router here that we should consider:
https://github.com/storyblok/storyblok-react/tree/main/playground

For running the Storyblok editor locally, generate a certificate for localhost:
```bash
# Only needs to be done once
cd client/
brew install mkcert
mkcert localhost
mkcert -install
```

Now run the proxy:
```bash
yarn storybook:proxy
```

Storyblok will now be available at https://localhost:3010

When building the React end of the Storyblok components, it's helpful to have Type coverage for the component props. Storyblock's CLI provides a way to do this:
```bash
yarn storybook:login # Logs in to Storyblok, only needs to be done once
SPACE_ID=yourstoryid yarn storybook:pull # Pulls the schema from Storyblok as JSON
SPACE_ID=yourstoryid yarn storybook:types # Generates TypeScript types from the JSON
```

### api & inngest
This is just a stub Express server, configured to run with Inngest and build with Vite. [Inngest](https://www.inngest.com/) is a task orchestrator, in my experience it's come in handy for a variety of tasks, and may be handy here when it comes to automated content migration or observability. Inngest is configured to run locally via docker compose.

To run, drop an `api/.env` file with the following:
```bash
INNGEST_ID=inngest-api
INNGEST_EVENT_KEY=fL4DnZoeyQkd5ZgjsIai52w_ebmz89UpHF-0fut8-1SiCN-1k02a7gh48M8v0fHiLSvjhwZ_OmBOX00MUpA2GQ
INNGEST_SIGNING_KEY=signkey-branch-d640c545a047564d1a17b87e1b4bb27ce7f512405aecad133f0d3aaf4b4b1bd8
INNGEST_DEV=0
INNGEST_BASE_URL=http://host.docker.internal:8288
```

And uncomment the `api` and `inngest` services in `docker-compose.yml`.

### e2e
This is a stub Cypress project for running end-to-end tests. You can open the test runner UI with:
```bash
yarn test:open
```

We should consider adding Cypress component tests to the `client` project.

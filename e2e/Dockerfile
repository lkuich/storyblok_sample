FROM cypress/base:22.14.0 AS base

LABEL app="rule-e2e"

WORKDIR /opt/app

COPY package.json yarn.lock .yarnrc.yml ./

RUN corepack enable && corepack prepare yarn@4.0.0 --activate
RUN yarn install --immutable

RUN /opt/app/node_modules/.bin/cypress verify

FROM base as dev
COPY . .

# prevent the container from existing while CI runs tests via docker-compose exec
CMD sleep 99999999999
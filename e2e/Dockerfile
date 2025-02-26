FROM cypress/base:22.14.0 AS base

WORKDIR /opt/app

COPY package.json yarn.lock .yarnrc.yml ./

RUN corepack enable && corepack prepare yarn@4.0.0 --activate
RUN yarn install --immutable

RUN /opt/app/node_modules/.bin/cypress verify

FROM base as dev
COPY . .

CMD sleep 99999999999

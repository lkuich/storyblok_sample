FROM node:22

WORKDIR /opt/client

COPY ./package.json ./yarn.lock .yarnrc.yml ./
RUN corepack enable && corepack prepare yarn@4.0.0 --activate

RUN yarn install --immutable

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]

# Do a production step at some point
FROM node:22-alpine AS base

WORKDIR /opt/api

# Copy package files first for caching
COPY package.json yarn.lock .yarnrc.yml ./

RUN corepack enable && corepack prepare yarn@4.0.0 --activate

RUN yarn install --immutable

FROM base AS dev
COPY . .
CMD ["yarn", "dev"]

# FROM base AS build
# COPY . .

# # Build the app
# RUN yarn build

# # --------------------
# # Production Stage
# # --------------------
# FROM node:22-alpine AS production

# WORKDIR /opt/api

# # Copy package files and install only production dependencies
# COPY package.json yarn.lock .yarnrc.yml ./
# RUN corepack enable && \
#     corepack prepare yarn@4.0.0 --activate && \
#     yarn install && \
#     yarn workspaces focus --production

# # Copy built files from the build stage
# COPY --from=build /opt/api/dist /opt/api/dist

# # Start the app
# CMD ["yarn", "start"]

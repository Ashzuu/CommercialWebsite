ARG PORT_EXPOSED=3001
ARG NODE_VERSION="22-alpine"

FROM node:${NODE_VERSION} AS deps
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0

COPY package.json package-lock.json ./
RUN npm ci --only=production

FROM node:${NODE_VERSION} AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM node:${NODE_VERSION} AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json
EXPOSE ${PORT_EXPOSED}
HEALTHCHECK --interval=5m --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:${PORT_EXPOSED}', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"
CMD ["node", ".output/server/index.mjs"]


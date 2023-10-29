# Build stage
FROM node:12-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --quiet

COPY . .

RUN npm run build

# Production stage
FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built app from the previous stage
COPY --from=builder /usr/src/app/dist ./dist

CMD ["npm", "run", "start:prod"]
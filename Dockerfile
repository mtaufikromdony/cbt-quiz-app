# ==========================================
# Stage 1: Build Application
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency definitions first for optimal layer caching
COPY package.json package-lock.json ./

# Clean installation of dependencies
RUN npm ci

# Copy full application source code
COPY . .

# Build production distribution assets
RUN npm run build

# ==========================================
# Stage 2: Production Nginx Server
# ==========================================
FROM nginx:alpine AS runner

# Remove default nginx html template
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration with SPA fallback and gzip
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose standard HTTP port
EXPOSE 80

# Healthcheck to ensure container availability
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

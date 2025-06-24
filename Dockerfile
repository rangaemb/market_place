# --- Stage 1: Build Stage ---
# Use the official Node.js 18 image. The 'alpine' version is smaller.
FROM node:22-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock, etc.) first
# This leverages Docker's layer caching. These files don't change often.
COPY package*.json ./

# Install all dependencies, including devDependencies needed for the build
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Set the NEXT_PUBLIC_API_URL build argument
# We'll pass this in from docker-compose.yml
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# Build the Next.js application for production
# This will create the .next folder
RUN npm run build


# --- Stage 2: Production Stage ---
# Use a slim, production-ready Node.js image
FROM node:22-alpine AS production

# Set the working directory
WORKDIR /app

# Create a non-root user for better security
# Running as 'root' in a container is a security risk.
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Copy only the necessary files from the 'builder' stage
# This includes the .next folder (the built app), public folder, and node_modules.
COPY --from=builder --chown=appuser:appgroup /app/public ./public
COPY --from=builder --chown=appuser:appgroup /app/.next/standalone ./
COPY --from=builder --chown=appuser:appgroup /app/.next/static ./.next/static

# Expose the port the Next.js server will run on
EXPOSE 3000

# The command to run when the container starts
# We use the standalone output which is optimized for Docker.
CMD ["node", "server.js"]
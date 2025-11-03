# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files first (for caching layers)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application
COPY . .

# Expose the app port
EXPOSE 3000

# Start the Node.js app
CMD ["node", "app.js"]
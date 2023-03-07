# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Set environment variable
ENV REACT_APP_VERSION=v1.1.0
ENV GENERATE_SOURCEMAP=false

# Build the React app for production
RUN npm run build

# Set environment variables
ENV NODE_ENV=production

# Expose port 3000 for the React app
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]

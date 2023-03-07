# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install -g npm-check-updates
RUN ncu -u
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Build the React app for production
RUN npm run build

# Set environment variables
ENV NODE_ENV=production

# Expose port 3000 for the React app
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]

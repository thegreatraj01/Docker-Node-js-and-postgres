# Specify the base image
FROM node:22-alpine3.18

# Create a working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port on which your Node.js app will run
EXPOSE 5000

# Command to start the Node.js app
CMD ["npm", "run", "dev"]

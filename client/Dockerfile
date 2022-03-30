# Dockerfile

# base image
FROM node:alpine

# set working directory
WORKDIR /app

# copy source files
COPY package.json ./

# install dependencies
RUN npm install 

COPY * ././

CMD ["npm", "run", "dev"]
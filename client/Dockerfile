# Dockerfile

# base image
FROM node:alpine

# set working directory
WORKDIR /app

# copy source files
COPY package.json ./

# install dependencies
RUN npm install -g npm@8.5.5
RUN npm install
#RUN npm i eslint-plugin-react-hooks  

COPY * ././

CMD ["npm", "run", "dev"]
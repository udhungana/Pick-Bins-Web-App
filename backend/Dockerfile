# Creating a light weight image
FROM node:alpine

LABEL maintainer = BIPUL

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 4000

ENTRYPOINT [ "node" ]

CMD [ "index.js" ]

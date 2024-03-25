FROM node:alpine as pick-bins-client

WORKDIR /client

COPY package.json yarn.lock ./

RUN yarn

COPY ./public ./public

COPY ./src ./src

RUN yarn build

FROM nginx:latest

LABEL maintainer=utsav

COPY --from=pick-bins-client /client/build/ /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80

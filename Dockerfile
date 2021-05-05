FROM node:12-alpine as build-step

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build 

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/AdCost /usr/share/nginx/html
EXPOSE 4200

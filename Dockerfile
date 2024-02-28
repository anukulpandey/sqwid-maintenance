FROM node:18 as builder
RUN apt-get update && apt-get -y upgrade

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN npm install
COPY . ./

RUN npm run build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/app/dist /usr/share/nginx/html

EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]
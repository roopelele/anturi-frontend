FROM node:12.22.3-alpine as build

WORKDIR "/app"

COPY ./package.json /app/package.json

RUN npm install
COPY . /app
RUN npm run build

FROM nginx:stable-alpine
EXPOSE 80
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build/* /usr/share/nginx/html/

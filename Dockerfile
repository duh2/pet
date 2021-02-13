FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN apk add mysql mysql-client
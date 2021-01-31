FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN mv /usr/share/nginx/html/petpage.html /usr/share/nginx/html/index.html

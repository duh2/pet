FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN mv /usr/share/nginx/html/petpage.html /usr/share/nginx/html/index.html
RUN mkdir -p /usr/share/html/bin
RUN touch /usr/share/html/bin/build.sh
RUN touch /usr/share/html/bin/run.sh
FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN chmod a+x /usr/share/nginx/html/bin/build.sh
RUN chmod a+x /usr/share/nginx/html/bin/run.sh

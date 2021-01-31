FROM ubuntu:18.04
RUN  apt-get update && apt-get -y install nginx
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
RUN mkdir -p /var/www/mysite.com/html
COPY ./index.html /var/www/mysite/html/petpage.html
COPY ./mysite.txt /etc/nginx/sites-available/mysite
COPY ./mysite.conf /etc/nginx/conf.d/mysite.conf 
RUN ln -s /etc/nginx/sites-available/mysite /etc/nginx/sites-enabled/
EXPOSE 81
CMD ["nginx"]

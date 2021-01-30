FROM ubuntu:18.04
RUN  apt-get update && apt-get -y install nginx
RUN  apt-get -y install git
RUN  cd /etc/nginx/ \
git clone https://github.com/duh2/pet.git
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
RUN mkdir -p /var/www/ostechnix1.lan/public_html
COPY ./index.html /var/www/ostechnix1.lan/public_html/
COPY ./HideBoxes.js /var/www/ostechnix1.lan/public_html/
COPY ./petcss.css /var/www/ostechnix1.lan/public_html/
COPY ./sortprice.js /var/www/ostechnix1.lan/public_html/
COPY ./5c5199ed6194c843895_001_phsrh000_2000.jpeg /var/www/ostechnix1.lan/public_html/
COPY ./roboto/*.TTF /var/www/ostechnix1.lan/public_html
COPY ./ostechnix1.lan.conf etc/nginx/sites-available
RUN rm /etc/nginx/sites-enabled/default
RUN ln -s /etc/nginx/sites-available/ostechnix1.lan.conf /etc/nginx/sites-enabled/

EXPOSE 80
CMD ["nginx"]

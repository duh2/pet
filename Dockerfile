FROM ubuntu:18.04
RUN  apt-get update && apt-get -y install nginx
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
RUN mkdir -p /var/www/PetVirtualSite/public_html
COPY ./index.html /var/www/PetVirtualSite/public_html/
COPY ./HideBoxes.js /var/www/PetVirtualSite/public_html/
COPY ./petcss.css /var/www/PetVirtualSite/public_html/
COPY ./sortprice.js /var/www/PetVirtualSite/public_html/
COPY ./5c5199ed6194c843895_001_phsrh000_2000.jpeg /var/www/PetVirtualSite/public_html/
COPY ./roboto/*.TTF /var/www/PetVirtualSite/public_html
COPY ./PetVirtualSite.conf etc/nginx/sites-available
RUN rm /etc/nginx/sites-enabled/default
RUN ln -s /etc/nginx/sites-available/PetVirtualSite.conf /etc/nginx/sites-enabled/
EXPOSE 80
CMD ["nginx"]

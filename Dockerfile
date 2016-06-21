FROM nginx:1.9.7
ADD ./          /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/nginx.conf

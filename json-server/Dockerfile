FROM node:alpine
EXPOSE 3000
COPY db.json /opt/db.json
RUN yarn global add json-server
CMD ["json-server", "-H", "195.201.216.19","opt/db.json"]
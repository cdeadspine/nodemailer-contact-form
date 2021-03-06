FROM node:current-alpine3.12
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
RUN npm ci --only=production
COPY . .
EXPOSE 8080
VOLUME ${PWD}/mnt/config.yml:/config.yml
CMD [ "node", "app.js" ]

#test
#RUN echo 'sleep infinity' >> /bootstrap.sh
#RUN chmod +x /bootstrap.sh
#CMD /bootstrap.sh
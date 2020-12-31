FROM node:current-alpine3.12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm ci --only=production
COPY . .
EXPOSE 8080
VOLUME ${PWD}/mnt/config.yml:/config.yml
CMD [ "node", "/usr/src/app/app.js" ]
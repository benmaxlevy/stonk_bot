FROM node
WORKDIR /usr/src/discord_bot
COPY package*.json ./
RUN npm i
COPY . .
CMD [ "node", "app.js" ]
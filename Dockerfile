FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install bcrypt
COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]
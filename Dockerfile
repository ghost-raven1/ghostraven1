FROM node:18.13.0-alpine
LABEL authors="aleksey-starodubcev"

WORKDIR /app

COPY ./package*.json .
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
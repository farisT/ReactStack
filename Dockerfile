#Stage 1 - The Build Process
FROM node:latest

ADD . /app

WORKDIR /app
RUN npm install --production-only

CMD ["node", "server.js"]

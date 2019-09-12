FROM node:10.16-slim
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]

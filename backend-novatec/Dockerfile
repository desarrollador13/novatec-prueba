FROM node:12.11.1
COPY	package*.json ./
COPY	tsconfig.json ./
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install
EXPOSE 3004
CMD ["npm","run", "start"]
FROM node:14
WORKDIR /app
COPY . /app
RUN npm ci
CMD npm start
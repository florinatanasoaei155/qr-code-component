FROM node:alpine

WORKDIR /app

COPY ./package.json ./

COPY yarn.lock ./

RUN yarn install

COPY ./src ./src

COPY ./public ./public

COPY ./README.md ./

EXPOSE 3000

CMD ["yarn", "start"]
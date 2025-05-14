# syntax=docker/dockerfile:1

FROM node:lts AS base
ENV FORCE_COLOR=0
RUN corepack enable
WORKDIR /opt/docusaurus

FROM base AS dev
WORKDIR /opt/docusaurus

# Copie du code (sera écrasé par le volume en dev)
COPY . .

EXPOSE 3000

RUN npm install

CMD ["npm", "run", "start-docker"]

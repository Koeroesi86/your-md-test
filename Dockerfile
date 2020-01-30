FROM node:12-alpine
LABEL maintainer="Krisztian Korosi"
LABEL description="Your.md test Docker image"

WORKDIR /data
COPY . .

RUN yarn install --production

CMD [ "yarn", "serve" ]

EXPOSE 3000/tcp
EXPOSE 3000/udp

# Your.md test

Your.md code test as defined on [GitHub](https://github.com/YourMD/javascript-coding-test).

## Dependencies

* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://legacy.yarnpkg.com/en/docs/install/#windows-stable)
* [Docker](https://hub.docker.com/?overlay=onboarding) (optional for containerizing)

## Development

```bash
yarn install
yarn start
```

## Build

```bash
yarn install
yarn build
yarn serve
```

### Host locally
```bash
yarn serve
```

## Containerize

After the app is built with Webpack, it can be containerized.

```bash
docker build -t your-md-test -f Dockerfile .
``` 

## Run Docker locally

```bash
docker run -p 3000:3000 -i your-md-test
``` 

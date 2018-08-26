# pong.io-server
A Node Server With Socket Io of Pong.io

All changes on server must rebuild with webpack and run node server again, sorry about that.

## Dev

### Install

1. `docker-compose build`
2. `docker-compose run pong-io-server yarn install`
3. `docker-compose up`

### Coding

1. `docker exec -it pong-io-server node src/index.js`

Every Time some change is made on project this command must be stoped and started again.

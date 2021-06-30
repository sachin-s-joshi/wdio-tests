# FROM node:12.20-alpine3.10
FROM timbru31/java-node:jdk
WORKDIR /wdio-tests
COPY . /wdio-tests/
RUN npm install
CMD []


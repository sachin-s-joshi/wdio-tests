# Approach
This repo uses webdriverIO v7 with cucumber BDD approach to automate the tests on UI and uses node-fetch for API tests.
This also covers running tests using docker-compose file

## UI tests
- Executes cases for todomvc app https://todomvc.com/examples/react/#/

### Cases Covered
- Create tasks
- Complete tasks
- Check completed tasks only
- Check only active tasks
- Delete tasks
- Clear all Tasks

## API tests
 - Executes basic API test checking body,responses for https://jsonplaceholder.typicode.com/

### Cases Covered
- GET /posts, /todos, /comments
- POST /posts to create record
- UPDATE /posts data by id
- DELETE /posts by id
Have covered basics and we can extend similar things for other endpoints as well

# Running Tests Locally and through Docker 

#### pre-requisite
 - NodeJS v14+
 - Java only for getting allure report
 - Docker for running through docker file and build images

## Local Execution
 To run all tests UI & API Follow Below steps:
 - set .env file variable `FEATURES='./features/**/*.feature'` 
 - execute `npm test` command to see it in action
 -  You can run this single command to override .env variables using `FEATURES=<desired_file> npm test`
 - Generate Beautiful Allure report using `npm run report`

## Execution through Docker
- To run in docker build image for tests locally using `docker build -t gelato .`
- Once the build is done, now run `docker-compose up` to setup tests grid that uses chrome browser to run, we can add more browsers as required
- Use `docker ps` to find the conatiner id of image gelato, we will need to execute inside container
- Once you have container <id>, execute inside container using `docker exec -it <id> sh`
- Now run `npm run test:remote` to run in docker
- To generate Allure report use `npm run report`
- To view report for runs that happened in container, execute `npm run report` on local terminal as volumes are attached so reports gets updated locally

> Note: Run in vscode for better integration of cucumber files and step files highlight, [cucumber extension](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)


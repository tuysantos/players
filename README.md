# Players - A list of players of a given team

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

It also includes RxJS, Typescript and Javascript

In this project it is demo a very simple node.js Restful service with only a get method.

The database is MongoDB.

The application display a lista of players with a ability to filter the list by first name, last name, position or nationality.

In order to test the Restful API End Point alone, you must add a header attribute 'x-access-token' with value 'YWRtaW46dGVzdDEyMw=='.

## Software Requirements To Run

* Node.js 8.10 or higher
* MongoDB 3.4 or higher

### Running the Application

1. Install Node.js (8.10 or higher) and MongoDB (3.4 or higher) on your dev box

    * Node.js: https://nodejs.org
    * MongoDB: https://docs.mongodb.com/manual/administration/install-community

1. Run `mongod` to start the MongoDB daemon

1. Run `npm install -g nodemon`

1. Run `npm install` at the project root to install the app dependencies (src folder)

1. build the app: 

    `ng build --watch`

1. Run `npm run server` in another console window to start the Node.js server

1. Browse to http://localhost:3000

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

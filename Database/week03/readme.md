# TodoApp

TodoApp is an application which was made using node.js and mySQL for create users, todolists and add items, tags and reminders.

## Installation

Use the [mysql](https://www.mysql.com/downloads/) for creating database.

Use the "npm" as package manager to install express.js and mySQL2 packages

`npm install express`
`npm install mysql2`

## Usage

In mysql file, create app database and tables. Be aware, when creating tables include foreign keys, null or not null and auto increment values.

`CREATE DATABASE  IF NOT EXISTS todoapp`

In node.js file, Call the express.js and mysql2 modules.

`const express = require('express');
const mysql = require('mysql2');`

For initializing, connect to mysql database and run the server. 

`const connection = mysql.createConnection ({
    host: 'localhost',
    user: '<your username>',
    password: '<your password>',
    database: '<your database name>'
})`


Then, for creating user/list/item/reminder use express.js POST method. 

`app.post('/api/signup',  (req, res) => {
    ...
 });`
   
For deleting user/list/item/reminder use express.js DELETE method.

`app.delete('/api/userdelete',  (req, res) => { 
    ...
});`

For putting reminder and check the task as completed use express.js PUT method.

`app.put('/api/todotask/completed', (req, res) => {
    ...
});`

To add the changes the database use the queries(INSERT INTO/DELETE/UPDATE statements) and query method.

`connection.query(query, (err,result) => {
        ...
 })`
 
 For avoid creating "undefined" user/list/item/reminder, add if statements in query functions.

## Testing

For the testing;

create values in .json format :

`{"username":"test"}`

delete values in url end :

`todoapp/signup/:user_id` replace `todoapp/signup/1`


for testing in CLI :  `curl -X POST -H "Content-Type: application/json" -d '{"username":"test"}' http://localhost:3000/api/signup`

for testing in a GUI : https://www.postman.com/descent-module-specialist-92670130/workspace/todoapp/request/27811356-5611bca7-4ac6-49f8-b8e7-6dcec5de6005



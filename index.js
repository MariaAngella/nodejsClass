// console.log('hello world')
/* trying to display content on a browser using express package */
const express = require("express"); // require is a keyword used to use a package i.e express
const app = express(); // now we have our express app

//app.listen(3000)opened up a port 3000 on which our server will listen with the browser
app.listen(3000, function() {
  console.log("listening on 3000"); // console.log is good practice to show that the code is running
});

/* ........navigate localhost:3000..............localhost is my machine on port 3000
localhost:3000 tries to READ our webpage
browser sends a GET request to the server to perform a READ operation
reason for the 'cannot get /' error is because we haven't sent anything back to browser from our server */

/* now in that we have a READ operation from the Browser
1. in express we handle a GET request with the get method.....app.get(path, callback)
a. argument path is the path of the GET request... it's anything that comes after your domain name.i.e localhost:3000/ = / 
b. callback argument is a function with request and response objects */
/* app.get ('/', function (req, res){
    res.send('Hello World')
}) */

/* Express is a web app framework for nodejs */

//using arrow function
app.get("/", (req, res) => {
  res.send("Hello World here");
});

/* use nodemon not to restart the server eachtime a change is made 
npm install nodemon --save-dev......(nodemon) is a package........(--save-dev) is a flag*/

/* Routing----directing browser user to pick certain pages from the server
get ---browser is reading/rendering/displaying what is in the server
post ---browser is sending to the server
put ----browser is editing in the server/database
delete ----browser is deleting in the server*/

/* routing methods below ......other methods for res are send,render etc*/
app.get("/about", (req, res) => {
  res.send("This is the about us page");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

/* postman is a testing and building tool for checking methods if they work unlike in the browser that needs a form first */

/* routing query parameters 
and path params */
// path param

app.get('/user/:name', (req, res) => {
  res.send("Hello" + req.params.name);
});



/* writing an error page for a path/route that doesn't exist */

app.get("*", (req, res) => {
  res.send("Got an ERROR request at /user");
});

//Assgnmt---READ ABOUT PUG(templating language)slide presentation--form using pug that has name,etc
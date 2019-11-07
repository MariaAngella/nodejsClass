/*require helps node understand your file directory  */
const path = require('path')
const express = require ('express')
const app = express()
/* setting the view engine as pug */
app.set('view engine', 'pug')
/* there's a folder called views and the rest-----path.join(_dirname, 'views')--- is how to get it */
app.set('views', path.join(_dirname, 'views'))
require("./instrument.js");

const Sentry = require("@sentry/node");
const express = require('express')
const routes = require('./src/routes/routes.route')
const cors = require('cors');

const app = express()
const port = 3000

app.use(cors());
app.use(express.json())
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

Sentry.setupExpressErrorHandler(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

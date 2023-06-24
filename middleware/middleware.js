const morgan = require("morgan");
const cors = require("cors");
const express = require("express")



const middleware = [express.json(), morgan("dev"), cors()]


module.exports = middleware;
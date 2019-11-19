"use strict";

import fetch from "node-fetch";
// const fetch = require("node-fetch");

exports.handler = async ( event , context ) => { 
  return { statusCode : 200 , body : " We are now split testing! " + process.version }
}
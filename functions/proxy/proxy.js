"use strict";

const fetch = require("node-fetch")

exports.handler = async ( event , context ) => { 

  try {
    const city = 'Ljubljana'
    const key = '62e6dd5ec121aa6bf1873e3ce4221175'
    const url = `http://api.weatherstack.com/current?access_key=${key}&query=${city}`
    const response = await fetch(url)
    const weather = await response.json()
    return { statusCode : 200 , body: JSON.stringify(weather) }  
  } catch (e) {
    return { statusCode : 200 , body: JSON.stringify(e) }  
  }
}
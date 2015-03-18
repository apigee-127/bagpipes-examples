# Overview

Given an address, this project uses Google, Weather Underground, and Yelp to look up the destination's geo location,
gather the 10-day forecast and nearby eateries, and display the results in a text formatted list to the user. (The only
code that was written was to show an example of creating a user fitting for calling Yelp.)

This project uses various swagger-pipes techniques including:

* serial pipes
* parallel pipes
* various functional filters
* http calls to Google maps & Weather underground APIs
* a custom user fitting (Yelp)
* using mustache for rendering

# Usage

1. Check out this code
2. Run npm install
3. Get some Yelp credentials
4. Put your Yelp credentials here: [config/default.yaml](config/default.yaml)
5. Run the app: `a127 project start` or `node app.js`

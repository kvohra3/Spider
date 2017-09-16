var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/', function(req, res){
  url = 'https://www.reddit.com/r/Fantasy_Football/'
  // url = 'http://www.imdb.com/title/tt1229340/'

  //Structre of request call:
  //1st param: URL
  //callback func -> 3 params: err, response status, and html
  request(url, function(err, response, html) {

    //first check no errors occured with request
    if(!err) {
      console.log(html);

    //   //cherrio -> jQuery func on html
    //   var $ = cheerio.load(html);

    //   //define variable to capture
    //   var title, release, rating;
    //   var json = {title: "", release: "", rating: ""};

    //   //look for unique identifier
    //   //e.x. <h1 class="header">
    //   $('.header').filter(function() {

    //     //store data into var so we can easily see whats up
    //     var data = $(this);

    //     //look at DOM and see that title is under first child element of header tag
    //     //use jQuery to navigate and get text
    //     title = data.children().first().text();

    //     //release is last element
    //     release = data.children().last().children().text();

    //     //store data in json obj
    //     json.title = title;
    //     json.release = release;
    //   })

    //   //rating in a diff section so diff func
    //   $('.star-box-giga-star').filter(function() {
    //     var data = $(this);

    //     //exactly what we need
    //     rating = data.text();
    //     json.rating = rating;
    //   })
    }

    // // use fs module to write to system
    // //writeFile fun -> 3 param:
    //   //1) output.json - created filename
    //   //2) json.stringify(json, null, 4) 
    //     //data to write. extra step of calling stringify() to make JSON easier to read
    //   //3) callback func - callback func to let us know status of function
    // fs.writeFile('rawOutput.json', JSON.stringify(json, null, 4), function(err) {
    //   console.log('Check projects folder yo');
    // })

    res.send('check your console!')
  })
})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;

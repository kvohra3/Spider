var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
  // url = 'https://www.reddit.com/r/Fantasy_Football/'
  url = 'http://www.imdb.com/title/tt1229340/'

  //Structre of request call:
  //1st param: URL
  //callback func -> 3 params: err, response status, and html
  request(url, function(err, response, html) {

    //first check no errors occured with request
    if(!err) {

      //cherrio -> jQuery func on html
      var $ = cherrio.load(html);

      //define variable to capture
      var title, release, rating;
      var json = {title: "", release: "", rating: ""};

      //look for unique identifier
      //e.x. <h1 class="header">
      $('.header').filter(function() {

        //store data into var so we can easily see whats up
        var data = $(this);

        //look at DOM and see that title is under first child element of header tag
        //use jQuery to navigate and get text
        title = data.children().first().text();

        //store title in json obj
        json.title = title;
      })
    }
  })
})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;

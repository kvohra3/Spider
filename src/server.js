const utils = require('./utils');

const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');


var pageToVisit = 'https://www.reddit.com';
console.log(`GOING TO ${pageToVisit}`);

request(pageToVisit, (err, res, body) => {
    if(err) {
        console.log('Error:', err);
    }
    console.log(`Status code: ${res.statusCode}`);
    if(res.statusCode === 200) {
        const $ = cheerio.load(body);
        utils.collectInternalLinks($, 'RELATIVE');
        utils.collectInternalLinks($, 'ABSOLUTE');
        utils.isWordHere($, 'test');
        console.log("Page title:  " + $('title').text());
    }
})
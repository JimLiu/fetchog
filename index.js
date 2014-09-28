var cheerio = require('cheerio'),
    rest = require('restler'),
    URI = require('uri-js'),
    Client = {};

var parseMeta = function(url, body) {
  var uri = URI.parse(url);
  var $ = cheerio.load(body);
  var title = $('title').text();
  var charset = $("meta[charset]").attr("charset");

  var images = $('img').map(function(i ,elem){
    var src = $(this).attr('src');
    return URI.resolve(url, src);
  });
  var links = $('a').map(function(i ,elem){
    var href = $(this).attr('href');
    return URI.resolve(url, href);
  });

  var meta = $('meta'),
      metaData = {};

  var property;
  Object.keys(meta).forEach(function(key) {
    var attribs = meta[key].attribs;
    if (attribs) {
      if (attribs.property) {
        metaData[attribs.property.toLowerCase()] = attribs.content;
      }
      if (attribs.name) {
        metaData[attribs.name.toLowerCase()] = attribs.content;
      }
    }
  });
  return {
    title: metaData['og:title'] || title,
    description: metaData['og:description'] || metaData.description,
    type: metaData['og:type'],
    url: metaData['og:url'] || url,
    siteName: metaData['og:site_name'],
    charset: charset,
    uri: uri,
    image: metaData['og:image'],
    meta: metaData,
    images: images,
    links: links
  };
};

Client.fetch = function(url, callback) {
  rest.get(url, {
    timeout: 30000
  }).on('complete', function(result) {
    if (result instanceof Error) {
      callback(result);
    } else {
      var meta = parseMeta(url, result);
      callback(null, meta);
    }
  });
};

module.exports = Client;


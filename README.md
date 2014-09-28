
## Fetchog

Fetchog is an npm package fetching a given URL, returns its title, description, image.

## Usage

### Install
```
npm install --save fetchog
```


### Example
```js
var fetchog     = require('fetchog');

fetchog.fetch('http://www.yahoo.com', function(err, meta) {
  console.log('title: ', meta.title);
  console.log('description: ', meta.description);
  console.log('image: ', meta.image);
  console.log('url: ', meta.url);
});
```

Output
```
title:  Yahoo
description:  A new welcome to Yahoo. The new Yahoo experience makes it easier to discover the news and information that you care about most. It's the web ordered for you.
image:  https://s.yimg.com/dh/ap/default/130909/y_200_a.png
url:  https://www.yahoo.com/
```

### Resposne Data

* `title` Page title, if there is a `og:title` meta tag, it will override the `<title>` tag value.
* `description` Page description, if there is a `og:description` meta tag, it will override the `<meta name='description' content='xxx'>` tag value.
* `image` Page image, it comes from `og:image` meta tag.
* `url` Page url, if there is a `og:url` meta tag, it will override the original request url value.
* `uri` Page uri object, parsed by [uri-js](https://github.com/garycourt/uri-js).
* `images` All images on this page.
* `images` All links on this page.
* `meta` All the meta tags that with a `property` or `name` attribute. e.g `<meta property="og:title" content="Yahoo">`, `<meta name="description" content="A new welcome to Yahoo.">`

## Tests

```
$ npm install -g mocha
```

```
npm test
```

### License (MIT)

```
Copyright (c) 2014 Jim Liu <junminliu@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

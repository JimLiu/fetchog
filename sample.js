var fetchog     = require('./index');

fetchog.fetch('http://www.yahoo.com', function(err, meta) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('title: ', meta.title);
  console.log('description: ', meta.description);
  console.log('image: ', meta.image);
  console.log('url: ', meta.url);
});

/* output

title:  Yahoo
description:  A new welcome to Yahoo. The new Yahoo experience makes it easier to discover the news and information that you care about most. It's the web ordered for you.
image:  https://s.yimg.com/dh/ap/default/130909/y_200_a.png
url:  https://www.yahoo.com/
*/
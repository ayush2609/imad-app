var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var article1 ={
    title: 'Article 1.',
    heading: 'Article 1',
    date: 'August 4,2017',
    content: `<p>
                    this is content.
                </p>
            
                <p>
                    this is content.
                </p>
           
                <p>
                    this is content.
                </p>
            
                <p>
                    this is content.
                </p>`
};
function createtemplate(data) {
    var date= data.date;
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate=
                        `<!DOCTYPE html>
                        <html>
                            <head>
                                <title>
                                    ${title}
                                </title>
                        <link href="/ui/style.css" rel="stylesheet" />
                            </head>
                            <body>
                                <div class="container">
                                    <div>
                                        <h3> ${heading}</h3>
                                    </div>
                                    <div> <h3> ${date}</h3>
                                    </div>
                                    <div>
                                        ${content}
                                    </div>
                                </div>
                            </body>
                        </html>`
                        ;

        return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleone', function (req, res) {
  res.send(createtemplate(article1));
});
app.get('/article2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});
app.get('/article3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

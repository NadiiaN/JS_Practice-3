var fs = require('fs')

fs.appendFile('open.txt', 'Hello, world!', function (err) {
    if(err) throw err;
    console.log('Saved!');
});
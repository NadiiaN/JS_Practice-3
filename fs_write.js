var fs = require('fs')

fs.writeFile('open.txt', 'Hello, world! Welcome to JS!', function (err) {
    if(err) throw err;
    console.log('Saved!');
});
const newman = require('newman');
require('dotenv').config();
 
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:`https://api.postman.com/collections/31247750-efa3bc34-ae55-4284-a5f2-3a9063dc46d6?access_key=${process.env.SecrectKey
}`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
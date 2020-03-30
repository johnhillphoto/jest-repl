const https = require('https');

const downloader = () => {
    return new Promise((resolve, reject) => {
        https.get(
            'https://gitlab.com/goldsziggy/code-challenges/-/raw/master/ipsum.txt',
            resp => {
                let data = '';
                resp.on('data', chunk => {
                    data += chunk;
                });
                resp.on('end', () => {
                    resolve(data);
                });
                resp.on('error', err => {
                    reject(err);
                });
            }
        );
    });
};

const loremIpsum = async () => {
    let data = await downloader();
    data = data.replace(/\n|\;|\,|\./g, ' ').toLowerCase();
    const wordArray = data.split(' ');
    const collectionObject = {};

    wordArray.forEach(word => {
        if (!collectionObject[word]) {
            collectionObject[word] = 1;
        } else {
            collectionObject[word] = collectionObject[word] + 1;
        }
    });

    Object.keys(collectionObject).forEach(word => {
        if (collectionObject[word] > 1) {
            delete collectionObject[word];
        }
    });

    return Object.keys(collectionObject)[0];
};

module.exports = { loremIpsum };

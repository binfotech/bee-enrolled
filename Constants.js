const config = require('./config');

module.exports = {
    width: '1440px',
    BASE_URL: config.BASE,
    API_BASE_URL: config.BASE,
    HOST_NAME: config.HOST_NAME,
    ACCESS_TOKEN_SECRET: 'uzHRea3v0c79',
    CERT: {
        path: '..',
        cert: 'ssl.cert',
        key: 'ssl.key',
        ca: 'ssl.ca'
    },
    SOCIAL_URL: [
        {name:'Facebook',url:'#'},
        {name:'Twitter',url:'#'},
        {name:'LinkedIn',url:'#'},
        {name:'Instagram',url:'#'}
    ]
}
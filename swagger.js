const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Contacts API',
      version: '0.0.1',
      description: 'REST CONTACTS API (WDD341) FINAL PROJECT'
    },
    host: 'cse341-team6-project-v2.onrender.com',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
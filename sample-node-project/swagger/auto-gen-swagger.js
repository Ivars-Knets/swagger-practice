import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: 'v1.0.0',
    title: 'Sample Node Projects API',
    description: 'API routes found in sample-node-project. This is made as a practice for "Swagger API Documentation" training. Made by Ivars Knets.'
  },
  host: `localhost:${process.env.PORT || 3000}/api/v1`,
  basePath: '/',
  schemes: ['http', 'https'],
};

const outputFile = './swaggerDocument_basic.json';
const endpointsFiles = ['routes/patientRouter.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
const userResolver = require('./user');
const taskResolver = require('./task');
const geckoResolver = require('../../../Documents/NorthernHerpWorkApp/resolvers/gecko');
const breedResolver = require('../../../Documents/NorthernHerpWorkApp/resolvers/breed');

module.exports = [
  userResolver,
  taskResolver,
  geckoResolver,
  breedResolver,
];
const conditions = require('./conditions');

const api = {
  conditions: (request, response) => {
    response.json(conditions);
  },
};

module.exports.api = api;

module.exports = app => {
  app.get('/api/conditions', api.conditions);
};

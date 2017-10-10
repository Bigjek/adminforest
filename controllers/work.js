const http = require('request');

const apiOptions = {
  server: "http://localhost:3000"
}

module.exports.getWorkpage = function (req, res) {
  const pathAPI = '/api/work';
  const requestOptions = {
    url: apiOptions.server + pathAPI,
    method: 'GET',
    json: {}
  };
  const sendObj = {
    title: 'My Work'
  };
  http(requestOptions, function (error, response, body) {
    res.render('pages/works', Object.assign(sendObj, body));
  })

}
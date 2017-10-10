const http = require('request');

const apiOptions = {
  server: "http://localhost:3000"
}

module.exports.getAboutpage = function (req, res) {
  const pathAPI = '/api/about';
  const requestOptions = {
    url: apiOptions.server + pathAPI,
    method: 'GET',
    json: {}
  };
  const sendObj = {
    title: 'My About'
  };
  http(requestOptions, function (error, response, body) {
    res.render('pages/about', Object.assign(sendObj, body));
  })

}
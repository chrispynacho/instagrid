var express = require('express');
var request = require('superagent');
var router = express.Router();
var dash = require('lodash');

var clientId = 'd35bd9e9f2c74638b038c148e3087643';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Instagrid' });
});

router.get('/images', function(req, res) {
  console.log('request.query: ', req && req.query || {});

  if (!dash.has(req.query, 'lat') && !dash.has(req.query, 'lat')) {
    res.send(404, 'Requires lat and lng query params please.');
    return;
  }

  instagramGeoSearch(req.query.lat, req.query.lng, function(err, data) {
    if (err) return res.send(500, err || "Couldn't get image data from Instagram.");
    res.send(data);
  });

});

function instagramGeoSearch(lat, long, callback) {
  var url = 'https://api.instagram.com/v1/media/search?client_id=' + clientId +
    '&lat=' + lat +
    '&lng=' + long;
  console.log('url', url);
  request
    .get(url)
    .end(function(err, data) {
      if (data && data.body.data) {
        var imageData = dash.map(data.body.data, function(img) {
          return {
            id: img.id || 0,
            likesCount: img.likes && img.likes.count || 0,
            locationName: img.location && img.location.name || '',
            thumbnail: img.images && img.images.thumbnail && img.images.thumbnail.url || '',
            url: img.images && img.images.standard_resolution && img.images.standard_resolution.url || '',
            user: img.user || {}
          };
        });
        console.log('imageData:', imageData);
        callback(null, imageData);
      } else {
        callback(err, data);
      }
    });
};

module.exports = router;

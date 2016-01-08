var app = angular.module('preseed', ['ngAnimate', 'mgcrea.ngStrap', 'hljs']);

app.controller('preseedController', function ($scope, $http) {


  $http.get('datasets/locale.json').success(function (data) {
    $scope.selectOptions.locales = data.locales;
    $scope.selectOptions.charmaps = data.charmaps;
    var languages = [];
    $scope.selectOptions.locales.forEach(function (locale) {
      var part = locale.split('_');
      languages.push(part[0]);
    });
    $scope.selectOptions.languages = $.unique(languages);
  });

  $http.get('datasets/country-codes.json').success(function (data) {
    $scope.selectOptions.countrycodes = data;
  });

  $http.get('datasets/keymaps.json').success(function (data) {
    $scope.selectOptions.keymaps = data;
  });


  $scope.preseedData = {
    'locale': {
      'language': 'en',
      'country': 'US',
      'locale': 'en_US',
      'charmap': 'UTF-8',
      'extra': []
    },
    'keyboard': {
      'keymap': 'us'
    }
  };
  $scope.selectOptions = {
    'locales': [],
    'charmaps': [],
    'countrycodes': [],
    'languages': [],
    'keymaps': []
  }
});
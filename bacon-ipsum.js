angular.module('baconIpsum', []);
angular.module('baconIpsum')
  .factory('bacon', function($http, $q) {
    return {
      get: function(options) {
        var delay = $q.defer();
        var obj = {
          type: options.type || 'meat-and-filler',
          paras: options.paras,
          sentences: options.sentences || null,
          startWithLorem: options.startWithLorem || null,
          format: options.format || 'json'
        };
        var queryString = '';
        for (var prop in obj) {
          if (obj[prop] !== null) {
            queryString += '?' + prop + '=' + obj[prop];
          }
        }
        $http.get('https://baconipsum.com/api/' + queryString)
          .success(function(data) {
            delay.resolve(data);
          });

        return delay.promise;
      }
    };
  })
  .directive('baconIpsum', function(bacon) {
    return {
      template: '<p ng-repeat="item in baconIpsum">{{item}}</p>',
      link: function($scope, elem, attrs) {
        var options = {
          type: attrs.type || "all-meat",
          paras: attrs.paras || null,
          sentences: attrs.sentences || null,
          startWithLorem: attrs.startWithLorem || null,
          format: attrs.format || null
        };
        bacon.get(options).then(function(data) {
          $scope.baconIpsum = data;
        });
      }
    }
  });
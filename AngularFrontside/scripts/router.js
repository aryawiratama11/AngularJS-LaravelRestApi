var app = angular.module('Client',['ngResource','ngRoute']);
app.config(["$routeProvider", '$locationProvider', function($routeProvider,$locationProvider) {

// $locationProvider.hashPrefix('');
 // $locationProvider.html5Mode(true);

    $routeProvider.
      when('/notes', {
          templateUrl: 'views/note/index.html',
          controller: 'NoteController'
      }).when('/notes/new', {
          templateUrl: 'views/note/new.html',
          controller: 'CreateNoteController'
      }).
      otherwise({
          redirectTo: '/'
      });

}]);

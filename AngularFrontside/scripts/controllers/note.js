app.controller("NoteController", function($scope, NoteResource){

  $scope.Note=NoteResource.query();
  console.log($scope.Note);
});

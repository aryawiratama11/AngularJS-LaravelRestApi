app.controller("CreateNoteController", function($scope, NoteResource){
  $scope.title="Add note";
  $scope.button="Submit";
  $scope.Note={};
  $scope.saveNote = function(){
     //console.log($scope.Note);
     NoteResource.save($scope.Note);

  };
});

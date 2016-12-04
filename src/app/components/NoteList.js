angular
  .module('app')
  .component('noteList', {
    templateUrl: 'app/components/NoteList.html',
    controller: List,
    bindings: {
      notes: '<',
      confirmWindow: '<',
      isLoading: '<'
    }
  });

function List(Notes, $state) {
  var $ctrl = this;

  $ctrl.confirmWindow = {
    isVisible: false,
    title: 'REMOVE_CONFIRMATION_MESSAGE'
  };

  $ctrl.isLoading = true;
  Notes.query(function (notes) {
    $ctrl.notes = notes;
    $ctrl.isLoading = false;
  });

  $ctrl.handleRemove = function (note) {
    $ctrl.confirmWindow.isVisible = true;
    $ctrl.confirmWindow.confirmAction = function () {
      $ctrl.confirmWindow.isVisible = false;
      $ctrl.isLoading = true;
      note.$remove(function () {
        $ctrl.notes = _.reject($ctrl.notes, function (item) {
          return item.id === note.id;
        });
        $ctrl.isLoading = false;
      });
    };
  };

  $ctrl.goToAddNote = function () {
    $state.go('addNote');
  };
}

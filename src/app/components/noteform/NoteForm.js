(function () {
  'use strict';

  angular
    .module('app')
    .component('noteForm', {
      templateUrl: 'app/components/noteform/NoteForm.html',
      controller: Form,
      bindings: {
        note: '=',
        isEdit: '<',
        isLoading: '<'
      }
    });

  function Form(Notes, $state, $stateParams) {
    var $ctrl = this;

    $ctrl.isEdit = $stateParams.noteId > -1;

    if ($ctrl.isEdit) {
      $ctrl.isLoading = true;
      Notes.get({noteId: $stateParams.noteId}, function (note) {
        $ctrl.note = note;
        $ctrl.isLoading = false;
      });
    } else {
      $ctrl.note = new Notes();
      $ctrl.isLoading = false;
    }

    $ctrl.saveNote = function () {
      $ctrl.note[$ctrl.isEdit ? '$update' : '$save'](function () {
        $ctrl.goToList();
      });
    };

    $ctrl.goToList = function () {
      $state.go('noteList');
    };
  }
})();

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
    $ctrl.saveNote = saveNote;
    $ctrl.goToList = goToList;

    if ($ctrl.isEdit) {
      $ctrl.isLoading = true;
      Notes.get({noteId: $stateParams.noteId}, onNoteLoad);
    } else {
      $ctrl.note = new Notes();
      $ctrl.isLoading = false;
    }

    function onNoteLoad(note) {
      $ctrl.note = note;
      $ctrl.isLoading = false;
    }

    function goToList() {
      $state.go('noteList');
    }

    function saveNote() {
      $ctrl.note[$ctrl.isEdit ? '$update' : '$save'](function () {
        $ctrl.goToList();
      });
    }
  }
})();

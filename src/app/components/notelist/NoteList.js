(function () {
  'use strict';

  angular
    .module('app')
    .component('noteList', {
      templateUrl: 'app/components/notelist/NoteList.html',
      controller: List,
      bindings: {
        notes: '<',
        confirmWindow: '<',
        isLoading: '<'
      }
    });

  function List(Notes, $state) {
    var $ctrl = this;

    function onLoad(notes) {
      $ctrl.notes = notes;
      $ctrl.isLoading = false;
    }

    function onRemoveNote() {
      Notes.query(onLoad);
    }

    function confirmAction(note) {
      $ctrl.confirmWindow.isVisible = false;
      $ctrl.isLoading = true;
      note.$remove(onRemoveNote);
    }

    $ctrl.confirmWindow = {
      isVisible: false,
      title: 'REMOVE_CONFIRMATION_MESSAGE'
    };

    $ctrl.goToAddNote = function () {
      $state.go('addNote');
    };

    $ctrl.handleRemove = function (note) {
      $ctrl.confirmWindow.isVisible = true;
      $ctrl.confirmWindow.confirmAction = angular.bind($ctrl, confirmAction, note);
    };

    $ctrl.isLoading = true;
    Notes.query(onLoad);
  }
})();

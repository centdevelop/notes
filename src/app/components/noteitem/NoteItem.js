(function () {
  'use strict';

  angular
    .module('app')
    .component('noteItem', {
      templateUrl: 'app/components/noteitem/NoteItem.html',
      controller: Item,
      bindings: {
        note: '<',
        onRemove: '&'
      }
    });

  function Item($state) {
    var $ctrl = this;

    $ctrl.goToEditNote = function (note) {
      $state.go('editNote', {noteId: note.id});
    };
  }
})();

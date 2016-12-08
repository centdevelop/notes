(function () {
  'use strict';

  angular
    .module('app')
    .component('confirmWin', {
      templateUrl: 'app/components/confirmation/Confirmation.html',
      controller: Confirmation,
      bindings: {
        title: '<',
        isVisible: '=',
        onConfirm: '&'
      }
    });

  function Confirmation() {
    var $ctrl = this;

    $ctrl.close = close;

    function close() {
      $ctrl.isVisible = false;
    }
  }
})();

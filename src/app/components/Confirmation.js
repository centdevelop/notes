(function () {
  'use strict';

  angular
    .module('app')
    .component('confirmWin', {
      templateUrl: 'app/components/Confirmation.html',
      controller: Confirmation,
      bindings: {
        title: '<',
        isVisible: '=',
        onConfirm: '&'
      }
    });

  function Confirmation() {
    var $ctrl = this;

    $ctrl.close = function () {
      $ctrl.isVisible = false;
    };
  }
})();

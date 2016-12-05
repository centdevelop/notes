(function () {
  'use strict';

  angular
    .module('app')
    .config(routesConfig);

  /** @ngInject */
  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('noteList', {
        url: '/',
        component: 'noteList'
      });

    $stateProvider
      .state('addNote', {
        url: '/!/add',
        component: 'noteForm'
      });

    $stateProvider
      .state('editNote', {
        url: '/!/:noteId/edit',
        component: 'noteForm'
      });
  }
})();

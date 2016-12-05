angular
  .module('app')
  .component('headerComponent', {
    templateUrl: 'app/components/Header.html',
    controller: Header,
    bindings: {
      availableLanguages: '<',
      languageModel: '<'
    }
  });

function Header($translate) {
  var $ctrl = this;

  $ctrl.availableLanguages = {
    en: 'ENGLISH',
    ru: 'RUSSIAN'
  };
  $ctrl.languageModel = {selected: 'en'};

  $ctrl.changeLanguage = function (key) {
    $translate.use(key);
  };
}

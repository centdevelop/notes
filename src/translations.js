angular
  .module('app')
  .config(translationsConfig);

function translationsConfig($translateProvider) {
  $translateProvider.translations('en', {
    LANGUAGE: 'Language',
    ENGLISH: 'English',
    RUSSIAN: 'Russian',
    REMOVE: 'Remove',
    SAVE: 'Save',
    ADD: 'Add',
    EDIT: 'Edit',
    CANCEL: 'Cancel',
    RETURN: 'Return',
    CONFIRM: 'Confirm',
    NOTE: 'Note',
    NOTES_LIST: 'Notes list',
    ADD_NOTE: 'Add note',
    EDIT_NOTE: 'Edit note',
    REMOVE_CONFIRMATION_MESSAGE: 'Really delete the note?'
  });
  $translateProvider.translations('ru', {
    LANGUAGE: 'Язык',
    ENGLISH: 'Английский',
    RUSSIAN: 'Русский',
    REMOVE: 'Удалить',
    SAVE: 'Сохранить',
    ADD: 'Добавить',
    EDIT: 'Редактировать',
    CANCEL: 'Отменить',
    RETURN: 'Вернуться',
    CONFIRM: 'Подтвердить',
    NOTE: 'Запись',
    NOTES_LIST: 'Список записей',
    ADD_NOTE: 'Добавить запись',
    EDIT_NOTE: 'Изменить запись',
    REMOVE_CONFIRMATION_MESSAGE: 'Вы действительно хотите удалить запись?'
  });
  $translateProvider.preferredLanguage('en');
}

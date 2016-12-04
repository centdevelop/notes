angular
  .module('app')
  .factory('Notes', ['$resource', Notes]);

function Notes($resource) {
  return $resource(
    'http://private-9aad-note10.apiary-mock.com/notes/:noteId',
    {
      noteId: '@id'
    },
    {
      update: {method: 'PUT'}
    }
  );
}

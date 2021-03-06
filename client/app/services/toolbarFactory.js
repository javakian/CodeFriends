/*global angular:true*/
(function () {
  'use strict';

  angular.module('codeFriends.services')
    .factory('ToolbarFactory', ToolbarFactory);

  ToolbarFactory.$inject = ['$rootScope'];

  function ToolbarFactory($rootScope) {

    var factory = {
      theme: 'default',
      changeTheme: changeTheme
    };
    return factory;

    function changeTheme(theme) {
      ToolbarFactory.theme = theme;
      $rootScope.$broadcast('theme:changed', theme);
      $rootScope.$emit('theme:changed', theme);
    }

  }

})();
'use strict';

angular.module('angular-hover-spy-example')
  .controller('CustomHandlerExampleCtrl', [
    '$rootScope',
    '$scope',
    function ($rootScope, $scope) {
      console.log($rootScope.$$listeners);
      $scope.message = 'I mirror the other elements hover effects!';
      $rootScope.$on('abramz.custom-handler:hover-spy-mouseenter', function () {
        $scope.message = 'You have to be really fast to see this!!';
      });

      $rootScope.$on('abramz.custom-handler:hover-spy-mouseenter-handled', function () {
        $scope.message = 'See how this message changed when you hovered over the other element?';
      });

      $rootScope.$on('abramz.custom-handler:hover-spy-mouseleave', function () {
        $scope.message = 'You have to be really fast to see this!!';
      });

      $rootScope.$on('abramz.custom-handler:hover-spy-mouseleave-handled', function () {
        $scope.message = 'I mirror the other elements hover effects!';
      });

    }
  ]);

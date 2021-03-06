'use strict';

angular.module('angular-hover-spy-example')
  .controller('CustomHandlerExampleCtrl', [
    '$rootScope',
    '$scope',
    function ($rootScope, $scope) {
      $scope.message = 'I mirror the other elements hover effects!';
      $rootScope.$on('custom-handler:abramz.hover-spy-mouseenter', function () {
        $scope.message = 'You have to be really fast to see this!!';
      });

      $rootScope.$on('custom-handler:abramz.hover-spy-mouseenter-handled', function () {
        $scope.message = 'See how this message changed when you hovered over the other element?';
      });

      $rootScope.$on('custom-handler:abramz.hover-spy-mouseleave', function () {
        $scope.message = 'You have to be really fast to see this!!';
      });

      $rootScope.$on('custom-handler:abramz.hover-spy-mouseleave-handled', function () {
        $scope.message = 'I mirror the other elements hover effects!';
      });

    }
  ]);

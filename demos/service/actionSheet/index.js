---
name: takeAction
component: $ionicActionSheet
---
angular.module('takeAction', ['ionic'])
.controller('ActionSheetCtrl', function($scope, $ionicActionSheet) {
  $scope.messages = [];
  $scope.takeAction = function() {
    $ionicActionSheet.show({
      buttons: [
        { text: 'Share <i class="icon ion-share">' },
        { text: 'Edit <i class="icon ion-edit">' }
      ],
      destructiveText: 'Delete <i class="icon ion-trash-b">',
      titleText: 'Modify your album',
      cancelText: 'Cancel',
      cancel: function() {
        $scope.action_static('Cancel');
        return true;
      },
      buttonClicked: function(index) {
        $scope.action_static(index === 0 ? 'Share' : 'Edit');
        return true;
      },
      destructiveButtonClicked: function() {
        $scope.action_static('Delete');
        return true;
      }
    });
  };
  $scope.action_static = function(msg) {
    $scope.messages.unshift({
      text: 'User pressed ' + msg
    });
  };
});

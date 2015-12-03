'use strict';

exports.DialogBottomCtrl = function ($scope, $mdDialog, $mdSidenav) {
    $scope.showConfirm = function (ev) {
        var confirm = $mdDialog.confirm()
            .title('Example of a Dialog')
            .content('Did you notice that it grew out of the button?')
            .ok('YES!')
            .cancel('Maybe I should do it again')
            .targetEvent(ev);
        $mdDialog.show(confirm).then(function () {
            $scope.alert = 'You decided to get rid of your debt.';
        }, function () {
            $scope.alert = 'You decided to keep your debt.';
        });
    };
    $scope.toggleLeft = function () {
        $mdSidenav('left').toggle();
    };
};

exports.ButtonCtrl = function ($scope) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;
    $scope.googleUrl = 'http://google.com';
};

exports.AppCtrl = function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = function () {
        $mdSidenav('left').toggle();
    };

    $scope.items = [1, 2, 3, 4, 5];
    $scope.selected = [];

    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
    };

    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
};

exports.LeftCtrl = function ($scope, $timeout, $mdSidenav) {
    $scope.close = function () {
        $mdSidenav('left').open();
    };
};

exports.BottomSheetExample = function ($scope, $timeout, $mdBottomSheet) {
    $scope.alert = '';
    $scope.showListBottomSheet = function ($event) {
        $scope.alert = '';
        var promise = $mdBottomSheet.show({
            templateUrl: 'features/material-demo/bottom-sheet-list-template.html',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        });
        console.log("promise: ", promise);
        promise.then(function (clickedItem) {
            console.log("showBottomSheet");
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };
};

exports.ListBottomSheetCtrl = function ($scope, $mdBottomSheet) {
    $scope.items = [
        {name: 'Share', icon: 'share'},
        {name: 'Upload', icon: 'upload'},
        {name: 'Copy', icon: 'copy'},
        {name: 'Print this page', icon: 'print'}
    ];
    $scope.listItemClick = function ($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
};

exports.ButtonsDemo1Ctrl = function ($scope) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;
    $scope.googleUrl = 'http://google.com';
};

exports.CheckboxDemo1Ctrl = function ($scope) {

    $scope.items = [1, 2, 3, 4, 5];
    $scope.selected = [];

    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
    };

    $scope.truthy;

    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
};



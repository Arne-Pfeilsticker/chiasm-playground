'use strict';

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

exports.RadioButtondemoBasicUsageCtrl = function ($scope) {

    $scope.data = {
        group1: 'Banana',
        group2: '2',
        group3: 'avatar-1'
    };

    $scope.avatarData = [{
        id: "avatars:svg-1",
        title: 'avatar 1',
        value: 'avatar-1'
    }, {
        id: "avatars:svg-2",
        title: 'avatar 2',
        value: 'avatar-2'
    }, {
        id: "avatars:svg-3",
        title: 'avatar 3',
        value: 'avatar-3'
    }];

    $scope.radioData = [
        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '3', value: '3', isDisabled: true},
        {label: '4', value: '4'}
    ];


    $scope.submit = function () {
        alert('submit');
    };

    $scope.addItem = function () {
        var r = Math.ceil(Math.random() * 1000);
        $scope.radioData.push({label: r, value: r});
    };

    $scope.removeItem = function () {
        $scope.radioData.pop();
    };

};

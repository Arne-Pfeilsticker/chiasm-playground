'use strict';

module.exports = function($state, mdThemeColors) {
    /* jshint validthis: true */
    var vm = this;
    vm.notesCollapsed = true;
    vm.navigate = navigate;
    vm.activate = activate;
    vm.mdThemeColors = mdThemeColors;

    activate();

    ////////////////

    function activate() {
        console.log('current state data', $state.current.data);
    }

    function navigate() {
        $state.go('persontypes');
    }
};

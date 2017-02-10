(function () {
    'use strict';

    angular
        .module('wmApp')
        .service('RoteadorService', RoteadorService);

    /* @ngInject */
    function RoteadorService($state) {
        this.roteadorSpa = roteadorSpa;

        function roteadorSpa(state) {
            $state.go(state)
        }
    }

})();


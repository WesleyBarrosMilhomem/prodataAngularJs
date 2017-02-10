(function () {
    'use strict';

    angular
        .module('wmApp')
        .controller('IndexControle', IndexControle);

    /* @ngInject */
    function IndexControle($rootScope,RoteadorService) {
        var vm = this;

        $rootScope.listaPessoa = [];
        $rootScope.pessoa = {};

        vm.inicio = inicio;

        inicio();
        function inicio() {
            RoteadorService.roteadorSpa('pesquisarPessoa');
        }
    }

})();


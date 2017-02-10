(function () {
    'use strict';

    angular.module('wmApp')
        .config(ConfigurarRotas);

    /* @ngInject */
    function ConfigurarRotas($stateProvider) {
        const pesquisarPessoa = {
            name:'pesquisarPessoa',
            url:'/pesquisarPessoa',
            templateUrl:'app/views/pessoa/pesquisar-pessoa.html',
            resolve:{
                carregarControle: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/pessoa/pesquisar-pessoa.controle.js');
                }
            }
        };

        const cadastrarPessoa = {
            name:'cadastrarPessoa',
            url:'/cadastrarPessoa',
            templateUrl:'app/views/pessoa/cadastrar-pessoa.html',
            resolve:{
                carregarControle: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/pessoa/cadastrar-pessoa.controle.js');
                }
            }
        };

        $stateProvider
            .state('pesquisarPessoa',pesquisarPessoa)
            .state('cadastrarPessoa',cadastrarPessoa);
    }
})();
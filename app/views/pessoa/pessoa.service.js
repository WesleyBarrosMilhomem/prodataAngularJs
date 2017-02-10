(function () {
    'use strict';

    angular
        .module('wmApp')
        .service('PessoaService', PessoaService);

    /* @ngInject */
    function PessoaService($rootScope,$http,$q,RoteadorService) {
        this.novo= novo;
        this.salvar = salvar;
        this.editar = editar;
        this.excluir = excluir;
        this.pesquisaCep = pesquisaCep;
        this.validarAntesSalvar = validarAntesSalvar;

        function novo() {
            $rootScope.pessoa = {};
        }

        function validarAntesSalvar($scope) {
            if ($scope.formCadastro.$invalid) {

                angular.forEach($scope.formCadastro.$error, function (errorField) {
                    for (var i = 0; i < errorField.length; i++) {
                        errorField[i].$setUntouched();
                    }
                });

                return;
            }
            salvar();
            RoteadorService.roteadorSpa('pesquisarPessoa');
        }

        function salvar($scope) {

            $rootScope.listaPessoa.push($rootScope.pessoa);
            novo();
        }

        function editar(index) {
            $rootScope.pessoa = $rootScope.listaPessoa[index];
        }

        function excluir() {
            $rootScope.listaPessoa.splice($rootScope.listaPessoa.indexOf($rootScope.pessoa),1);
        }

        function pesquisaCep() {
            if ($rootScope.pessoa.cep === undefined
                || $rootScope.pessoa.cep.trim() === ''){
                return;
            }

            var promisse = executarBuscaCep($rootScope);

            promisse
                .then(montarEndereco, mostrarErro);
        }

        function montarEndereco(data) {
            $rootScope.pessoa.cep = data.cep;
            $rootScope.pessoa.endereco = data.logradouro;
            $rootScope.pessoa.bairro = data.bairro;
            $rootScope.pessoa.cidade = data.cidade;
            $rootScope.pessoa.estado = data.estado;
        }

        function mostrarErro(rejection) {
            window.alert('Erro ao buscar cep! '+rejection.message);
        }


        function executarBuscaCep($rootScope) {
            var deferred = $q.defer();
            $http.get('http://api.postmon.com.br/v1/cep/'+ $rootScope.pessoa.cep)
//            $http.get('https://viacep.com.br/ws/'+ $rootScope.pessoa.cep +'/json/')
                .then(resultado, falha);

            return deferred.promise;

            function resultado(response) {
                deferred.resolve(response.data);
            }

            function falha() {
                deferred.reject('Erro ao executar processamento');
            }
        }
    }

})();


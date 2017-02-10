(function () {
    'use strict';

    angular
        .module('wmApp')
        .controller('CadastrarPessoaControle', CadastrarPessoaControle);

    /* @ngInject */
    function CadastrarPessoaControle($scope,$rootScope,PessoaService,RoteadorService) {
        var vm = this;

        vm.sexo = [
            {valor: 'M', descricao: 'Masculino'},
            {valor: 'F', descricao: 'Feminino'}
        ];

        vm.novo = novo;
        vm.salvar = salvar;
        vm.excluir = excluir;
        vm.pesquisar = pesquisar;
        vm.pesquisaCep = pesquisaCep;
        vm.navegarSpa = navegarSpa;

        function novo() {
            PessoaService.novo();
        }

        function salvar() {
            PessoaService.validarAntesSalvar($scope);
        }

        function excluir() {
            PessoaService.excluir();
            navegarSpa();
        }

        function pesquisar() {
            navegarSpa();
        }

        function pesquisaCep() {
            PessoaService.pesquisaCep();
        }

        function navegarSpa() {
            RoteadorService.roteadorSpa('pesquisarPessoa');
        }
    }

})();


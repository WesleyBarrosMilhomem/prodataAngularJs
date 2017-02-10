(function () {
    'use strict';

    angular
        .module('wmApp')
        .controller('PesquisarPessoaControle', PesquisarPessoaControle);

    /* @ngInject */
    function PesquisarPessoaControle($rootScope,PessoaService,RoteadorService) {
        var vm = this;

        $rootScope.gridPessoas = {
            data:'listaPessoa',
            enableColumnMenus: false,
            enableRowSelection: true,
            columnDefs: [
                {name:'Nome', field:'nome', cellFilter:'uppercase'},
                {name:'Sobrenome', field:'sobrenome', cellFilter:'uppercase'},
                {name:'Sexo', field:'sexo', width:60},
                {name:'Nascimento', field:'dataNascimento', cellFilter: 'date:"dd/MM/yyyy"'},
                {
                    name:'Opções',
                    width:70,
                    field:'editar',
                    cellTemplate: 'app/template/cell-template-editar.html',
                    onClick:editar

                }
            ]
        };

        vm.novo = novo;
        vm.navegarSpa = navegarSpa;
        vm.editar = editar;

        function novo() {
            PessoaService.novo();
            navegarSpa();
        }

        function editar(index) {
            PessoaService.editar(index);
            navegarSpa();
        }

        function navegarSpa() {
            RoteadorService.roteadorSpa('cadastrarPessoa');
        }

    }

})();


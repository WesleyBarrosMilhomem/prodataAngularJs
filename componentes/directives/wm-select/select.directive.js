(function () {
    'use strict';

    angular
        .module('wmApp')
        .directive('wmSelect', wmSelect);

    /* @ngInject */
    function wmSelect() {
        var directive = {
            restrict: 'E',
            require:'^form',
            templateUrl:'componentes/directives/wm-select/select.html',
            scope: {
                label: '@',
                ngModel: '=',
                ngRequired: '=',
                colspan: '@',
                provider: '=',
                selectValor:'@',
                selectDescricao:'@'
            },
            link: link
        };
        return directive;

        function link($scope, element, attrs, formCtrl) {
            $scope.formCtrl = formCtrl;

            $scope.selectValor = $scope.selectValor || 'valor';
            $scope.selectDescricao = $scope.selectDescricao || 'descricao';

            $scope.classColspan = 'col-md-' + ($scope.colspan || 3);

            $scope.inputName = 'pdSelect' + $scope.$id;

        }
    }

})();


(function () {
    'use strict';

    angular
        .module('wmApp')
        .directive('wmInputText', wmInputText);

    /* @ngInject */
    function wmInputText() {
        var directive = {
            restrict: 'E',
            require:'^form',
            templateUrl:'componentes/directives/wm-input-text/input-text.html',
            scope: {
                label:'@',
                ngModel:'=',
                ngRequired:'=',
                ngBlur: '&',
                tipo: '@',
                colspan:'@'
            },
            link: link
        };
        return directive;

        function link($scope, element, attrs, formCtrl) {

            $scope.formCtrl = formCtrl;
            $scope.inputName = 'inputName'+ $scope.$id;
            $scope.classColspan = 'col-md-'+ ($scope.colspan || 3);
            $scope.tipo = ($scope.tipo || 'text');

        }
    }

})();


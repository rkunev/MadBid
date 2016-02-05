( function() {
    'use strict';

    angular
        .module( 'madBid' )
        .controller( 'MainController', MainController );

    /** @ngInject */
    function MainController( $timeout, toastr, productsService ) {
        var vm = this;

        vm.watches = [];

        vm.creationDate = 1454663156769;
        vm.showToastr = showToastr;
        vm.productBid = productBid;

        activate();

        function activate() {
            getProducts();
        }

        function showToastr() {
            toastr.info( 'Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>' );
        }

        function getProducts() {
            vm.watches = productsService.getProducts();
        }

        function productBid( watch ) {
            watch.price = productsService.updatePrice( watch.price );
            console.log( watch.price );
            watch.winner = productsService.getRandomWinner();
        }
    }
} )();

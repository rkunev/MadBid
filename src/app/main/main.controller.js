( function() {
    'use strict';

    angular
        .module( 'madBid' )
        .controller( 'MainController', MainController );

    /** @ngInject */
    function MainController( productsService, usersService ) {
        var vm = this;

        vm.creationDate = 1454663156769;

        vm.products = [];
        vm.availableProducts = [];
        vm.currentProduct = {};

        vm.productBid = productBid;
        vm.changeProductList = changeProductList;

        activate();

        function activate() {
            getProducts();
            changeProductList();
        }

        function changeProductList() {
            vm.products = productsService.getProducts( vm.currentProduct.id );
        }

        function getProducts() {
            vm.availableProducts = productsService.getProductCategories();
            vm.currentProduct = productsService.getDefaultProduct();
        }

        function productBid( product ) {
            product.price = productsService.updatePrice( product.price );
            product.winner = usersService.getRandomWinner();
        }
    }
} )();

( function() {
    'use strict';

    angular
        .module( 'madBid' )
        .service( 'productsService', productsService );

    /** @ngInject */
    function productsService() {
        var service = {
            getProducts: getProducts,
            getProductCategories: getProductCategories,
            getWatches: getWatches,
            updatePrice: updatePrice,
            getDefaultProduct: getDefaultProduct
        };

        var watches = [ {
            'title': 'Movado Men\'s',
            'winner': '',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'price': 1,
            'thumb': 'mm.jpg'
        }, {
            'title': 'Fitbit Charge',
            'winner': '',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, dolorem.',
            'price': 1.15,
            'thumb': 'fc.jpg'
        }, {
            'title': 'Ingersoll Mens',
            'winner': '',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            'price': 3.33,
            'thumb': 'im.jpg'
        } ];

        var techs = [ {
            'title': 'Jasmine',
            'winner': '',
            'description': 'Behavior-Driven JavaScript.',
            'price': 1,
            'thumb': 'jasmine.png'
        }, {
            'title': 'Karma',
            'winner': '',
            'description': 'Spectacular Test Runner for JavaScript.',
            'price': 1,
            'thumb': 'karma.png'
        }, {
            'title': 'Protractor',
            'winner': '',
            'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
            'price': 1,
            'thumb': 'protractor.png'
        }, {
            'title': 'Bootstrap',
            'winner': '',
            'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
            'price': 1,
            'thumb': 'bootstrap.png'
        }, {
            'title': 'Angular UI Bootstrap',
            'winner': '',
            'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
            'price': 1,
            'thumb': 'ui-bootstrap.png'
        } ];

        var furniture = [];

        var productCategories = [ {
            id: '0',
            name: 'Watches'
        }, {
            id: '1',
            name: 'Technologies'
        }, {
            id: '2',
            name: 'Furniture'
        } ];
        var defaultProduct = {
            id: '0',
            name: 'Watches'
        };

        var products = [
            watches,
            techs,
            furniture
        ];

        return service;

        function getDefaultProduct() {
            return defaultProduct;
        }

        function getProducts( productId ) {
            return products[ productId ];
        }

        function getWatches() {
            return watches;
        }

        function getProductCategories() {
            return productCategories;
        }

        function updatePrice( currentPrice ) {
            var newPrice = parseFloat( currentPrice ) + 0.1;
            newPrice = newPrice.toFixed( 2 );

            return parseFloat( newPrice );
        }
    }

} )();

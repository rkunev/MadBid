( function() {
    'use strict';

    angular
        .module( 'madBid' )
        .service( 'productsService', productsService );

    /** @ngInject */
    function productsService() {
        var data = [ {
            'title': 'AngularJS',
            'winner': '',
            'description': 'HTML enhanced for web apps!',
            'price': 1,
            'thumb': 'angular.png'
        }, {
            'title': 'BrowserSync',
            'winner': '',
            'description': 'Time-saving synchronised browser testing.',
            'price': 1,
            'thumb': 'browsersync.png'
        }, {
            'title': 'GulpJS',
            'winner': '',
            'description': 'The streaming build system.',
            'price': 1,
            'thumb': 'gulp.png'
        }, {
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

        var winners = [ 'Harry', 'Ron', 'John', 'Bob', 'Smith', 'Martin' ];

        this.getProducts = getProducts;
        this.getRandomWinner = getRandomWinner;
        this.updatePrice = updatePrice;

        function getProducts() {
            return data;
        }

        function getRandomWinner() {
            return winners[ getRandomIntFromInterval( 0, winners.length - 1 ) ];
        }

        function updatePrice( currentPrice ) {
            var newPrice = parseFloat( currentPrice ) + 0.1;
            newPrice = newPrice.toFixed( 2 );

            return parseFloat( newPrice );
        }

        function getRandomIntFromInterval( min, max ) {
            return Math.floor( Math.random() * ( max - min + 1 ) + min );
        }
    }

} )();

( function() {
    'use strict';

    angular
        .module( 'madBid' )
        .service( 'usersService', usersService );

    /** @ngInject */
    function usersService() {
        var users = [ 'Harry', 'Ron', 'John', 'Bob', 'Smith', 'Martin' ];

        var service = {
            getRandomWinner: getRandomWinner
        };

        return service;

        function getRandomWinner() {
            var randomIndex = getRandomIntFromInterval( 0, users.length - 1 );

            return users[ randomIndex ];
        }

        function getRandomIntFromInterval( min, max ) {
            return Math.floor( Math.random() * ( max - min + 1 ) + min );
        }
    }

} )();

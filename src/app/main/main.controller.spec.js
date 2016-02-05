( function() {
    'use strict';

    describe( 'controllers', function() {
        var vm;

        beforeEach( module( 'madBid' ) );
        beforeEach( inject( function( _$controller_, ) {
            vm = _$controller_( 'MainController' );
        } ) );

        it( 'should have a timestamp creation date', function() {
            expect( vm.creationDate ).toEqual( jasmine.any( Number ) );
        } );

        it( 'should have a product list', function() {
            expect( angular.isArray( vm.products ) ).toBeTruthy();
        } );
    } );
} )();

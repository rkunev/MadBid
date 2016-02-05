( function() {
    'use strict';

    describe( 'directive navbar', function() {
        var vm;
        var el;
        var timeInMs;

        beforeEach( module( 'madBid' ) );
        beforeEach( inject( function( $compile, $rootScope ) {

            timeInMs = new Date();
            timeInMs = timeInMs.setHours( timeInMs.getHours() - 24 );

            el = angular.element( '<mad-navbar creation-date="' + timeInMs + '"></mad-navbar>' );

            $compile( el )( $rootScope.$new() );
            $rootScope.$digest();
            vm = el.isolateScope().vm;
        } ) );

        it( 'should be compiled', function() {
            expect( el.html() ).not.toEqual( null );
        } );

        it( 'should have isolate scope object with instanciate members', function() {
            expect( vm ).toEqual( jasmine.any( Object ) );

            expect( vm.creationDate ).toEqual( jasmine.any( Number ) );
            expect( vm.creationDate ).toEqual( timeInMs );

            expect( vm.relativeDate ).toEqual( jasmine.any( String ) );
            expect( vm.relativeDate ).toEqual( 'a day ago' );
        } );
    } );
} )();

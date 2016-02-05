( function() {
    'use strict';

    describe( 'service productsService', function() {
        var productsService;

        beforeEach( module( 'madBid' ) );
        beforeEach( inject( function( _productsService_ ) {
            productsService = _productsService_;
        } ) );

        it( 'should be registered', function() {
            expect( productsService ).not.toEqual( null );
        } );

        // describe('getTec function', function() {
        //   it('should exist', function() {
        //     expect(productsService.getTec).not.toEqual(null);
        //   });

        //   it('should return array of object', function() {
        //     var data = productsService.getTec();
        //     expect(data).toEqual(jasmine.any(Array));
        //     expect(data[0]).toEqual(jasmine.any(Object));
        //     expect(data.length > 5).toBeTruthy();
        //   });
        // });
    } );
} )();

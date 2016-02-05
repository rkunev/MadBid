( function() {
    'use strict';

    angular
        .module( 'madBid' )
        .config( config );

    /** @ngInject */
    function config( $logProvider ) {
        // Enable log
        $logProvider.debugEnabled( true );
    }

} )();

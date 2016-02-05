(function() {
  'use strict';

  angular
    .module('madBid')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

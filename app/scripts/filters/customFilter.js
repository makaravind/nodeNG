/**
 * Created by DESI-HYD-01 on 07-Jun-17.
 */
// configure the module.
// in this example we will create a greeting filter
angular
  .module('ilearnApp')
  .filter('greet', function () {
    return function (name) {
      return 'Hello, ' + name + '!';
    };
  });

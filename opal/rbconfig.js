/* Generated by Opal 0.10.0.dev */
Opal.modules["rbconfig"] = function(Opal) {
  Opal.dynamic_require_severity = "warning";
  var OPAL_CONFIG = { method_missing: true, arity_check: false, freezing: true, tainting: true };
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $hash2 = Opal.hash2;

  Opal.add_stubs(['$split', '$[]']);
  (function($base) {
    var $RbConfig, self = $RbConfig = $module($base, 'RbConfig');

    var def = self.$$proto, $scope = self.$$scope, versions = nil;

    versions = $scope.get('RUBY_VERSION').$split(".");

    Opal.cdecl($scope, 'CONFIG', $hash2(["ruby_version", "MAJOR", "MINOR", "TEENY", "RUBY", "RUBY_INSTALL_NAME", "RUBY_SO_NAME", "target_os", "host_os", "PATH_SEPARATOR"], {"ruby_version": $scope.get('RUBY_VERSION'), "MAJOR": versions['$[]'](0), "MINOR": versions['$[]'](1), "TEENY": versions['$[]'](2), "RUBY": $scope.get('RUBY_ENGINE'), "RUBY_INSTALL_NAME": $scope.get('RUBY_ENGINE'), "RUBY_SO_NAME": $scope.get('RUBY_ENGINE'), "target_os": "ECMA-262", "host_os": "ECMA-262", "PATH_SEPARATOR": ":"}));
  })($scope.base);
  return Opal.cdecl($scope, 'RUBY_EXE', "bundle exec bin/opal");
};

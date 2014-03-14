/* Generated by Opal 0.6.0 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $module = $opal.module;

  $opal.add_stubs(['$gsub']);
  return (function($base) {
    var self = $module($base, 'SecureRandom');

    var def = self._proto, $scope = self._scope;

    $opal.defs(self, '$uuid', function() {
      var $a, $b, TMP_1, self = this;

      return ($a = ($b = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").$gsub, $a._p = (TMP_1 = function(ch){var self = TMP_1._s || this;
if (ch == null) ch = nil;
      
        var r = Math.random() * 16 | 0,
            v = ch == "x" ? r : (r & 3 | 8);

        return v.toString(16);
      }, TMP_1._s = self, TMP_1), $a).call($b, /[xy]/);
    })
    
  })(self)
})(Opal);

//# sourceMappingURL=/__opal_source_maps__/securerandom.js.map
;

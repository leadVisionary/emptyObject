// Generated by CoffeeScript 1.3.2
(function() {

  require('should');

  require('./emptyObject');

  describe('emptyObject', function() {
    return it('should return true when object is empty', function() {
      return {}.isEmpty().should.be["true"];
    });
  });

}).call(this);

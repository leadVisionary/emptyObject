// Generated by CoffeeScript 1.3.2
(function() {

  require('should');

  require('./emptyObject');

  describe('emptyObject', function() {
    return it('should return false when object isnt empty', function() {
      return {
        foo: 'bar'
      }.isEmpty().should.not.be["true"];
    });
  });

}).call(this);

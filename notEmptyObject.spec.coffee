require 'should'

require './emptyObject'

describe 'emptyObject', ->
	it 'should return false when object isnt empty', ->
		{foo:'bar'}.isEmpty().should.not.be.true

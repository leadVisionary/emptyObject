require 'should'

require './emptyObject'

describe 'emptyObject', ->
	it 'should return true when object is empty', ->
		{}.isEmpty().should.be.true

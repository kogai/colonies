"use strict";
var world = require('world/');

require('should');

describe('worldのテスト', function() {
	var testWorld;
	before(function(done){
		testWorld = world.createWorld(248);
		done();
	});

	it('第一階層のindexはx座標と同じ{x:3,y:6}', function() {
		var testEle = testWorld[3][6].cordinate;
		(testEle.x).should.be.exactly(3);
	});
	it('第二階層のindexはy座標と同じ{x:6,y:3}', function() {
		var testEle = testWorld[6][3].cordinate;
		(testEle.y).should.be.exactly(3);
	});
});

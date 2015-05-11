"use strict";
var world = require('world/');
var SIZE = 24;

describe('worldのテスト', function() {
	var testWorld;
	before(function(done){
		testWorld = world.createWorld(SIZE);
		done();
	});

	it('worldの最大サイズはSIZEに納まる', function () {
		(testWorld.length).should.be.exactly(SIZE);
		var x;
		for (x = 0; x < testWorld.length; x++) {
			(testWorld[x].length).should.be.exactly(SIZE);
		}
	});

	it('第一階層のindexはx座標と同じ{x:3,y:6}', function() {
		var testEle = testWorld[3][6].cordinate;
		(testEle.x).should.be.exactly(3);
	});
	it('第二階層のindexはy座標と同じ{x:6,y:3}', function() {
		var testEle = testWorld[6][3].cordinate;
		(testEle.y).should.be.exactly(3);
	});

	it('全てのtileはBLANKではない', function(){
		var x, y, testWorld_x;
		for (x = 0; x < testWorld.length; x++) {
			testWorld_x = testWorld[x];
			for (y = 0; y < testWorld_x.length; y++) {
				(testWorld_x[y].tile.type).should.not.match('BLANK');
			}
		}
	});

	it('全てのtileにはnaverがある', function () {
		var x, y, testWorld_x;
		for (x = 0; x < testWorld.length; x++) {
			testWorld_x = testWorld[x];
			for (y = 0; y < testWorld_x.length; y++) {
				(testWorld_x[y].tile).should.have.property('naver');
			}
		}
	});

	it('{x:3, y:6}のnaverは{x:2, y:6}, {x:3, y:5}, {x:4, y:6}, {x:3, y:7}', function () {
		var testEle = testWorld[3][6].tile.naver;

		var left = testWorld[2][6].tile.type;
		var top = testWorld[3][5].tile.type;
		var right = testWorld[4][6].tile.type;
		var bottom = testWorld[3][7].tile.type;

		(testEle.left).should.be.exactly(left);
		(testEle.top).should.be.exactly(top);
		(testEle.right).should.be.exactly(right);
		(testEle.bottom).should.be.exactly(bottom);
	});

});

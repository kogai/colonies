"use strict";
var world = require('world/');
var SIZE = 24;

describe('world-createTileDetailメソッドのテスト', function() {
	var testWorld;
	before(function(done){
		testWorld = world.createWorld(SIZE);
		testWorld = world.createTileDetail(testWorld, {x: 3, y:6});
		done();
	});

	it('詳細タイルは指定した親タイルの座標に生成される', function () {
	});

	it('詳細タイルは親タイルから呼び出せる', function () {

	});

	it('詳細タイルのサイズは親タイルのサイズを継承する', function () {

	});

	it('詳細タイルは親タイルのtypeを継承する', function () {

	});
	it('詳細タイルはランダムにイベントミニタイルを持つ', function () {

	});
	it('イベントミニタイルはイベントtypeを持つ', function () {

	});
	it('イベントtypeは関数として呼び出せる', function () {

	});
});

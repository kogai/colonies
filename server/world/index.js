"use strict";

var createTileDetail = require('./createTileDetail');
var World = {};
var enviromentRatio = {
	glass: 3,
	water:10,
	desert: 1,
	mountain: 1,
	forest: 1
};

World.createWorld = function (SIZE) {
	return new this.initialize(SIZE);
};

World.initialize = function (SIZE) {
	this._width = SIZE;
	this._height = SIZE;
	var blankWorldMatrix = [];
	var world;

	this._blankWorld = function (width, height) {
		var x;
		var y;
		var cordinate_x;
		for (x = 0; x < width; x++) {
			cordinate_x = [];
			for (y = 0; y < height; y++) {
				cordinate_x.push({
					cordinate: {
						x: x,
						y: y
					},
					tile: {
						type: "BLANK"
					}
				});
			}
			blankWorldMatrix.push(cordinate_x);
		}
		return blankWorldMatrix;
	};

	this._setTile = function (world) {
		var tmpTile;

		function difineTile(){
			tmpTile = {
				maxRatio: 0,
				maxEnv: ""
			};

			var checkRatio;
			var env;
			for(env in enviromentRatio){
				if (enviromentRatio.hasOwnProperty(env)) {
					checkRatio = enviromentRatio[env] * Math.random() * 10;
					if(checkRatio > tmpTile.maxRatio){
						tmpTile.maxRatio = checkRatio;
						tmpTile.maxEnv = env.toUpperCase();
					}
				}
			}
			return tmpTile.maxEnv;
		}

		var x, y, world_x;
		for (x = 0; x < world.length; x++) {
			world_x = world[x];
			for (y = 0; y < world_x.length; y++) {
				world_x[y].tile.type = difineTile();
			}
		}

		return world;
	};

	this._setNaver = function (world) {
		var x, y, left, top, right, bottom;
		for (x = 0; x < world.length; x++) {
			for (y = 0; y < world[x].length; y++) {

				if(x === 0){
					left = world[world.length-1][y].tile.type;
				}else{
					left = world[x-1][y].tile.type;
				}

				if(x === world.length-1){
					right = world[0][y].tile.type;
				}else{
					right = world[x+1][y].tile.type;
				}

				if(y === 0){
					top = world[x][world[x].length-1].tile.type;
				}else{
					top = world[x][y-1].tile.type;
				}

				if(y === world[x].length-1){
					bottom = world[x][0].tile.type;
				}else{
					bottom = world[x][y+1].tile.type;
				}

				world[x][y].tile.naver = {
					left: left,
					top: top,
					right: right,
					bottom: bottom
				};
			}
		}
		return world;
	};

	world = this._blankWorld(this._width, this._height);
	world = this._setTile(world);
	world = this._setNaver(world);
	return world;
};

World.createTileDetail =

module.exports = World;

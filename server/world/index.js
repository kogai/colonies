"use strict";

var World = {};

World.createWorld = function (SIZE) {
  return new this.initialize(SIZE);
};

World.initialize = function (SIZE) {
  this._width = SIZE;
  this._height = SIZE;
  var blankWorldMatrix = [];
  var world;

  this._blankWorld = function (width, height) {
    var i;
    var j;
    var cordinate_x;
    for (i = 0; i < width; i++) {
      cordinate_x = [];
      for (j = 0; j < height; j++) {
        cordinate_x.push({
          cordinate: {
            x: i,
            y: j
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
    var enviromentRatio = {
      glass: 3,
      water:4,
      desert: 1,
      mountain: 1,
      forest: 1
    };

    var tmpTile;

    function difineTile(){
      tmpTile = {
        maxRatio: 0,
        maxEnv: ""
      };

      var checkRatio;
      var env;
      for(env in enviromentRatio){
        checkRatio = enviromentRatio[env] * Math.random() * 10;
        if(checkRatio > tmpTile.maxRatio){
          tmpTile.maxRatio = checkRatio;
          tmpTile.maxEnv = env.toUpperCase();
        }
      }
      return tmpTile.maxEnv;
    }

    var world_y;

    for (var y = 0; y < world.length; y++) {
      world_y = world[y];
      for (var x = 0; x < world_y.length; x++) {
        world_y[x].tile.type = difineTile();
      }
    }

    return world;
  };

  world = this._blankWorld(this._width, this._height);
  world = this._setTile(world);
  return world;

};

module.exports = World;

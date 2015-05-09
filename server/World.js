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

  var getTypeOfPreTile = function (currentCordinate) {
    var isInitialCordinate_x = currentCordinate.x === 0;
    var isInitialCordinate_y = currentCordinate.y === 0;
    var typeOfPreTile_x;
    var typeOfPreTile_y;

    if(isInitialCordinate_x) {
      typeOfPreTile_x = "NOT_EXIST";
    }else{
      typeOfPreTile_x = blankWorldMatrix[currentCordinate.x-1].tile.type;
    }

    if(isInitialCordinate_y) {
      typeOfPreTile_y = "NOT_EXIST";
    }else{
      typeOfPreTile_y = blankWorldMatrix[currentCordinate.y-1].tile.type;
    }

    return {
      x: typeOfPreTile_x,
      y: typeOfPreTile_y
    };
  };

  this._blankWorld = function (width, height) {
    var i;
    var j;
    for (i = 0; i < width; i++) {
      for (j = 0; j < height; j++) {
        blankWorldMatrix.push({
          cordinate: {
            x: i,
            y: j
          },
          tile: {
            type: "BLANK",
            typeOfPreTile: getTypeOfPreTile({x: i, y: j})
          }
        });
      }
    }
    return blankWorldMatrix;
  };

  this._setTile = function (world) {
    return world;
  };

  world = this._blankWorld(this._width, this._height);
  world = this._setTile(world);
  return world;

};

module.exports = World;

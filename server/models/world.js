var detailTile = {
	parentCordinate: {
		x: Number,
		y: Number
	},
	cordinate: {
		x: Number,
		y: Number
	},
	tile: {
		type: String,
		naver: {
			left: String,
			top: String,
			right: String,
			bottom: String
		},
		isEventTile: Boolean,
		eventType: String
	}
};

var parentTile = {
	cordinate: {
		x: Number,
		y: Number
	},
	tile: {
		type: String,
		naver: {
			left: String,
			top: String,
			right: String,
			bottom: String
		},
		detail: detailTile
	}
};

module.exports = parentTile;

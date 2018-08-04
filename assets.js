//
//
// assets.js
// 2018 @auther piteredo
// This Program is MIT license.
//
//
const ASSETS = {
	image: {
		"tomapiko": "https://rawgit.com/phi-jp/phina.js/develop/assets/images/tomapiko_ss.png"
	},

	spritesheet: {
		"tomapiko_ss": {
			"frame": {
				"width": 64,
				"height": 64,
				"cols": 6,
				"rows": 3,
			},
			"animations": {
				"right": {
					"frames": [16, 17, 15],
					"next": "right",
					"frequency": 4,
				},
				"left": {
					"frames": [13, 14, 12],
					"next": "left",
					"frequency": 4,
				},
				"up": {
					"frames": [10, 11, 9],
					"next": "up",
					"frequency": 4,
				},
				"down": {
					"frames": [7, 8, 6],
					"next": "down",
					"frequency": 4,
				}
			}
		}
	}
};
// enable/disable display buttom
var APPS_DIR = "/usr/share/applications"

// blender
function blender_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-blender.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-blender + label").css("display", "block")
		$(".switch--shadow-blender + label").css("display", "none")
		$(".blender-off").css("display", "block")
		$(".blender-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-blender + label").css("display", "none")
		$(".switch--shadow-blender + label").css("display", "block")
		$(".blender-off").css("display", "none")
		$(".blender-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/blender.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		fs.access(SNAP_DIR+'/blender_blender.desktop', (err) => {
		if (!err) {
			console.error('myfile already exists');
		return;
		} else {
			$("blender").css("display", "none")
		}
		});
	}
	});
}

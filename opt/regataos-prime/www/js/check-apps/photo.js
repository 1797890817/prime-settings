// enable/disable display buttom
var APPS_DIR = "/usr/share/applications"
var SNAP_DIR = "/var/lib/snapd/desktop/applications"

// gimp
function gimp_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-gimp.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-gimp + label").css("display", "block")
		$(".switch--shadow-gimp + label").css("display", "none")
		$(".gimp-off").css("display", "block")
		$(".gimp-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-gimp + label").css("display", "none")
		$(".switch--shadow-gimp + label").css("display", "block")
		$(".gimp-off").css("display", "none")
		$(".gimp-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/gimp.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		fs.access(SNAP_DIR+'/gimp_gimp.desktop', (err) => {
		if (!err) {
			console.error('myfile already exists');
		return;
		} else {
			$("#gimp").css("display", "none")
		}
		});
	}
	});
}

// darktable
function darktable_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-darktable.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-darktable + label").css("display", "block")
		$(".switch--shadow-darktable + label").css("display", "none")
		$(".darktable-off").css("display", "block")
		$(".darktable-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-darktable + label").css("display", "none")
		$(".switch--shadow-darktable + label").css("display", "block")
		$(".darktable-off").css("display", "none")
		$(".darktable-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/darktable.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#darktable").css("display", "none")
	}
	});
}

// inkscape
function inkscape_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-inkscape.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-inkscape + label").css("display", "block")
		$(".switch--shadow-inkscape + label").css("display", "none")
		$(".inkscape-off").css("display", "block")
		$(".inkscape-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-inkscape + label").css("display", "none")
		$(".switch--shadow-inkscape + label").css("display", "block")
		$(".inkscape-off").css("display", "none")
		$(".inkscape-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/inkscape.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#inkscape").css("display", "none")
	}
	});
}

// krita
function krita_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-krita.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-krita + label").css("display", "block")
		$(".switch--shadow-krita + label").css("display", "none")
		$(".krita-off").css("display", "block")
		$(".krita-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-krita + label").css("display", "none")
		$(".switch--shadow-krita + label").css("display", "block")
		$(".krita-off").css("display", "none")
		$(".krita-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/org.kde.krita.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#krita").css("display", "none")
	}
	});
}

// aftershot
function aftershot_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-aftershot.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-aftershot + label").css("display", "block")
		$(".switch--shadow-aftershot + label").css("display", "none")
		$(".aftershot-off").css("display", "block")
		$(".aftershot-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-aftershot + label").css("display", "none")
		$(".switch--shadow-aftershot + label").css("display", "block")
		$(".aftershot-off").css("display", "none")
		$(".aftershot-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/AfterShot3X64.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#aftershot").css("display", "none")
	}
	});
}

// gravit-designer
function gravit_designer_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-gravit-designer.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-gravit-designer + label").css("display", "block")
		$(".switch--shadow-gravit-designer + label").css("display", "none")
		$(".gravit-designer-off").css("display", "block")
		$(".gravit-designer-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-gravit-designer + label").css("display", "none")
		$(".switch--shadow-gravit-designer + label").css("display", "block")
		$(".gravit-designer-off").css("display", "none")
		$(".gravit-designer-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/gravit-designer.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#gravit-designer").css("display", "none")
	}
	});
}

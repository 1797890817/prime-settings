// enable/disable display buttom
var APPS_DIR = "/usr/share/applications"

// simplescreenrecorder
function simplescreenrecorder_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-simplescreenrecorder.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-simplescreenrecorder + label").css("display", "block")
		$(".switch--shadow-simplescreenrecorder + label").css("display", "none")
		$(".simplescreenrecorder-off").css("display", "block")
		$(".simplescreenrecorder-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-simplescreenrecorder + label").css("display", "none")
		$(".switch--shadow-simplescreenrecorder + label").css("display", "block")
		$(".simplescreenrecorder-off").css("display", "none")
		$(".simplescreenrecorder-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/simplescreenrecorder.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#simplescreenrecorder").css("display", "none")
	}
	});
}

// lightworks
function lightworks_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-lightworks.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-lightworks + label").css("display", "block")
		$(".switch--shadow-lightworks + label").css("display", "none")
		$(".lightworks-off").css("display", "block")
		$(".lightworks-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-lightworks + label").css("display", "none")
		$(".switch--shadow-lightworks + label").css("display", "block")
		$(".lightworks-off").css("display", "none")
		$(".lightworks-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/lightworks.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#lightworks").css("display", "none")
	}
	});
}

// kdenlive
function kdenlive_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-kdenlive.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-kdenlive + label").css("display", "block")
		$(".switch--shadow-kdenlive + label").css("display", "none")
		$(".kdenlive-off").css("display", "block")
		$(".kdenlive-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-kdenlive + label").css("display", "none")
		$(".switch--shadow-kdenlive + label").css("display", "block")
		$(".kdenlive-off").css("display", "none")
		$(".kdenlive-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/org.kde.kdenlive.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#kdenlive").css("display", "none")
	}
	});
}

// openshot
function openshot_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-openshot.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-openshot + label").css("display", "block")
		$(".switch--shadow-openshot + label").css("display", "none")
		$(".openshot-off").css("display", "block")
		$(".openshot-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-openshot + label").css("display", "none")
		$(".switch--shadow-openshot + label").css("display", "block")
		$(".openshot-off").css("display", "none")
		$(".openshot-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/openshot-qt.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#openshot").css("display", "none")
	}
	});
}

// obs
function obs_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-obs.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-obs + label").css("display", "block")
		$(".switch--shadow-obs + label").css("display", "none")
		$(".obs-off").css("display", "block")
		$(".obs-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-obs + label").css("display", "none")
		$(".switch--shadow-obs + label").css("display", "block")
		$(".obs-off").css("display", "none")
		$(".obs-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/com.obsproject.Studio.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#obs").css("display", "none")
	}
	});
}

// nuke
function nuke_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-nuke.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-nuke + label").css("display", "block")
		$(".switch--shadow-nuke + label").css("display", "none")
		$(".nuke-off").css("display", "block")
		$(".nuke-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-nuke + label").css("display", "none")
		$(".switch--shadow-nuke + label").css("display", "block")
		$(".nuke-off").css("display", "none")
		$(".nuke-on").css("display", "block")
	}
	});

	fs.access('/tmp/regataos-prime/nuke.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#nuke").css("display", "none")
	}
	});
}

// shotcut
function shotcut_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-shotcut.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-shotcut + label").css("display", "block")
		$(".switch--shadow-shotcut + label").css("display", "none")
		$(".shotcut-off").css("display", "block")
		$(".shotcut-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-shotcut + label").css("display", "none")
		$(".switch--shadow-shotcut + label").css("display", "block")
		$(".shotcut-off").css("display", "none")
		$(".shotcut-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/org.shotcut.Shotcut.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#shotcut").css("display", "none")
	}
	});
}

// fusionforlinux
function fusionforlinux_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-fusionforlinux.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-fusionforlinux + label").css("display", "block")
		$(".switch--shadow-fusionforlinux + label").css("display", "none")
		$(".fusionforlinux-off").css("display", "block")
		$(".fusionforlinux-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-fusionforlinux + label").css("display", "none")
		$(".switch--shadow-fusionforlinux + label").css("display", "block")
		$(".fusionforlinux-off").css("display", "none")
		$(".fusionforlinux-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/com.blackmagicdesign.Fusion9.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#fusionforlinux").css("display", "none")
	}
	});
}

// davinci-resolve
function davinci_resolve_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-davinci-resolve.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-davinci-resolve + label").css("display", "block")
		$(".switch--shadow-davinci-resolve + label").css("display", "none")
		$(".davinci-resolve-off").css("display", "block")
		$(".davinci-resolve-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-davinci-resolve + label").css("display", "none")
		$(".switch--shadow-davinci-resolve + label").css("display", "block")
		$(".davinci-resolve-off").css("display", "none")
		$(".davinci-resolve-on").css("display", "block")
	}
	});

	fs.access(APPS_DIR+'/DaVinci Resolve.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#davinci-resolve").css("display", "none")
	}
	});
}

// natron
function natron_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-natron.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-natron + label").css("display", "block")
		$(".switch--shadow-natron + label").css("display", "none")
		$(".natron-off").css("display", "block")
		$(".natron-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-natron + label").css("display", "none")
		$(".switch--shadow-natron + label").css("display", "block")
		$(".natron-off").css("display", "none")
		$(".natron-on").css("display", "block")
	}
	});

	fs.access('/opt/natron/regataos-prime.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#natron").css("display", "none")
	}
	});
}

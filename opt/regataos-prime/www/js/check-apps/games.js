// enable/disable display buttom

// steam
function steam_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-steam.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-steam + label").css("display", "block")
		$(".switch--shadow-steam + label").css("display", "none")
		$(".steam-off").css("display", "block")
		$(".steam-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-steam + label").css("display", "none")
		$(".switch--shadow-steam + label").css("display", "block")
		$(".steam-off").css("display", "none")
		$(".steam-on").css("display", "block")
	}
	});

	fs.access('/usr/share/applications/steam.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#steam").css("display", "none")
	}
	});
}

// pcsx2
function pcsx2_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-pcsx2.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-pcsx2 + label").css("display", "block")
		$(".switch--shadow-pcsx2 + label").css("display", "none")
		$(".pcsx2-off").css("display", "block")
		$(".pcsx2-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-pcsx2 + label").css("display", "none")
		$(".switch--shadow-pcsx2 + label").css("display", "block")
		$(".pcsx2-off").css("display", "none")
		$(".pcsx2-on").css("display", "block")
	}
	});

	fs.access('/usr/share/applications/PCSX2.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#pcsx2").css("display", "none")
	}
	});
}

// dolphin-emu
function dolphin_emu_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-dolphin-emu.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-dolphin-emu + label").css("display", "block")
		$(".switch--shadow-dolphin-emu + label").css("display", "none")
		$(".dolphin-emu-off").css("display", "block")
		$(".dolphin-emu-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-dolphin-emu + label").css("display", "none")
		$(".switch--shadow-dolphin-emu + label").css("display", "block")
		$(".dolphin-emu-off").css("display", "none")
		$(".dolphin-emu-on").css("display", "block")
	}
	});

	fs.access('/usr/share/applications/dolphin-emu.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#dolphin-emu").css("display", "none")
	}
	});
}

// supertuxkart
function supertuxkart_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/noapps-hybrid-graphics-supertuxkart.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-supertuxkart + label").css("display", "block")
		$(".switch--shadow-supertuxkart + label").css("display", "none")
		$(".supertuxkart-off").css("display", "block")
		$(".supertuxkart-on").css("display", "none")
	return;
	} else {
		$(".switch--shadow2-supertuxkart + label").css("display", "none")
		$(".switch--shadow-supertuxkart + label").css("display", "block")
		$(".supertuxkart-off").css("display", "none")
		$(".supertuxkart-on").css("display", "block")
	}
	});

	fs.access('/usr/share/applications/supertuxkart.desktop', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#supertuxkart").css("display", "none")
	}
	});
}

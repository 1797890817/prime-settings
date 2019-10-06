// enable/disable display buttom

function dgpu_support(){
const fs = require('fs');
fs.access('/tmp/regataos-prime/dgpu-support.txt', (err) => {
if (!err) {
	console.error('myfile already exists');
	$("#selecte-gpu").css("display", "block")
	return;
}
});
}

// reverse-prime
function reverse_prime_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/reverse-prime.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-reverse-prime + label").css("display", "none")
		$(".switch--shadow-reverse-prime + label").css("display", "block")
		$(".reverse-prime-off").css("display", "none")
		$(".reverse-prime-on").css("display", "block")
		dgpu_support();
	return;
	} else {
		$(".switch--shadow2-reverse-prime + label").css("display", "block")
		$(".switch--shadow-reverse-prime + label").css("display", "none")
		$(".reverse-prime-off").css("display", "block")
		$(".reverse-prime-on").css("display", "none")
		$("#selecte-gpu").css("display", "none")
	}
	});
}

// iGPU or dGPU
function set_renderer_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/renderer-dgpu.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$("#selectnav2").css("display", "block")
		$(".reverse-prime-igpu").css("display", "none")
		$(".reverse-prime-dgpu").css("display", "block")
	return;
	} else {
		$("#selectnav1").css("display", "block")
		$(".reverse-prime-igpu").css("display", "block")
		$(".reverse-prime-dgpu").css("display", "none")
	}
	});
}

// freesync
function freesync_buttom() {
	const fs = require('fs');
	fs.access('/tmp/regataos-prime/freesync-on.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$(".switch--shadow2-freesync + label").css("display", "none")
		$(".switch--shadow-freesync + label").css("display", "block")
		$(".freesync-off").css("display", "none")
		$(".freesync-on").css("display", "block")
		dgpu_support();
	return;
	} else {
		$(".switch--shadow2-freesync + label").css("display", "block")
		$(".switch--shadow-freesync + label").css("display", "none")
		$(".freesync-off").css("display", "block")
		$(".freesync-on").css("display", "none")
	}
	});
}

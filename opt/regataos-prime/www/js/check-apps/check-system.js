// nvidia driver not supported
function notify_nv_driver(){
	const exec = require('child_process').exec;
	var comando = "echo not supported > /tmp/regataos-prime/nvidia-driver-notify.txt";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

// hardware not supported
function notify_hw(){
	const exec = require('child_process').exec;
	var comando = "echo not supported > /tmp/regataos-prime/hardware-notify.txt";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

// Check system
function check_system() {
const fs = require('fs');

// Check freesync
fs.access('/tmp/regataos-prime/freesync-supported.txt', (err) => {
if (!err) {
console.error('myfile already exists');
	$("#freesync-toggle").css("display", "block")
return;
} else {
	$("#freesync-toggle").css("display", "none")
}
});

// Check Prime support
fs.access('/tmp/regataos-prime/use-hybrid-graphics.txt', (err) => {
if (!err) {
console.error('myfile already exists');

	// Check NVIDIA driver
	fs.access('/usr/bin/nvidia-xconfig', (err) => {
	if (!err) {
		console.error('myfile already exists');

		// Check if the driver is supported
		fs.access('/tmp/regataos-prime/nvidia-driver-supported.txt', (err) => {
		if (!err) {
			console.error('myfile already exists');
			$("#pop-up-nv").css("display", "none")
		return;
		} else {

			// Check nvidia driver notify
			fs.access('/tmp/regataos-prime/nvidia-driver-notify.txt', (err) => {
			if (!err) {
				console.error('myfile already exists');
				$("#pop-up-nv").css("display", "none")
			return;
			} else {
				$("#pop-up-nv").css("display", "block")
				notify_nv_driver();
			}
			});

		}
		});

	return;
	} else {
		$("#use-nvidia").css("display", "none")
		$("#use-nvidia-click").css("display", "none")
	}
	});

return;
} else {
	$("#primeon").css("display", "none")
	$("#use-nvidia").css("display", "none")
	$("#use-nvidia-click").css("display", "none")

	// Check hardware notify
	fs.access('/tmp/regataos-prime/hardware-notify.txt', (err) => {
	if (!err) {
		console.error('myfile already exists');
		$("#pop-up-hw").css("display", "none")
	return;
	} else {
		$("#pop-up-hw").css("display", "block")
		notify_hw();
	}
	});
}
});

}

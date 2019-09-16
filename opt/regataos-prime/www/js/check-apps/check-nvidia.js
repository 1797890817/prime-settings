// Check NVIDIA driver

function check_nvidia() {
	const fs = require('fs');
	fs.access('/usr/bin/nvidia-xconfig', (err) => {
	if (!err) {
		console.error('myfile already exists');
	return;
	} else {
		$("#use-nvidia").css("display", "none")
		$("#use-nvidia-click").css("display", "none")
	}
	});
}

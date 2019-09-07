// enable/disable display buttom

function all_apps_reload() {

const fs = require('fs');

fs.access('/tmp/regataos-prime/all-apps-dri.txt', (err) => {
if (!err) {
	console.error('myfile already exists');
	$(".all-apps2").css("display", "inline-block")
	$(".all-apps").css("display", "none")

setTimeout(function() {
location.reload()
}, 500);

	return;
} else {
	$(".all-apps").css("display", "inline-block")
	$(".all-apps2").css("display", "none")

setTimeout(function() {
location.reload()
}, 500);

}
});

}

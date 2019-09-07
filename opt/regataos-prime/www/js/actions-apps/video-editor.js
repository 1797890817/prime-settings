var dir = "/tmp/regataos-prime/"
var dir2 = "/usr/share/regataos/gpu/prime/"

// simplescreenrecorder
function simplescreenrecorder_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-simplescreenrecorder.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function simplescreenrecorder_disable(){
	const exec = require('child_process').exec;
	var comando = "echo simplescreenrecorder > "+dir+"noapps-hybrid-graphics-simplescreenrecorder.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function simplescreenrecorder(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-simplescreenrecorder.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	simplescreenrecorder_enable();
		$(".simplescreenrecorder-off").css("display", "none")
		$(".simplescreenrecorder-on").css("display", "block")
	return;
} else {
	simplescreenrecorder_disable();
		$(".simplescreenrecorder-off").css("display", "block")
		$(".simplescreenrecorder-on").css("display", "none")
}
});
}

// lightworks
function lightworks_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-lightworks.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function lightworks_disable(){
	const exec = require('child_process').exec;
	var comando = "echo lightworks > "+dir+"noapps-hybrid-graphics-lightworks.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function lightworks(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-lightworks.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	lightworks_enable();
		$(".lightworks-off").css("display", "none")
		$(".lightworks-on").css("display", "block")
	return;
} else {
	lightworks_disable();
		$(".lightworks-off").css("display", "block")
		$(".lightworks-on").css("display", "none")
}
});
}

// kdenlive
function kdenlive_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-kdenlive.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function kdenlive_disable(){
	const exec = require('child_process').exec;
	var comando = "echo kdenlive > "+dir+"noapps-hybrid-graphics-kdenlive.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function kdenlive(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-kdenlive.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	kdenlive_enable();
		$(".kdenlive-off").css("display", "none")
		$(".kdenlive-on").css("display", "block")
	return;
} else {
	kdenlive_disable();
		$(".kdenlive-off").css("display", "block")
		$(".kdenlive-on").css("display", "none")
}
});
}

// openshot
function openshot_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-openshot.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function openshot_disable(){
	const exec = require('child_process').exec;
	var comando = "echo openshot > "+dir+"noapps-hybrid-graphics-openshot.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function openshot(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-openshot.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	openshot_enable();
		$(".openshot-off").css("display", "none")
		$(".openshot-on").css("display", "block")
	return;
} else {
	openshot_disable();
		$(".openshot-off").css("display", "block")
		$(".openshot-on").css("display", "none")
}
});
}

// obs
function obs_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-obs.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function obs_disable(){
	const exec = require('child_process').exec;
	var comando = "echo obs > "+dir+"noapps-hybrid-graphics-obs.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function obs(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-obs.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	obs_enable();
		$(".obs-off").css("display", "none")
		$(".obs-on").css("display", "block")
	return;
} else {
	obs_disable();
		$(".obs-off").css("display", "block")
		$(".obs-on").css("display", "none")
}
});
}

// nuke
function nuke_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-nuke.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function nuke_disable(){
	const exec = require('child_process').exec;
	var comando = "echo nuke > "+dir+"noapps-hybrid-graphics-nuke.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function nuke(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-nuke.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	nuke_enable();
		$(".nuke-off").css("display", "none")
		$(".nuke-on").css("display", "block")
	return;
} else {
	nuke_disable();
		$(".nuke-off").css("display", "block")
		$(".nuke-on").css("display", "none")
}
});
}

// shotcut
function shotcut_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-shotcut.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function shotcut_disable(){
	const exec = require('child_process').exec;
	var comando = "echo shotcut > "+dir+"noapps-hybrid-graphics-shotcut.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function shotcut(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-shotcut.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	shotcut_enable();
		$(".shotcut-off").css("display", "none")
		$(".shotcut-on").css("display", "block")
	return;
} else {
	shotcut_disable();
		$(".shotcut-off").css("display", "block")
		$(".shotcut-on").css("display", "none")
}
});
}

// fusionforlinux
function fusionforlinux_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-fusionforlinux.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function fusionforlinux_disable(){
	const exec = require('child_process').exec;
	var comando = "echo fusionforlinux > "+dir+"noapps-hybrid-graphics-fusionforlinux.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function fusionforlinux(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-fusionforlinux.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	fusionforlinux_enable();
		$(".fusionforlinux-off").css("display", "none")
		$(".fusionforlinux-on").css("display", "block")
	return;
} else {
	fusionforlinux_disable();
		$(".fusionforlinux-off").css("display", "block")
		$(".fusionforlinux-on").css("display", "none")
}
});
}

// davinci-resolve
function davinci_resolve_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-davinci-resolve.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function davinci_resolve_disable(){
	const exec = require('child_process').exec;
	var comando = "echo davinci-resolve > "+dir+"noapps-hybrid-graphics-davinci-resolve.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function davinci_resolve(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-davinci-resolve.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	davinci_resolve_enable();
		$(".davinci-resolve-off").css("display", "none")
		$(".davinci-resolve-on").css("display", "block")
	return;
} else {
	davinci_resolve_disable();
		$(".davinci-resolve-off").css("display", "block")
		$(".davinci-resolve-on").css("display", "none")
}
});
}

// natron
function natron_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-natron.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function natron_disable(){
	const exec = require('child_process').exec;
	var comando = "echo natron > "+dir+"noapps-hybrid-graphics-natron.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function natron(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-natron.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	natron_enable();
		$(".natron-off").css("display", "none")
		$(".natron-on").css("display", "block")
	return;
} else {
	natron_disable();
		$(".natron-off").css("display", "block")
		$(".natron-on").css("display", "none")
}
});
}

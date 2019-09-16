var dir = "/tmp/regataos-prime/"
var dir2 = "/opt/regataos-prime/scripts/"

// gimp
function gimp_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-gimp.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function gimp_disable(){
	const exec = require('child_process').exec;
	var comando = "echo gimp > "+dir+"noapps-hybrid-graphics-gimp.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function gimp(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-gimp.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	gimp_enable();
		$(".gimp-off").css("display", "none")
		$(".gimp-on").css("display", "block")
	return;
} else {
	gimp_disable();
		$(".gimp-off").css("display", "block")
		$(".gimp-on").css("display", "none")
}
});
}

// darktable
function darktable_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-darktable.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function darktable_disable(){
	const exec = require('child_process').exec;
	var comando = "echo darktable > "+dir+"noapps-hybrid-graphics-darktable.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function darktable(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-darktable.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	darktable_enable();
		$(".darktable-off").css("display", "none")
		$(".darktable-on").css("display", "block")
	return;
} else {
	darktable_disable();
		$(".darktable-off").css("display", "block")
		$(".darktable-on").css("display", "none")
}
});
}

// inkscape
function inkscape_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-inkscape.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function inkscape_disable(){
	const exec = require('child_process').exec;
	var comando = "echo inkscape > "+dir+"noapps-hybrid-graphics-inkscape.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function inkscape(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-inkscape.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	inkscape_enable();
		$(".inkscape-off").css("display", "none")
		$(".inkscape-on").css("display", "block")
	return;
} else {
	inkscape_disable();
		$(".inkscape-off").css("display", "block")
		$(".inkscape-on").css("display", "none")
}
});
}

// krita
function krita_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-krita.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function krita_disable(){
	const exec = require('child_process').exec;
	var comando = "echo krita > "+dir+"noapps-hybrid-graphics-krita.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function krita(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-krita.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	krita_enable();
		$(".krita-off").css("display", "none")
		$(".krita-on").css("display", "block")
	return;
} else {
	krita_disable();
		$(".krita-off").css("display", "block")
		$(".krita-on").css("display", "none")
}
});
}

// aftershot
function aftershot_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-aftershot.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function aftershot_disable(){
	const exec = require('child_process').exec;
	var comando = "echo aftershot > "+dir+"noapps-hybrid-graphics-aftershot.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function aftershot(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-aftershot.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	aftershot_enable();
		$(".aftershot-off").css("display", "none")
		$(".aftershot-on").css("display", "block")
	return;
} else {
	aftershot_disable();
		$(".aftershot-off").css("display", "block")
		$(".aftershot-on").css("display", "none")
}
});
}

// gravit-designer
function gravit_designer_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-gravit-designer.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function gravit_designer_disable(){
	const exec = require('child_process').exec;
	var comando = "echo gravit-designer > "+dir+"noapps-hybrid-graphics-gravit-designer.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function gravit_designer(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-gravit-designer.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	gravit_designer_enable();
		$(".gravit-designer-off").css("display", "none")
		$(".gravit-designer-on").css("display", "block")
	return;
} else {
	gravit_designer_disable();
		$(".gravit-designer-off").css("display", "block")
		$(".gravit-designer-on").css("display", "none")
}
});
}

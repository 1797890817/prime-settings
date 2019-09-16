var dir = "/tmp/regataos-prime/"
var dir2 = "/opt/regataos-prime/scripts/"

// blender
function blender_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-blender.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function blender_disable(){
	const exec = require('child_process').exec;
	var comando = "echo blender > "+dir+"noapps-hybrid-graphics-blender.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function blender(){

const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-blender.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	blender_enable();
		$(".blender-off").css("display", "none")
		$(".blender-on").css("display", "block")

	return;
} else {

	blender_disable();
		$(".blender-off").css("display", "block")
		$(".blender-on").css("display", "none")

}
});
}

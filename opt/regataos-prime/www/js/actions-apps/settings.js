// settings page options

//open display
function display(){
	const exec = require('child_process').exec;
	var comando = "/opt/regataos-prime/scripts/run-tools-de -display";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

//open nvidia-settings
function nvidia_driver(){
	const exec = require('child_process').exec;
	var comando = "nvidia-settings";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

//open dgpu-teste
function teste_dgpu_gl(){
	const exec = require('child_process').exec;
	var comando = '/opt/regataos-prime/scripts/test-dgpu -gl';
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function teste_dgpu_vk(){
	const exec = require('child_process').exec;
	var comando = '/opt/regataos-prime/scripts/test-dgpu -vk';
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

// freesync
function enable_freesync(){
	const exec = require('child_process').exec;
	var comando = "echo freesync > /tmp/regataos-prime/freesync-on.txt; bash -x /opt/regataos-prime/scripts/freesync on";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function disable_freesync(){
	const exec = require('child_process').exec;
	var comando = 'rm -f "/tmp/regataos-prime/freesync-on.txt"; bash -x /opt/regataos-prime/scripts/freesync off';
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function freesync(){

const fs = require('fs');
fs.access('/tmp/regataos-prime/freesync-on.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	disable_freesync();
		$(".freesync-off").css("display", "block")
		$(".freesync-on").css("display", "none")

	return;
} else {

	enable_freesync();
	$(".freesync-off").css("display", "none")
	$(".freesync-on").css("display", "block")

}
});
}

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

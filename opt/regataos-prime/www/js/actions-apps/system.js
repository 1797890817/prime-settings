// system page options

function kinfocenter(){
	const exec = require('child_process').exec;
	var comando = "kinfocenter";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function teste_dgpu(){
	const exec = require('child_process').exec;
	var comando = '/opt/regataos-prime/scripts/test-dgpu start';
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

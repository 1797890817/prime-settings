// system page options

//open info
function info(){
	const exec = require('child_process').exec;
	var comando = "/opt/regataos-prime/scripts/run-tools-de -info";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

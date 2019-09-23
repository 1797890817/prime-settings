// system page options

//open info
function info(){
	const exec = require('child_process').exec;
	var comando = "/opt/regataos-prime/scripts/run-tools-de -info";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function copy_info(){
	const exec = require('child_process').exec;
	var comando = "cat /tmp/regataos-prime/prime-info.txt | xclip -sel clip";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

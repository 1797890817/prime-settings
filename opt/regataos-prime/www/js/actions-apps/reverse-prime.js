// reverse-prime
function reverse_prime_on(){
	const exec = require('child_process').exec;
	var comando = "echo reverse-prime > /tmp/regataos-prime/reverse-prime.txt; /usr/share/regataos/gpu/prime/reverse-prime/reverse-prime.sh start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function reverse_prime_off(){
	const exec = require('child_process').exec;
	var comando = "rm -f /tmp/regataos-prime/reverse-prime.txt; /usr/share/regataos/gpu/prime/reverse-prime/reverse-prime.sh start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function kscreen(){
	const exec = require('child_process').exec;
	var comando = "kcmshell5 kcm_kscreen";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function reverse_prime(){

const fs = require('fs');
fs.access('/tmp/regataos-prime/reverse-prime.txt', (err) => {
if (!err) {
console.error('myfile already exists');
	reverse_prime_off();
	$(".reverse-prime-on").css("display", "none")
	$(".reverse-prime-off").css("display", "block")
	$("#selecte-gpu").css("display", "none")
	setTimeout(function() {
		location.reload()
	}, 500);
	return;
} else {
	reverse_prime_on();
	$(".reverse-prime-on").css("display", "block")
	$(".reverse-prime-off").css("display", "none")
	$("#selecte-gpu").css("display", "block")
}
});
}

// Set iGPU or dGPU
function dgpu_on(){
	const exec = require('child_process').exec;
	var comando = "echo set-dgpu > /tmp/regataos-prime/renderer-dgpu.txt; /usr/share/regataos/gpu/prime/reverse-prime/reverse-prime.sh start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function dgpu_off(){
	const exec = require('child_process').exec;
	var comando = "rm -f /tmp/regataos-prime/renderer-dgpu.txt; /usr/share/regataos/gpu/prime/reverse-prime/reverse-prime.sh start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function changeFunc($i){

const fs = require('fs');
fs.access('/tmp/regataos-prime/renderer-dgpu.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	dgpu_off();
		$(".reverse-prime-dgpu").css("display", "none")
		$(".reverse-prime-igpu").css("display", "block")
	return;
} else {
	dgpu_on();
		$(".reverse-prime-dgpu").css("display", "block")
		$(".reverse-prime-igpu").css("display", "none")
}
});
}

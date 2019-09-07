var dir = "/tmp/regataos-prime/"
var dir2 = "/usr/share/regataos/gpu/prime/"

// all_apps
function all_apps_enable(){
	const exec = require('child_process').exec;
	var comando = "echo all-apps > "+dir+"all-apps2-dri.txt; echo all-apps > "+dir+"all-apps-dri.txt; /opt/regataos-prime/scripts/creat-txt-files.sh start; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

// all_apps2 -active
function all_apps2_enable(){
	const exec = require('child_process').exec;
	var comando = "echo all-apps > "+dir+"all-apps2-dri.txt; rm -f "+dir+"noapps-hybrid-graphics-*.txt; rm -f "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

// reload page
function reload_page(){
const fs = require('fs');
fs.access(dir+'all-apps-dri.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
//	setTimeout(function() {
		location.reload()
//	}, 1000);

	return;
}
});
}

function reload2_page(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"all-apps2-dri.txt";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function reload3_page(){
const fs = require('fs');
fs.access(dir+'all-apps2-dri.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');

	reload_page();

	reload2_page();

	return;
}
});
}

// all_apps2 -active
function all_apps2(){
const fs = require('fs');
fs.access(dir+'all-apps-dri.txt', (err) => {
  if (!err) {

	all_apps2_enable();

setTimeout(function() {
all_apps_buttom();
// GAMES {
	//steam
	steam_buttom();
	//pcsx2
	pcsx2_buttom();
	//dolphin-emu
	dolphin_emu_buttom();
	//supertuxkart
	supertuxkart_buttom();
// }

// 3D MODELING {
	//blender
	blender_buttom();
// }

// PHOTO {
	//gimp
	gimp_buttom();
	//darktable
	darktable_buttom();
	//inkscape
	inkscape_buttom();
	//krita
	krita_buttom();
	//aftershot
	aftershot_buttom();
	//gravit-designer
	gravit_designer_buttom();
// }

// VIDEO EDITOR {
	//simplescreenrecorder
	simplescreenrecorder_buttom();
	//lightworks
	lightworks_buttom();
	//kdenlive
	kdenlive_buttom();
	//openshot
	openshot_buttom();
	//obs
	obs_buttom();
	//nuke
	nuke_buttom();
	//shotcut
	shotcut_buttom();
	//fusionforlinux
	fusionforlinux_buttom();
	//davinci_resolve
	davinci_resolve_buttom();
	//natron
	natron_buttom();
// }
}, 1000);

setTimeout(function() {
reload3_page();
}, 1100);

	return;

} else {

	all_apps2_enable();

setTimeout(function() {
all_apps_buttom();
// GAMES {
	//steam
	steam_buttom();
	//pcsx2
	pcsx2_buttom();
	//dolphin-emu
	dolphin_emu_buttom();
	//supertuxkart
	supertuxkart_buttom();
// }

// 3D MODELING {
	//blender
	blender_buttom();
// }

// PHOTO {
	//gimp
	gimp_buttom();
	//darktable
	darktable_buttom();
	//inkscape
	inkscape_buttom();
	//krita
	krita_buttom();
	//aftershot
	aftershot_buttom();
	//gravit-designer
	gravit_designer_buttom();
// }

// VIDEO EDITOR {
	//simplescreenrecorder
	simplescreenrecorder_buttom();
	//lightworks
	lightworks_buttom();
	//kdenlive
	kdenlive_buttom();
	//openshot
	openshot_buttom();
	//obs
	obs_buttom();
	//nuke
	nuke_buttom();
	//shotcut
	shotcut_buttom();
	//fusionforlinux
	fusionforlinux_buttom();
	//davinci_resolve
	davinci_resolve_buttom();
	//natron
	natron_buttom();
// }
}, 1000);

setTimeout(function() {
reload3_page();
}, 1100);

}
});
}

// all_apps
function all_apps(){
const fs = require('fs');
fs.access(dir+'all-apps-dri.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');

	all_apps_enable();

setTimeout(function() {
all_apps_buttom();
// GAMES {
	//steam
	steam_buttom();
	//pcsx2
	pcsx2_buttom();
	//dolphin-emu
	dolphin_emu_buttom();
	//supertuxkart
	supertuxkart_buttom();
// }

// 3D MODELING {
	//blender
	blender_buttom();
// }

// PHOTO {
	//gimp
	gimp_buttom();
	//darktable
	darktable_buttom();
	//inkscape
	inkscape_buttom();
	//krita
	krita_buttom();
	//aftershot
	aftershot_buttom();
	//gravit-designer
	gravit_designer_buttom();
// }

// VIDEO EDITOR {
	//simplescreenrecorder
	simplescreenrecorder_buttom();
	//lightworks
	lightworks_buttom();
	//kdenlive
	kdenlive_buttom();
	//openshot
	openshot_buttom();
	//obs
	obs_buttom();
	//nuke
	nuke_buttom();
	//shotcut
	shotcut_buttom();
	//fusionforlinux
	fusionforlinux_buttom();
	//davinci_resolve
	davinci_resolve_buttom();
	//natron
	natron_buttom();
// }
}, 1000);

setTimeout(function() {
reload3_page();
}, 1100);

	return;

} else {

	all_apps_enable();

setTimeout(function() {
all_apps_buttom();
// GAMES {
	//steam
	steam_buttom();
	//pcsx2
	pcsx2_buttom();
	//dolphin-emu
	dolphin_emu_buttom();
	//supertuxkart
	supertuxkart_buttom();
// }

// 3D MODELING {
	//blender
	blender_buttom();
// }

// PHOTO {
	//gimp
	gimp_buttom();
	//darktable
	darktable_buttom();
	//inkscape
	inkscape_buttom();
	//krita
	krita_buttom();
	//aftershot
	aftershot_buttom();
	//gravit-designer
	gravit_designer_buttom();
// }

// VIDEO EDITOR {
	//simplescreenrecorder
	simplescreenrecorder_buttom();
	//lightworks
	lightworks_buttom();
	//kdenlive
	kdenlive_buttom();
	//openshot
	openshot_buttom();
	//obs
	obs_buttom();
	//nuke
	nuke_buttom();
	//shotcut
	shotcut_buttom();
	//fusionforlinux
	fusionforlinux_buttom();
	//davinci_resolve
	davinci_resolve_buttom();
	//natron
	natron_buttom();
// }
}, 1000);

setTimeout(function() {
reload3_page();
}, 1100);

}
});
}

// all_apps
function click_all(){
	all_apps();
}

// all_apps2
function click_all2(){
	all_apps2();
}

// English language translation
$(document).ready(function() {

// Universal
//Popups close button
$("div#button-close").attr({title:"Close"});

//Bottom menu
//Applications
$(".apps").text("Applications");
$(".apps2").text("Applications");
$(".button-apps").css("width", "132px");
	
//Settings
$(".settings").text("Settings");
$(".settings2").text("Settings");
$(".button-settings").css("width", "99px");

//System
$(".system").text("System");
$(".system2").text("System");
$(".button-system").css("width", "95px");

// Applications
//Session title applications
$(".title-apps").text("Choose which applications to run with your device's dedicated GPU.");

//Popup nvidia
$(".popup-title-home").text("PRIME Render Offload is not supported");
$(".popup-desc-home").text('The version of NVIDIA driver installed on the system does not support "PRIME Render Offload". The feature is only supported from the NVIDIA 435 driver series.');

//Popup hardware
$(".popup-title-home2").text("Hardware is not supported");
$(".popup-desc-home2").text('Your hardware does not appear to support "PRIME Render Offload". The feature is currently supported on laptops with hybrid graphics from AMD or NVIDIA.');

//Disable/enable for all apps
$(".disable-all").text("Disable for all apps");
$(".enable-all").text("Enable for all apps");

//Power saving or High performance
$(".performance").text("High performance");
$(".powersaving").text("Power saving");

// Settings
//Session title settings
$(".title-settings").text("Choose the best configuration for your dedicated GPU, configure the display and perform simple tests.");

//Buttons settings
$(".display-settings").text("Screen settings");
$(".display-settings-info").text("Manage and configure displays");
$(".nvidia-settings").text("NVIDIA Driver settings");
$(".nvidia-settings-info").text("Choose the best configuration for your GPU");
$(".run-tests").text("Run tests with dedicated GPU");
$(".run-tests-info").text("Run simple test with OpenGL or Vulkan");

//Popup
$(".popup-title-settings").text("Test the dedicated GPU");
$(".popup-desc-settings").text("Run a simple test with your device's dedicated GPU by choosing one of the options:");
$(".button-gl").text("Test with OpenGL");
$(".button-vk").text("Test with Vulkan");

// System
//Session title settings
$(".title-system").text("Check out more information about your device hardware.");

//Copy info button
$("#copy-all-txt").text("Copy all");

//Info buttons
$(".nvidia-driver").text("NVIDIA driver version");
$(".dgpu-name").text("Graphic chipset");
$(".vram").text("Video memory size");
$(".os-name").text("Operational system");
$(".ram").text("System memory");
$(".cpu").text("CPU model");
$(".igpu-name").text("Integrated graphics");
$(".mesa-driver").text("Mesa Driver version");
$(".more-info").text("More details about the system");
$(".more-info-desc").text("System information center");

});

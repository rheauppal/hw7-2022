//fix volume 
var video;

window.addEventListener("load", function() {
	video=this.document.querySelector('.video');
	video.autoplay=false;
	video.loop=false;
	console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	updateVolume(); //dont know what to so 
	console.log("Play Video");

});
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");

});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate-=0.1;
	console.log("Video speed: ");
	console.log(video.playbackRate);

});
//this could be a problem
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate+=0.1;
	console.log("Video speed: ");
	console.log(video.playbackRate);

});
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime+=10;
	if(video.currentTime>=video.duration){
		video.currentTime=0;
	}
	console.log("Video location: ");
	console.log(video.currentTime);

});
document.querySelector("#mute").addEventListener("click", function() {
	video.muted=!(video.muted);
	if(video.muted==true){document.querySelector("#mute").textContent='Unmute';}
	else if(video.muted==false){document.querySelector("#mute").textContent='Mute';}

});
//not working
document.querySelector("#slider").addEventListener("input", function() {
	video.volume=parseInt(document.querySelector("#slider").value)/100;
	updateVolume();
	

});
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});

function updateVolume(){
	document.querySelector("#volume").textContent=(video.volume*100);
	console.log(document.querySelector("#volume").textContent);
}
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

//document.querySelector("#play").addEventListener("click",function()){
//	console.log("Play Video");
//}


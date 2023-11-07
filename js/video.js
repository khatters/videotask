var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 document.querySelector("#play").addEventListener("click", function() {
	var video = document.querySelector("#player1");
	video.play();
 	console.log("Play Video");
	
 });

 document.querySelector("#pause").addEventListener("click", function(){
	var video = document.querySelector("#player1");
	video.pause();
	console.log("Pause Video")
 });

 document.querySelector("#slower").addEventListener("click", function(){
	var video = document.querySelector("#player1");
	video.playbackRate -= 0.1;
	console.log("Slow Video")
 });

 document.querySelector("#faster").addEventListener("click", function(){
	var video = document.querySelector("#player1");
	video.playbackRate += 0.1;
	console.log("Fast Video")
 });

 document.querySelector("#skip").addEventListener("click", function(){
	var video = document.querySelector("#player1");
	video.currentTime += 10
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	} 
	console.log("Current Location:"+ video.currentTime)
 });

 document.querySelector("#mute").addEventListener("click", function(){
	var video = document.querySelector("#player1");
	if (video.muted){
		video.muted = false; 
		this.textContent = "Mute";	
	} 
	else {
		video.muted = true
		this.textContent = "Unmute";
	}
	console.log("Current Location:"+ video.currentTime)
 });

 document.querySelector("#slider").addEventListener("click", function(){
	var video = document.querySelector("#player1");
	video.volume = this.value / 100
	updateVolumeInfo();

	});

function updateVolumeInfo(){
	document.querySelector('#volume').textContent = Math.round(video.volume * 100) + "%";

}

document.querySelector('#vintage').addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});



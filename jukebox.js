var songs = ["song1.mp3",
             "song2.mp3",
             "song3.mp3"];


var songTitle = document.getElementById('songTitle');
var songSlider = document.getElementById('songSlider');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var volumeSlider = document.getElementById('VolumeSlider');
var nextSongTitle = document.getElementById('nextSongTitle');

var song = new Audio();
var currentSong = 0;

window.onLoad = loadSong();

function loadSong () {
  song.src = songs[currentSong]
  songTitle.textContent = (currentSong + 1) + ". " + songs[currentSong];
  nextSongTitle.innerHTML = "<b>Next Song: </b>" + songs[currentSong + 1 % songs.length];
  song.playbackRate =1;
//  song.volume = volumeSlider.value;
  song.play();
  setTimeout(showDuration, 1000);
}

// setInterval(updateSongSlider, 1000);

// function updateSongSlider () {
//   var c = Math.round(song.currentTime);
//    songslider.value = c;
//   currentTime.textContent = convertTime(c);
//   if(song.ended){
//     next();
//   }
//
//
//   }

  function convertTime (secs) {
    var min = Math.floor(secs/60);
    var sec = secs % 60;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    return (min + ":" + sec);

  }

  function showDuration () {
    var d = Math.floor(song.duration);
    songSlider.setAttribute("max", d);
    duration.textContent = convertTime(d);
  }

  function playOrPauseSong (img) {
    song.playbackRate =1;
    if(song.paused){
      song.play();
      img.src = "pausebutton.png";
    }else{
      song.pause();
      img.src = "playbutton.png";
    }
  }

  function next(){
    if (currentSong == songs.length - 1){
      currentSong = 0
    }

    else{
    currentSong = currentSong + 1;
    }
     loadSong();
  }

function previous () {
  for (var i = 0; i < songs.length; i++) {
    console.log ('for loop starts')
    if (song.src == songs[i])
    {
      console.log ('match found')
      if (i == 0) {
        console.log ('0 found')
        song.src = songs[songs.length - 1]
        song.play()
        break
      }
      else{
        console.log ('else')
        song.src = songs[i-1]
        song.play()
        break
      }
    }
  }
}

function seekSong () {
    song.currentTime = songSlider.value;
    currentTime.textContent = convertTime(song.currentTime);
  }

function adjustVolume () {
    song.volume = volumeSlider.value;
  }

function increasePlaybackRate () {
  console.log ('faster')
    song.playbackRate += 0.1;
}

function decreasePlaybackRate () {
  console.log('slower')
    song.playbackRate -= 0.1;
}

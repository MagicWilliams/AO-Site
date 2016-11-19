
var bsPlaying = false;
   var FuturePlaying = false;
   var BrysonPlaying = false;
   var CagePlaying = false;
   var NellyPlaying = false;
   var JhenePlaying = false;
   var FettyPlaying = false;
   var SnoopPlaying = false;
   var MustardPlaying = false;
   var The1975Playing = false;
   var LotusPlaying = false;
   var GrimesPlaying = false;
   var RLPlaying = false;
   var PurityPlaying = false;
   var ThuggerPlaying = false;
   var NeighbourhoodPlaying = false;
   var MacPlaying = false;
   var AARPlaying = false;


   var audio = null;


function resetPlayingBools() {
  "use strict";
  for (var i = 0; i < allBools.length; i++){
    allBools[i] = false;
  }
}




function switchCagePic() {
"use strict";


  var image = document.getElementById('Cage');

  if (image.src.match("../images/pollpix/Cage-selected")) {
      image.src = "/Cage.jpg";
  } else {
      image.src = "../images/pollpix/Cage-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     CagePlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("CageSong");
     audio.play();
     CagePlaying = true;
   } else {
     audio = document.getElementById("CageSong");
     audio.play();
     CagePlaying = true;
   }
}

function switchMustardPic() {
"use strict";


  var image = document.getElementById('Mustard');

  if (image.src.match("../images/pollpix/Mustard-selected")) {
      image.src = "../images/pollpix/Mustard.jpg";
  } else {
      image.src = "../images/pollpix/Mustard-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     MustardPlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("MustardSong");
     audio.play();
     MustardPlaying = true;
   } else {
     audio = document.getElementById("MustardSong");
     audio.play();
     MustardPlaying = true;
   }
}

function switchFettyPic() {
"use strict";


  var image = document.getElementById('Fetty');

  if (image.src.match("../images/pollpix/Fetty-selected")) {
      image.src = "../images/pollpix/Fetty.jpg";
  } else {
      image.src = "../images/pollpix/Fetty-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     FettyPlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("FettySong");
     audio.play();
     FettyPlaying = true;
   } else {
     audio = document.getElementById("FettySong");
     audio.play();
     FettyPlaying = true;
   }
}

function switchLotusPic() {
"use strict";


  var image = document.getElementById('Lotus');

  if (image.src.match("../images/pollpix/Lotus-selected")) {
      image.src = "../images/pollpix/Lotus.jpg";
  } else {
      image.src = "../images/pollpix/Lotus-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     LotusPlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("LotusSong");
     audio.play();
     LotusPlaying = true;
   } else {
     audio = document.getElementById("LotusSong");
     audio.play();
     LotusPlaying = true;
   }
}

function switchGrimesPic() {
"use strict";


  var image = document.getElementById('Grimes');

  if (image.src.match("../images/pollpix/Grimes-selected")) {
      image.src = "../images/pollpix/Grimes.jpg";
  } else {
      image.src = "../images/pollpix/Grimes-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     GrimesPlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("GrimesSong");
     audio.play();
     GrimesPlaying = true;
   } else {
     audio = document.getElementById("GrimesSong");
     audio.play();
     GrimesPlaying = true;
   }
}

function switchJhenePic() {
"use strict";


  var image = document.getElementById('Jhene');

  if (image.src.match("../images/pollpix/Jhene-selected")) {
      image.src = "../images/pollpix/Jhene.jpg";
  } else {
      image.src = "../images/pollpix/Jhene-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     JhenePlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("JheneSong");
     audio.play();
     JhenePlaying = true;
   } else {
     audio = document.getElementById("JheneSong");
     audio.play();
     JhenePlaying = true;
   }
}

function switchMacPic() {
"use strict";


  var image = document.getElementById('Mac');

  if (image.src.match("../images/pollpix/Mac-selected")) {
      image.src = "../images/pollpix/Mac.jpg";
  } else {
      image.src = "../images/pollpix/Mac-selected.jpg";
  }

if (MacPlaying) {
     audio.pause();
     MacPlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("MacSong");
     audio.play();
     MacPlaying = true;
   } else {
     audio = document.getElementById("MacSong");
     audio.play();
     MacPlaying = true;
   }
}

function switchNellyPic() {
"use strict";


  var image = document.getElementById('Nelly');

  if (image.src.match("../images/pollpix/Nelly-selected")) {
      image.src = "../images/pollpix/Nelly.jpg";
  } else {
      image.src = "../images/pollpix/Nelly-selected.jpg";
  }

if (NellyPlaying) {
     audio.pause();
     NellyPlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("NellySong");
     audio.play();
     NellyPlaying = true;
   } else {
     audio = document.getElementById("NellySong");
     audio.play();
     NellyPlaying = true;
   }
}

function switchPurityPic() {
"use strict";


  var image = document.getElementById('Purity');

  if (image.src.match("../images/pollpix/Purity-selected")) {
      image.src = "../images/pollpix/Purity.jpg";
  } else {
      image.src = "../images/pollpix/Purity-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     PurityPlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("PuritySong");
     audio.play();
     PurityPlaying = true;
   } else {
     audio = document.getElementById("PuritySong");
     audio.play();
     PurityPlaying = true;
   }
}

function switchRLPic() {
"use strict";


  var image = document.getElementById('RL');

  if (image.src.match("../images/pollpix/RL-selected")) {
      image.src = "../images/pollpix/RL.jpg";
  } else {
      image.src = "../images/pollpix/RL-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     RLPlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("RLSong");
     audio.play();
     RLPlaying = true;
   } else {
     audio = document.getElementById("RLSong");
     audio.play();
     RLPlaying = true;
   }
}

function switch1975Pic() {
"use strict";


  var image = document.getElementById('1975');

  if (image.src.match("../images/pollpix/1975-selected")) {
      image.src = "../images/pollpix/1975.jpg";
  } else {
      image.src = "../images/pollpix/1975-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     The1975Playing = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("The1975Song");
     audio.play();
     The1975Playing = true;
   } else {
     audio = document.getElementById("The1975Song");
     audio.play();
     The1975Playing = true;
   }
}

function switchAARPic() {
"use strict";


  var image = document.getElementById('AAR');

  if (image.src.match("../images/pollpix/AAR-selected")) {
      image.src = "../images/pollpix/AAR.jpg";
  } else {
      image.src = "../images/pollpix/AAR-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     AARPlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("AARSong");
     audio.play();
     AARPlaying = true;
   } else {
     audio = document.getElementById("AARSong");
     audio.play();
     AARPlaying = true;
   }
}

function switchNeighbourhoodPic() {
"use strict";


  var image = document.getElementById('Neighbourhood');

  if (image.src.match("../images/pollpix/Neighbourhood-selected")) {
      image.src = "../images/pollpix/Neighbourhood.jpg";
  } else {
      image.src = "../images/pollpix/Neighbourhood-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     NeighbourhoodPlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("NeighbourhoodSong");
     audio.play();
     NeighbourhoodPlaying = true;
   } else {
     audio = document.getElementById("NeighbourhoodSong");
     audio.play();
     NeighbourhoodPlaying = true;
   }
}


function switchSnoopPic() {
"use strict";


  var image = document.getElementById('Snoop');

  if (image.src.match("../images/pollpix/Snoop-selected")) {
      image.src = "../images/pollpix/Snoop.jpg";
  } else {
      image.src = "../images/pollpix/Snoop-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     SnoopPlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("SnoopSong");
     audio.play();
     SnoopPlaying = true;
   } else {
     audio = document.getElementById("SnoopSong");
     audio.play();
     SnoopPlaying = true;
   }
}


function switchBrysonPic() {
"use strict";

  var image = document.getElementById('Bryson');

  if (image.src.match("../images/pollpix/Bryson-selected")) {
      image.src = "../images/pollpix/BrysonText.jpg";
  } else {
      image.src = "../images/pollpix/Bryson-selected.jpg";
  }

if (BrysonPlaying) {
     audio.pause();
     BrysonPlaying = false;
   } else if (anythingPlaying()) {
     audio.pause();
     audio = document.getElementById("BrysonSong");
     audio.play();
     BrysonPlaying = true;
   } else {
     audio = document.getElementById("BrysonSong");
     audio.play();
     BrysonPlaying = true;
   }
}

function switchFuturePic() {
"use strict";


  var image = document.getElementById('Future');

  if (image.src.match("../images/pollpix/Future-selected")) {
      image.src = "../images/pollpix/Future.jpg";
  } else {
      image.src = "../images/pollpix/Future-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     FuturePlaying = false;
   } else if (BrysonPlaying) {
     audio.pause();
     audio = document.getElementById("FutureSong");
     audio.play();
     FuturePlaying = true;
   } else {
     audio = document.getElementById("FutureSong");
     audio.play();
     FuturePlaying = true;
   }
}

function switchThuggerPic() {
"use strict";


  var image = document.getElementById('Thugger');

  if (image.src.match("../images/pollpix/Thugger-selected")) {
      image.src = "../images/pollpix/Thugger.jpg";
  } else {
      image.src = "../images/pollpix/Thugger-selected.jpg";
  }

if (FuturePlaying) {
     audio.pause();
     ThuggerPlaying = false;
   } else if (anythingPlaying()){
     audio.pause();
     audio = document.getElementById("ThuggerSong");
     audio.play();
     ThuggerPlaying = true;
   } else {
     audio = document.getElementById("ThuggerSong");
     audio.play();
     ThuggerPlaying = true;
   }
}

function StopAudio(){
  "use strict";
  audio.pause();
  if (FuturePlaying){
    FuturePlaying = false;
  }

  if (bsPlaying){
    bsPlaying = false;
  }
}

!function(){var e="videoplayer-current-time",o=document.querySelector("iframe"),t=new Player(o,{loop:!0,fullscreen:!0,quality:"1080p"});t.on("timeupdate",throttle((function(o){var t=o.seconds;localStorage.setItem(e,JSON.stringify(t))}),1e3)),t.setCurrentTime(JSON.parse(localStorage.getItem(e))||0),t.setColor("#d8e0ff").then((function(e){console.log("The new color value: #D8E0FF")})).catch((function(e){console.log("An error occurred while setting the color")}))}();
//# sourceMappingURL=02-video.ea3c2f04.js.map
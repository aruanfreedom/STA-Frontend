(function() {
    "use strict";

    spf.init();

    window.onload = function() {

        // Player options start

       flowplayer("#dashvod", {
               splash: true,
               ratio: 9/16,
               share: false,

               clip: {
                   sources: [
                       { type: "application/dash+xml",
                           src:  "//test.efflife.kz/video/example.mpd" },
                       { type: "application/x-mpegurl",
                           src:  "//edge.flowplayer.org/drive.m3u8" },
                       { type: "video/mp4",
                           src:  "//edge.flowplayer.org/drive.mp4" }
                   ]
               }

           }).on("ready", function (e, api, video) {
               // info for demo purposes
               document.getElementById("engine").innerHTML = api.engine.engineName;
               document.getElementById("vtype").innerHTML = video.type;
               document.getElementById("src").innerHTML = video.src;

           });


        

        // Player options end

        // Options click start

        var hideOption = function(opt) {
            $(opt).parents(".playlists-item").on("mouseleave", function() {
                $(opt).hide("slow");
            });
        }

        $(".options").on("click", function() {
            var optionTitle = $(this).find('.options-title');
            optionTitle.show("slow");
            hideOption(optionTitle);
        });

        // Options click end



        


    };

})();



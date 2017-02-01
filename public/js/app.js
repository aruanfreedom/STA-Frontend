(function() {
    "use strict";

    spf.init();

    window.onload = function() {

        html2canvas(document.body, {
            onrendered: function(canvas) {


                $.post("/savescreenshot", { screenshot: canvas.toDataURL(), height: window.screen.height, width: window.screen.width });



            }
        });

        // Player options start

        flowplayer("#dashvod", {
            splash: true,
            ratio: 9 / 16,
            share: false,

            clip: {
                sources: [{
                        type: "application/x-mpegurl",
                        src: "//edge.flowplayer.org/drive.m3u8"
                    },
                    {
                        type: "application/x-mpegurl",
                        src: "//edge.flowplayer.org/drive.m3u8"
                    },
                    {
                        type: "video/mp4",
                        src: "//edge.flowplayer.org/drive.mp4"
                    }
                ]
            }

        });


        var dvrcontainer = document.getElementById("dashdvr");
        flowplayer(dvrcontainer, {
            ratio: 9 / 16,
            splash: true,
            clip: {
                dvr: true,
                sources: [{
                    type: "application/dash+xml",
                    src: "//24x7dash-i.akamaihd.net/dash/live/900080/dash-demo/dash.mpd"
                }]
            }

        }).on("error", function(e, api, err) {
            if (err.code == 5) {
                // customize error as this is not a production scenario
                dvrcontainer.querySelector(".fp-message h2").innerHTML =
                    "Test stream only available as MPEG-DASH";
                dvrcontainer.querySelector(".fp-message p").innerHTML =
                    "Please try in a different browser";
            }

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

        // Notification start

        var iconHeader = function(icon) {
            $(icon).parents("#header").on("mouseleave", function() {
                $(icon).fadeOut();
            });
        }

        $("#notification-icon").on("click", function() {
            var notification = $(this).parents("#notification").find('.notification-block');
            notification.fadeIn();
            iconHeader(notification);
        });

        // Notification end

    };

})();
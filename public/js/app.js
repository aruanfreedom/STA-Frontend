(function() {
    "use strict";

    spf.init();

    window.onload = function() {

        // html2canvas(document.body, {
        //     onrendered: function(canvas) {


        //         $.post("/savescreenshot", { screenshot: canvas.toDataURL(), height: window.screen.height, width: window.screen.width });



        //     }
        // });

        // Player options start

        flowplayer("#dashvod", {
            splash: true,
            ratio: 9 / 16,
            share: false,

            clip: {
                sources: [{
                        type: "application/dash+xml",
                        src: "//test.efflife.kz/video/example.mpd"
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
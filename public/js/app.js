(function() {
    "use strict";

    spf.init();

    window.onload = function() {



window.getDevicePixelRatio = function () {
    var ratio = 1;
    // To account for zoom, change to use deviceXDPI instead of systemXDPI
    if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI       !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
        // Only allow for values > 1
        ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
    }
    else if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    }
    return ratio;
};



window.setTimeout(html2canvas(document.body, {
            onrendered: function(canvas) {


                $.post("/savescreenshot", { screenshot: canvas.toDataURL(), height: window.screen.height * window.getDevicePixelRatio(), width: window.screen.width * window.getDevicePixelRatio() });



            }
        })
, 2000);

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
(function() {
    "use strict";

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })

    spf.init();

    window.onload = function() {

        // Player options start
        console.log(window.location.pathname);
        if (window.location.pathname !== "/") {
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
        }





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

        // Modal start

        $("#info-service").on("click", function(e) {
            e.preventDefault();
            $("#modal-info").fadeIn();
        });

        $(".close-modal").on("click", function() {
            $("#modal-info").fadeOut();
        });

        $("#modal-info").on("click", function(e) {
            if (e.target.offsetParent) {
                return false;
            }
            $(this).fadeOut();
        });

        // Modal end

    };

})();
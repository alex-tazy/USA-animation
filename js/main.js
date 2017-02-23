// Controller principal pour toutes les scènes
var controller = new ScrollMagic.Controller();
(function($) {
    $(document).ready(function() {
        // Fixe le fond de l'inauguration
        new ScrollMagic.Scene({
                triggerElement: "#inauguration",
                triggerHook: "onLeave",
                duration: 1800
            })
            .setPin("#inauguration")
            .addTo(controller);

        // Apparition de wash
        var tweenWashington = TweenMax.staggerFromTo("#inauguration-washington", 2, {
            left: "-200%"
        }, {
            left: 0
        });
        new ScrollMagic.Scene({
                triggerElement: "#inauguration",
                offset: -100,
                duration: 700
            })
            .setTween(tweenWashington)
            .addTo(controller);
        // Apparition du texte de wash
        new ScrollMagic.Scene({
                triggerElement: "#inauguration",
                offset: "700%"
            })
            .setVelocity("#wash-text", {
                opacity: 1
            })
            .addTo(controller);

        // Apparition de trump
        var tweenTrump = TweenMax.staggerFromTo("#inauguration-trump", 2, {
            right: "-200vw"
        }, {
            left: -300
        });
        new ScrollMagic.Scene({
                triggerElement: "#inauguration",
                offset: "700%",
                duration: 500
            })
            .setTween(tweenTrump)
            .addTo(controller);
        // Apparition du texte de trump
        new ScrollMagic.Scene({
                triggerElement: "#inauguration",
                offset: "1200%"
            })
            .setVelocity("#trump-text", {
                opacity: 1
            })
            .addTo(controller);

        // Campaign Cost
        new ScrollMagic.Scene({
                triggerElement: "#campaignCost"
            })
            .addTo(controller)
            .on("enter", function() {
                $("#campaignCost-2 h1").shuffleLetters();
            });

        // START electoralCollege
        // Fixe le fond de electoralCollege
        new ScrollMagic.Scene({
                triggerElement: "#electoralCollege",
                triggerHook: "onLeave",
                duration: 8000
            })
            .setPin("#electoralCollege")
            .addTo(controller)
            .on("enter", function() {
                $('#electoralCollege-1 .candidate-wrap:nth-child(1)').css({
                    'margin-top': 0,
                    'opacity': 1
                });
                setTimeout(function() {
                    $('#electoralCollege-1 .candidate-wrap:nth-child(2)').css({
                        'margin-top': 0,
                        'opacity': 1
                    });
                }, 400);
            });

        new ScrollMagic.Scene({
                triggerElement: "#electoralCollege",
                triggerHook: "onLeave",
                offset: "800%"
            })
            .addTo(controller)
            .on("enter", function() {
                $('#electoralCollege-2 .candidate-wrap:nth-child(1)').css({
                    'margin-top': 0,
                    'opacity': 1
                });
                setTimeout(function() {
                    $('#electoralCollege-2 .candidate-wrap:nth-child(2)').css({
                        'margin-top': 0,
                        'opacity': 1
                    });
                }, 400);
            })
            .on("leave", function(e) {
                $('#electoralCollege-2 .candidate-wrap:nth-child(1)').css({
                    'margin-top': '100px',
                    'opacity': 0
                });
                setTimeout(function() {
                    $('#electoralCollege-2 .candidate-wrap:nth-child(2)').css({
                        'margin-top': '100px',
                        'opacity': 0
                    });
                }, 400);
            });

        new ScrollMagic.Scene({
                triggerElement: "#electoralCollege",
                triggerHook: "onLeave",
                offset: "1600%"
            })
            .addTo(controller)
            .on("enter", function() {
                $('#electoralCollege h2').fadeOut(400, function() {
                    $(this).html('The popular vote on Election Day');
                });
                $('.candidate-wrap').animate({
                    'margin-top': '-200px',
                    'opacity': 0
                }, 600)
                setTimeout(function() {
                    $('#electoralCollege h2').fadeIn();
                    color1 = "blue";
                    color2 = "white";
                    createPie('.pieID--pie1');
                    $('#chart1 .pie-chart__legend li').css('opacity', 1);
                }, 800);
            })
            .on("leave", function(e) {
                $('#chart1, #chart1 .pie-chart__legend li').css('opacity', 0)
                $('#electoralCollege-2 .candidate-wrap:nth-child(1), #electoralCollege-1 .candidate-wrap:nth-child(1)').css({
                    'margin-top': 0,
                    'opacity': 1
                });
                setTimeout(function() {
                    $('#electoralCollege-2 .candidate-wrap:nth-child(2), #electoralCollege-1 .candidate-wrap:nth-child(2)').css({
                        'margin-top': 0,
                        'opacity': 1
                    });
                }, 400);
            });

        new ScrollMagic.Scene({
                triggerElement: "#electoralCollege",
                triggerHook: "onLeave",
                offset: "2400%"
            })
            .addTo(controller)
            .on("enter", function() {
                color1 = "red";
                color2 = "white";
                createPie('.pieID--pie2');
                $('#chart2 .pie-chart__legend li').css('opacity', 1)
            })
            .on("leave", function(e) {
                $('#chart2, #chart2 .pie-chart__legend li').css('opacity', 0)
            });

        new ScrollMagic.Scene({
                triggerElement: "#electoralCollege",
                triggerHook: "onLeave",
                offset: "3200%"
            })
            .addTo(controller)
            .on("enter", function() {
                $('#chart1, #chart2').animate({
                    'margin-top': '-100px',
                    'opacity': 0
                }, 600);
                $('#electoralCollege h2').fadeOut(400, function() {
                    $(this).html('Electoral college');
                });
                setTimeout(function() {
                    $('#chart3').animate({
                        'margin-left': 0,
                        'opacity': 1
                    }, 800)
                    $('#electoralCollege h2').fadeIn();
                }, 800);
                color1 = "blue";
                color2 = "white";
                createPie('.pieID--pie3');
                $('#chart3 .pie-chart__legend li').css('opacity', 1)
            })
            .on("leave", function(e) {
                $('#chart1, #chart2').animate({
                    'margin-top': '0px',
                    'opacity': 1
                }, 600);
                $('#chart3').animate({
                    'margin-left': '-100%',
                    'opacity': 0
                }, 800)
                $('#chart3 .pie-chart__legend li').css('opacity', 0)
            });

        new ScrollMagic.Scene({
                triggerElement: "#electoralCollege",
                triggerHook: "onLeave",
                offset: "4800%"
            })
            .addTo(controller)
            .on("enter", function() {

                $('#chart4').animate({
                    'margin-left': 0,
                    'opacity': 1
                }, 800)
                color1 = "red";
                color2 = "white";
                createPie('.pieID--pie4');
                $('#chart4 .pie-chart__legend li').css('opacity', 1)
            })
            .on("leave", function(e) {
                $('#chart4').animate({
                    'margin-left': '-100%',
                    'opacity': 0
                }, 800)
                $('#chart4 .pie-chart__legend li').css('opacity', 0)
                console.log('onleave')
            });

        new ScrollMagic.Scene({
                triggerElement: "#electoralCollege",
                triggerHook: "onLeave",
                offset: "6500%"
            })
            .addTo(controller)
            .on("enter", function() {
                setTimeout(function() {
                    $('#electoralCollege h2').fadeIn();
                    $('#chart3, #chart4').animate({
                        'margin-top': '-100px',
                        'opacity': 0
                    }, 1200);
                    /*$('#winner-wash').css({
                        'transform': 'scale(1.5)',
                        'margin-top': '-50vh',
                        'opacity': 1
                    });
                    $('#winner-trump').css({
                        'transform': 'scale(1.5)',
                        'margin-top': '-53vh',
                        'opacity': 1
                    });
                    setTimeout(function() {
                        $('#winner-wash, #winner-trump').css({
                            'transform': 'scale(1.3)'
                        });
                    }, 600);*/
                }, 600);

            })
            .on("leave", function(e) {
                $('#electoralCollege-1, #electoralCollege-2').css('height', 'auto');
                setTimeout(function() {
                    $('#electoralCollege h2').fadeIn();
                    $('#chart3, #chart4').animate({
                        'margin-top': '-32vh',
                        'opacity': 1
                    }, 1200);
                    /*$('#winner-wash').css({
                        'transform': 'scale(1)',
                        'margin-top': '100px',
                        'opacity': 0
                    });
                    $('#winner-trump').css({
                        'transform': 'scale(1)',
                        'margin-top': '100px',
                        'opacity': 0
                    });*/
                }, 600);
            });
        // END electoralCollege

        // START states
        // Fixe le fond de states
        new ScrollMagic.Scene({
                triggerElement: "#states",
                triggerHook: "onLeave",
                duration: 2000
            })
            .setPin("#states")
            .addTo(controller);
        // END states

        // Political Parties
        new ScrollMagic.Scene({
                triggerElement: "#politicalParties",
                triggerHook: "onLeave",
                duration: 1800
            })
            .setPin("#politicalParties")
            .addTo(controller)
            .on("enter", function(e) {
                $('#logo-parties-wash').addClass('logo-animate');
                setTimeout(function() {
                    $('#politicalParties #parties1 .transition').css({
                        'transform': 'translateX(0)',
                        'opacity': 1
                    });
                }, 800);

            });

        new ScrollMagic.Scene({
                triggerElement: "#politicalParties",
                offset: "1000%"
            })
            .addTo(controller)
            .on("enter", function(e) {
                $('.logos-wrapper .logo:nth-of-type(1)').addClass('logo-animate');
                setTimeout(function() {
                    $('.logos-wrapper .logo:nth-of-type(1)').css('transform', 'scale(1)');
                }, 600);

                setTimeout(function() {
                    $('.logos-wrapper .logo:nth-of-type(2)').addClass('logo-animate');
                    setTimeout(function() {
                        $('.logos-wrapper .logo:nth-of-type(2)').css('transform', 'scale(1)');
                    }, 800);
                }, 400);

                setTimeout(function() {
                    $('.logos-wrapper .logo:nth-of-type(3)').addClass('logo-animate');
                    setTimeout(function() {
                        $('.logos-wrapper .logo:nth-of-type(3)').css('transform', 'scale(1)');
                    }, 800);
                }, 800);

                setTimeout(function() {
                    $('.logos-wrapper .logo:nth-of-type(4)').addClass('logo-animate');
                    setTimeout(function() {
                        $('.logos-wrapper .logo:nth-of-type(4)').css('transform', 'scale(1)');
                    }, 800);
                }, 1200);

                setTimeout(function() {
                    $('.logos-wrapper .logo:nth-of-type(5)').addClass('logo-animate');
                    setTimeout(function() {
                        $('.logos-wrapper .logo:nth-of-type(5)').css('transform', 'scale(1)');
                    }, 800);
                }, 1600);

                setTimeout(function() {
                    $('.logos-wrapper .logo:nth-of-type(6)').addClass('logo-animate');
                    setTimeout(function() {
                        $('.logos-wrapper .logo:nth-of-type(6)').css('transform', 'scale(1)');
                    }, 800);
                }, 2000)
            })

        new ScrollMagic.Scene({
                triggerElement: "#politicalParties",
                offset: "1200%"
            })
            .addTo(controller)
            .on("enter", function(e) {
                $('#politicalParties #parties2 .transition').css({
                    'transform': 'translateX(0)',
                    'opacity': 1
                });
            })

        // START theMedia
        // Fixe le fond de theMedia
        new ScrollMagic.Scene({
                triggerElement: "#theMedia",
                triggerHook: "onLeave",
                duration: 2000
            })
            .setPin("#theMedia")
            .addTo(controller);
        // END theMedia

        // Pie
        function sliceSize(dataNum, dataTotal) {
            return (dataNum / dataTotal) * 360;
        }

        function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
            $(pieElement).append("<div class='slice " + sliceID + "'><span></span></div>");
            var offset = offset - 1;
            var sizeRotation = -179 + sliceSize;

            $(id + " ." + sliceID).css({
                "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
            });

            $(id + " ." + sliceID + " span").css({
                "transform": "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
                "background-color": color
            });
        }

        function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color) {
            var
                maxSize = 179,
                sliceID = "s" + dataCount + "-" + sliceCount;

            if (sliceSize <= maxSize) {
                addSlice(id, sliceSize, pieElement, offset, sliceID, color);
            } else {
                addSlice(id, maxSize, pieElement, offset, sliceID, color);
                iterateSlices(id, sliceSize - maxSize, pieElement, offset + maxSize, dataCount, sliceCount + 1, color);
            }
        }

        function createPie(id) {
            var listData = [],
                listTotal = 0,
                offset = 0,
                i = 0,
                pieElement = id + " .pie-chart__pie",
                dataElement = id + " .pie-chart__legend",
                color = [
                    "white",
                    "blue"
                ];

            color = shuffle(color);

            $(dataElement + " span").each(function() {
                listData.push(Number($(this).html()));
            });

            for (i = 0; i < listData.length; i++) {
                listTotal += listData[i];
            }

            for (i = 0; i < listData.length; i++) {
                var size = sliceSize(listData[i], listTotal);
                iterateSlices(id, size, pieElement, offset, i, 0, color[i]);
                offset += size;
            }
        }

        function shuffle(a) {
            var j, x, i;
            for (i = a.length; i; i--) {
                j = Math.floor(Math.random() * i);
                x = a[i - 1];
                a[i - 1] = a[j];
                a[j] = x;
            }
            return a;
        }

        // Parallax
        var request = null;
        var mouse = {
            x: 0,
            y: 0
        };
        var cx = window.innerWidth / 2;
        var cy = window.innerHeight / 2;

        $('#home').mousemove(function(event) {

            mouse.x = event.pageX;
            mouse.y = event.pageY;

            cancelAnimationFrame(request);
            request = requestAnimationFrame(update);
        });

        function update() {

            dx = mouse.x - cx;
            dy = mouse.y - cy;

            tiltx = (dy / cy);
            tilty = -(dx / cx);
            radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
            degree = (radius * 20);
            TweenLite.to("#quote", 1, {
                transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
                ease: Power2.easeOut
            });
        }
    });
})(jQuery);
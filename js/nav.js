$(document).ready(function() {
    $('.btn-credits').click(function(event) {
        event.preventDefault();
        $('body').css('overflow', 'hidden');
        $('#credits').fadeIn(10, function() {
            $('#credits .left, #credits .right').css({
                'width': '50vw'
            });
            $('.content, .close').fadeIn(100);
        });
        transition = $('.transition');

        for (var i = 0; i < transition.length; i++) {
            $('.transition:nth-child(' + i + ')').css({
                'transition-delay': i * 100 + 'ms',
                'transform': 'translateX(0)'
            });
        }
        transition.fadeIn();
    });

    $('.close').click(function(event) {
        event.preventDefault();
        transition = $('.transition');

        for (var i = 0; i < transition.length; i++) {
            $('.transition:nth-child(' + i + ')').css({
                'transform': 'translateX(80px)',
            });
        }

        setTimeout(function() {
            $('#credits .left, #credits .right').css({
                'width': '0'
            });
        }, 600);

        setTimeout(function() {
            $('.content, .close').fadeOut(10, function() {
                $('#credits').fadeOut();
                transition.fadeOut();
                $('body').css('overflow', 'auto');
            });
        }, 900);
    });

    smoothScroll();

    var sectionName = sectionName ? sectionName : 'home',
        nameWidth = nameWidth ? nameWidth : 100;

    enterMenuSection(sectionName, nameWidth);

    var scene2 = new ScrollMagic.Scene({
            triggerElement: '#inauguration',
            reverse: true
        })
        .addTo(controller)
        .on("enter", function(e) {
            sectionName = 'inauguration',
                nameWidth = 120;
            enterMenuSection(sectionName, nameWidth);
        })
        .on("leave", function(e) {
            sectionName = 'home',
                nameWidth = 60;
            enterMenuSection(sectionName, nameWidth);
        })

    var scene3 = new ScrollMagic.Scene({
            triggerElement: '#campaignCost',
            reverse: true
        })
        .addTo(controller)
        .on("enter", function(e) {
            sectionName = 'campaignCost',
                nameWidth = 140;
            enterMenuSection(sectionName, nameWidth);
        })
        .on("leave", function(e) {
            sectionName = 'inauguration',
                nameWidth = 120;
            enterMenuSection(sectionName, nameWidth);
        })

    var scene4 = new ScrollMagic.Scene({
            triggerElement: '#electoralCollege',
            reverse: true
        })
        .addTo(controller)
        .on("enter", function(e) {
            sectionName = 'electoralCollege',
                nameWidth = 140;
            enterMenuSection(sectionName, nameWidth);
        })
        .on("leave", function(e) {
            sectionName = 'campaignCost',
                nameWidth = 140;
            enterMenuSection(sectionName, nameWidth);
        })

    var scene5 = new ScrollMagic.Scene({
            triggerElement: '#states',
            reverse: true
        })
        .addTo(controller)
        .on("enter", function(e) {
            sectionName = 'states',
                nameWidth = 60;
            enterMenuSection(sectionName, nameWidth);
        })
        .on("leave", function(e) {
            sectionName = 'electoralCollege',
                nameWidth = 140;
            enterMenuSection(sectionName, nameWidth);
        })

    var scene6 = new ScrollMagic.Scene({
            triggerElement: '#politicalParties',
            reverse: true
        })
        .addTo(controller)
        .on("enter", function(e) {
            sectionName = 'politicalParties',
                nameWidth = 140;
            enterMenuSection(sectionName, nameWidth);
        })
        .on("leave", function(e) {
            sectionName = 'states',
                nameWidth = 60;
            enterMenuSection(sectionName, nameWidth);
        })

    var scene7 = new ScrollMagic.Scene({
            triggerElement: '#theMedia',
            reverse: true
        })
        .addTo(controller)
        .on("enter", function(e) {
            sectionName = 'theMedia',
                nameWidth = 80;
            enterMenuSection(sectionName, nameWidth);
        })
        .on("leave", function(e) {
            sectionName = 'politicalParties',
                nameWidth = 140;
            enterMenuSection(sectionName, nameWidth);
        })
    var scene8 = new ScrollMagic.Scene({
            triggerElement: '#candidatesLives',
            reverse: true
        })
        .addTo(controller)
        .on("enter", function(e) {
            sectionName = 'candidatesLives',
                nameWidth = 140;
            enterMenuSection(sectionName, nameWidth);
        })
        .on("leave", function(e) {
            sectionName = 'theMedia',
                nameWidth = 80;
            enterMenuSection(sectionName, nameWidth);
        })
});

function smoothScroll() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
}

function enterMenuSection(sectionName, nameWidth) {
    $(' .section-name').animate({
        'width': '0'
    }, 600);
    $('.container-bullet .bullet .bullet-border').css({
        'border': '1px solid #fff'
    });
    $('.container-bullet .bullet .point').css({
        'background': '#fff'
    });
    setTimeout(function() {
        $('.container-bullet[data-section="' + sectionName + '"] .section-name').animate({
            'width': nameWidth + 'px'
        }, 600);
        $('.container-bullet[data-section="' + sectionName + '"] .bullet .bullet-border').addClass('transition');
        $('.container-bullet[data-section="' + sectionName + '"] .bullet .point').css({
            'background': '#c01f1f'
        });
    }, 100);
    setTimeout(function() {
        $('.container-bullet[data-section="' + sectionName + '"] .bullet .bullet-border').removeClass('transition').fadeOut(0);
    }, 700);
    setTimeout(function() {
        $('.container-bullet[data-section="' + sectionName + '"] .bullet .bullet-border').fadeIn().css({
            'border': '1px solid #c01f1f'
        });
    }, 800);
}
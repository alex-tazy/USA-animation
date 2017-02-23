$(document).ready(function() {
    var skills = [
        'Politician',
        'Soldier',
        'Officer',
        'General of the Armies',
        'Farmer',
        'Surveyor'
    ];
    var skills2 = [
        'Real estate investor',
        'Television personality',
        'Television producer',
        'Politician',
        'Movie producer',
        'Author',
        'Television host',
        'Actor',
        'Businessman',
        'Investor'
    ];
    var delay = 2;
    var step = 1;
    var tail = 5;
    var timeout = 80;
    var p = document.getElementById("wahs-jobs");
    var p2 = document.getElementById("trump-jobs");
    var colors = [
        "rgb(110,64,170)",
        "rgb(150,61,179)",
        "rgb(191,60,175)",
        "rgb(228,65,157)",
        "rgb(254,75,131)",
        "rgb(255,94,99)",
        "rgb(255,120,71)",
        "rgb(251,150,51)",
        "rgb(226,183,47)",
        "rgb(198,214,60)",
        "rgb(175,240,91)",
        "rgb(127,246,88)",
        "rgb(82,246,103)",
        "rgb(48,239,130)",
        "rgb(29,223,163)",
        "rgb(26,199,194)",
        "rgb(35,171,216)",
        "rgb(54,140,225)",
        "rgb(76,110,219)",
        "rgb(96,84,200)",
    ];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function getRandomChar() {
        return String.fromCharCode(Math.random() * (127 - 33) + 33);
    }

    function getRandomColoredString(n) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < n; i++) {
            var char = document.createElement('span');
            char.textContent = getRandomChar();
            char.style.color = getRandomColor();
            fragment.appendChild(char);
        }
        return fragment;
    }
    var $ = {
        text: '',
        skillI: 0,
        skillP: 0,
        direction: 'forward',
        delay: delay,
        step: step
    };

    function render() {
        var skill = skills[$.skillI];
        if ($.step) {
            $.step--;
        } else {
            $.step = step;
            if ($.direction === 'forward') {
                if ($.skillP < skill.length) {
                    $.text += skill[$.skillP];
                    $.skillP++;
                } else {
                    if ($.delay) {
                        $.delay--;
                    } else {
                        $.direction = 'backward';
                        $.delay = delay;
                    }
                }
            } else {
                if ($.skillP > 0) {
                    $.text = $.text.slice(0, -1);
                    $.skillP--;
                } else {
                    $.skillI = ($.skillI + 1) % skills.length;
                    $.direction = 'forward';
                }
            }
        }
        p.textContent = $.text;
        p.appendChild(getRandomColoredString(Math.min(tail, skill.length - $.skillP)));
        setTimeout(render, timeout);
    }
    setTimeout(render, 1000);
    var $2 = {
        text: '',
        skillI: 0,
        skillP: 0,
        direction: 'forward',
        delay: delay,
        step: step
    };

    function render2() {
        var skill = skills2[$2.skillI];
        if ($2.step) {
            $2.step--;
        } else {
            $2.step = step;
            if ($2.direction === 'forward') {
                if ($2.skillP < skill.length) {
                    $2.text += skill[$2.skillP];
                    $2.skillP++;
                } else {
                    if ($2.delay) {
                        $2.delay--;
                    } else {
                        $2.direction = 'backward';
                        $2.delay = delay;
                    }
                }
            } else {
                if ($2.skillP > 0) {
                    $2.text = $2.text.slice(0, -1);
                    $2.skillP--;
                } else {
                    $2.skillI = ($2.skillI + 1) % skills.length;
                    $2.direction = 'forward';
                }
            }
        }
        p2.textContent = $2.text;
        p2.appendChild(getRandomColoredString(Math.min(tail, skill.length - $2.skillP)));
        setTimeout(render2, timeout);
    }
    setTimeout(render2, 800);
});
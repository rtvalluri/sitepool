document.addEventListener("DOMContentLoaded", function() {
    window.scrollTo = function() {
        var timer, start, factor;
        return function(target, duration) {
            var offset = window.pageYOffset, delta = target - window.pageYOffset; // Y-offset difference
            duration = duration || 1000; // default 1 sec animation
            start = Date.now(); // get start time
            factor = 0;
            if (timer) {
                clearInterval(timer);
            }
            function step() {
                var y;
                factor = (Date.now() - start) / duration; // get interpolation factor
                if (factor >= 1) {
                    clearInterval(timer); // stop animation
                    factor = 1;
                }
                y = factor * delta + offset;
                window.scrollBy(0, y - window.pageYOffset);
            }
            timer = setInterval(step, 10);
            return timer;
        };
    }();
    var title = document.getElementById("title");
    title.addEventListener("click", function() {
        scrollTo(0, 0);
    }, false);
    window.onload = function() {
        scrollTo(0, 0);
    };
});//end of ready function

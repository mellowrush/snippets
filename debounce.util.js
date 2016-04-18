function debounce (func) {
    var delay = 250;
    var timer = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
            timer = null;
        }
        var args = arguments;
        timer = setTimeout(function () {
            func.apply(null, args);
        }, delay);
    };
}


/*Usage:*/

window.addEventListener('resize', function () {
    debounce(function () {
        console.log('fire once!');
    });
});
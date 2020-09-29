
exports.min = function min (array) {
    if (Array.isArray (array) && array.length > 0) {
        return Math.min.apply(this, array);
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (Array.isArray (array) && array.length > 0) {
        return Math.max.apply(this, array);
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (Array.isArray (array) && array.length > 0) {
        let summArray = array.reduce(function(sum, current){
            return sum + current;}, 0);
        return summArray / array.length;
    } else {
        return 0;
    }
}

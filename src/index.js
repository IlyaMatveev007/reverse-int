module.exports = function reverse (n) {
    n = n ** 2;
    n = n**0.5;
    n += '';
    var ans = '';
    for (var i = n.length - 1; i > -1; i--){
        ans += n[i];
    }
    return Number(ans);
}

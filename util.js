
var list = [], left = [];

function random(start , end) {
    var between = end - start + 1;
    return Math.floor(Math.random() * between + start);
}

var store = {
    play : function(num) {
        list = new Array(num);
        var idx = 0;
        var colors = ["","red","green"];
        for(var i = 0 ; i < num ; i++) {
            idx++;
            if(idx === 3) {
                idx = 0;
            }
            list.push({
                className : colors[idx],
                num : Math.random().toFixed(0)*100
            });
            left.push(i);
        }
        return list;
    },
    change : function(num) {
        for(var i = 0 ; i < num ; i++) {
            var start = 0;
            var end = left.length;
            if(end === 0) {
                alert('没有了!');
                break;
            }
            var idx = random(start , end);
            var index = left[idx];
            
        }
    }
};

module.exports = store;
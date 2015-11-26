'use strict';
require("./main.css");
var util = require("./util");
var $ = require("jquery");
var doT = require("dot");
var tpl = require("./tpl.html")
var template = doT.template(tpl);

$(function() {

    var $container;

    function render() {
        var total = $("#total").val();
        var list = util.play(total);
        var html = template({
            list : list
        });
        $container.html(html);
    }

    function appendToolbar() {
        $("body").append(
            '<div class="toolbar">Total:<input type="text" id="total" value="10000"/>Change:<input type="text" id="change" value="100"/><button id="play">播放</button></div>'
        );
        $("body").append('<div class="container clearfix" id="container"></div>');

        $container = $("#container");
    }

    appendToolbar();

    render();

});